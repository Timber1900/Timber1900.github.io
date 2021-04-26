var app = (function () {
    'use strict';

    function noop() { }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : options.context || []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    /* src\Components\GithubLogo.svelte generated by Svelte v3.37.0 */

    function create_fragment$b(ctx) {
    	let svg;
    	let path;

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr(path, "d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z");
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "width", "48");
    			attr(svg, "height", "48");
    			attr(svg, "viewBox", "0 0 24 24");
    			attr(svg, "class", "svelte-1epf3x9");
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    class GithubLogo extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$b, safe_not_equal, {});
    	}
    }

    /* src\Components\DiscordLogo.svelte generated by Svelte v3.37.0 */

    function create_fragment$a(ctx) {
    	let svg;
    	let g;
    	let path;

    	return {
    		c() {
    			svg = svg_element("svg");
    			g = svg_element("g");
    			path = svg_element("path");
    			attr(path, "d", "M226.011429,0 L29.9885714,0 C13.4582857,0 0,13.4582857 0,30.1348571 L0,227.913143 C0,244.589714 13.4582857,258.048 29.9885714,258.048 L195.876571,258.048 L188.123429,230.985143 L206.848,248.393143 L224.548571,264.777143 L256,292.571429 L256,30.1348571 C256,13.4582857 242.541714,0 226.011429,0 Z M169.545143,191.049143 C169.545143,191.049143 164.278857,184.758857 159.890286,179.2 C179.053714,173.787429 186.368,161.792 186.368,161.792 C180.370286,165.741714 174.665143,168.521143 169.545143,170.422857 C162.230857,173.494857 155.209143,175.542857 148.333714,176.713143 C134.290286,179.346286 121.417143,178.614857 110.445714,176.566857 C102.107429,174.957714 94.9394286,172.617143 88.9417143,170.276571 C85.5771429,168.96 81.92,167.350857 78.2628571,165.302857 C77.824,165.010286 77.3851429,164.864 76.9462857,164.571429 C76.6537143,164.425143 76.5074286,164.278857 76.3611429,164.132571 C73.728,162.669714 72.2651429,161.645714 72.2651429,161.645714 C72.2651429,161.645714 79.2868571,173.348571 97.8651429,178.907429 C93.4765714,184.466286 88.064,191.049143 88.064,191.049143 C55.7348571,190.025143 43.4468571,168.813714 43.4468571,168.813714 C43.4468571,121.709714 64.512,83.5291429 64.512,83.5291429 C85.5771429,67.7302857 105.618286,68.1691429 105.618286,68.1691429 L107.081143,69.9245714 C80.7497143,77.5314286 68.608,89.088 68.608,89.088 C68.608,89.088 71.8262857,87.3325714 77.2388571,84.8457143 C92.8914286,77.9702857 105.325714,76.0685714 110.445714,75.6297143 C111.323429,75.4834286 112.054857,75.3371429 112.932571,75.3371429 C121.856,74.1668571 131.949714,73.8742857 142.482286,75.0445714 C156.379429,76.6537143 171.300571,80.7497143 186.514286,89.088 C186.514286,89.088 174.957714,78.1165714 150.089143,70.5097143 L152.137143,68.1691429 C152.137143,68.1691429 172.178286,67.7302857 193.243429,83.5291429 C193.243429,83.5291429 214.308571,121.709714 214.308571,168.813714 C214.308571,168.813714 201.874286,190.025143 169.545143,191.049143 Z M101.522286,122.733714 C93.184,122.733714 86.6011429,130.048 86.6011429,138.971429 C86.6011429,147.894857 93.3302857,155.209143 101.522286,155.209143 C109.860571,155.209143 116.443429,147.894857 116.443429,138.971429 C116.589714,130.048 109.860571,122.733714 101.522286,122.733714 M154.916571,122.733714 C146.578286,122.733714 139.995429,130.048 139.995429,138.971429 C139.995429,147.894857 146.724571,155.209143 154.916571,155.209143 C163.254857,155.209143 169.837714,147.894857 169.837714,138.971429 C169.837714,130.048 163.254857,122.733714 154.916571,122.733714");
    			attr(svg, "width", "42px");
    			attr(svg, "height", "48px");
    			attr(svg, "viewBox", "0 0 256 293");
    			attr(svg, "version", "1.1");
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    			attr(svg, "preserveAspectRatio", "xMidYMid");
    			attr(svg, "class", "svelte-1epf3x9");
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, g);
    			append(g, path);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    class DiscordLogo extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$a, safe_not_equal, {});
    	}
    }

    /* src\Components\SteamLogo.svelte generated by Svelte v3.37.0 */

    function create_fragment$9(ctx) {
    	let svg;
    	let g;
    	let path;

    	return {
    		c() {
    			svg = svg_element("svg");
    			g = svg_element("g");
    			path = svg_element("path");
    			attr(path, "d", "M127.778579,0 C60.4203546,0 5.24030561,52.412282 0,119.013983 L68.7236558,147.68805 C74.5451924,143.665561 81.5845466,141.322185 89.1497766,141.322185 C89.8324924,141.322185 90.5059824,141.340637 91.1702465,141.377541 L121.735621,96.668877 L121.735621,96.0415165 C121.735621,69.1388208 143.425688,47.2457835 170.088511,47.2457835 C196.751333,47.2457835 218.441401,69.1388208 218.441401,96.0415165 C218.441401,122.944212 196.751333,144.846475 170.088511,144.846475 C169.719475,144.846475 169.359666,144.83725 168.99063,144.828024 L125.398299,176.205276 C125.425977,176.786507 125.444428,177.367738 125.444428,177.939743 C125.444428,198.144443 109.160732,214.575753 89.1497766,214.575753 C71.5836817,214.575753 56.8868387,201.917832 53.5655182,185.163615 L4.40997549,164.654462 C19.6326942,218.967277 69.0834655,258.786219 127.778579,258.786219 C198.596511,258.786219 256,200.847629 256,129.393109 C256,57.9293643 198.596511,0 127.778579,0 Z M80.3519677,196.332478 L64.6033732,189.763644 C67.389592,195.63131 72.2239585,200.539484 78.6359521,203.233444 C92.4932392,209.064206 108.472481,202.430791 114.247888,188.435116 C117.043333,181.663313 117.061785,174.190342 114.294018,167.400086 C111.526251,160.609831 106.295171,155.31417 99.5879487,152.491048 C92.9176301,149.695603 85.7767911,149.797088 79.5031858,152.186594 L95.777656,158.976849 C105.999942,163.276114 110.834309,175.122157 106.571948,185.436702 C102.318812,195.751247 90.574254,200.631743 80.3519677,196.332478 Z M202.30901,96.0424391 C202.30901,78.1165345 187.85204,63.5211763 170.092201,63.5211763 C152.323137,63.5211763 137.866167,78.1165345 137.866167,96.0424391 C137.866167,113.968344 152.323137,128.554476 170.092201,128.554476 C187.85204,128.554476 202.30901,113.968344 202.30901,96.0424391 Z M145.938821,95.9870838 C145.938821,82.4988323 156.779242,71.5661525 170.138331,71.5661525 C183.506646,71.5661525 194.347066,82.4988323 194.347066,95.9870838 C194.347066,109.475335 183.506646,120.408015 170.138331,120.408015 C156.779242,120.408015 145.938821,109.475335 145.938821,95.9870838 Z");
    			attr(svg, "width", "42px");
    			attr(svg, "height", "48px");
    			attr(svg, "viewBox", "0 0 256 259");
    			attr(svg, "version", "1.1");
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    			attr(svg, "preserveAspectRatio", "xMidYMid");
    			attr(svg, "class", "svelte-1epf3x9");
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, g);
    			append(g, path);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    class SteamLogo extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$9, safe_not_equal, {});
    	}
    }

    /* src\Components\YoutubeLogo.svelte generated by Svelte v3.37.0 */

    function create_fragment$8(ctx) {
    	let svg;
    	let style;
    	let t;
    	let g;
    	let path;
    	let polygon;

    	return {
    		c() {
    			svg = svg_element("svg");
    			style = svg_element("style");
    			t = text(".st1{fill:#222831}\r\n");
    			g = svg_element("g");
    			path = svg_element("path");
    			polygon = svg_element("polygon");
    			attr(style, "type", "text/css");
    			attr(path, "d", "M180.3,53.4c-2-7.6-8-13.6-15.6-15.7C151,34,96,34,96,34s-55,0-68.8,3.7c-7.6,2-13.5,8-15.6,15.7\r\n\t\tC8,67.2,8,96,8,96s0,28.8,3.7,42.6c2,7.6,8,13.6,15.6,15.7C41,158,96,158,96,158s55,0,68.8-3.7c7.6-2,13.5-8,15.6-15.7\r\n\t\tC184,124.8,184,96,184,96S184,67.2,180.3,53.4z");
    			attr(polygon, "class", "st1");
    			attr(polygon, "points", "78,122.2 78,69.8 124,96 \t");
    			attr(svg, "width", "48px");
    			attr(svg, "height", "48px");
    			attr(svg, "version", "1.1");
    			attr(svg, "id", "Layer_1");
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    			attr(svg, "x", "0px");
    			attr(svg, "y", "0px");
    			attr(svg, "viewBox", "0 0 192 192");
    			set_style(svg, "enable-background", "new 0 0 192 192");
    			attr(svg, "xml:space", "preserve");
    			attr(svg, "class", "svelte-1epf3x9");
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, style);
    			append(style, t);
    			append(svg, g);
    			append(g, path);
    			append(g, polygon);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    class YoutubeLogo extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$8, safe_not_equal, {});
    	}
    }

    /* src\Components\TwitchLogo.svelte generated by Svelte v3.37.0 */

    function create_fragment$7(ctx) {
    	let svg;
    	let g;
    	let path;

    	return {
    		c() {
    			svg = svg_element("svg");
    			g = svg_element("g");
    			path = svg_element("path");
    			attr(path, "d", "M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z");
    			attr(svg, "width", "48px");
    			attr(svg, "height", "48px");
    			attr(svg, "viewBox", "0 0 256 268");
    			attr(svg, "version", "1.1");
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    			attr(svg, "preserveAspectRatio", "xMidYMid");
    			attr(svg, "class", "svelte-1epf3x9");
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, g);
    			append(g, path);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    class TwitchLogo extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$7, safe_not_equal, {});
    	}
    }

    /* src\Components\Header.svelte generated by Svelte v3.37.0 */

    function create_fragment$6(ctx) {
    	let header;
    	let h1;
    	let t1;
    	let div5;
    	let div0;
    	let githublogo;
    	let t2;
    	let div1;
    	let discordlogo;
    	let t3;
    	let div2;
    	let steamlogo;
    	let t4;
    	let div3;
    	let youtubelogo;
    	let t5;
    	let div4;
    	let twitchlogo;
    	let current;
    	githublogo = new GithubLogo({});
    	discordlogo = new DiscordLogo({});
    	steamlogo = new SteamLogo({});
    	youtubelogo = new YoutubeLogo({});
    	twitchlogo = new TwitchLogo({});

    	return {
    		c() {
    			header = element("header");
    			h1 = element("h1");
    			h1.textContent = "Timber's Github Projects";
    			t1 = space();
    			div5 = element("div");
    			div0 = element("div");
    			create_component(githublogo.$$.fragment);
    			t2 = space();
    			div1 = element("div");
    			create_component(discordlogo.$$.fragment);
    			t3 = space();
    			div2 = element("div");
    			create_component(steamlogo.$$.fragment);
    			t4 = space();
    			div3 = element("div");
    			create_component(youtubelogo.$$.fragment);
    			t5 = space();
    			div4 = element("div");
    			create_component(twitchlogo.$$.fragment);
    			attr(h1, "class", "svelte-z3plw7");
    			attr(div0, "class", "svg-div github svelte-z3plw7");
    			attr(div0, "tooltip", "Github");
    			attr(div1, "class", "svg-div svelte-z3plw7");
    			attr(div1, "tooltip", "Discord");
    			attr(div2, "class", "svg-div svelte-z3plw7");
    			attr(div2, "tooltip", "Steam");
    			attr(div3, "class", "svg-div svelte-z3plw7");
    			attr(div3, "tooltip", "Youtube");
    			attr(div4, "class", "svg-div svelte-z3plw7");
    			attr(div4, "tooltip", "Twitch");
    			attr(div5, "class", "icons-outer svelte-z3plw7");
    			attr(header, "class", "text-primary-color dark-primary-color svelte-z3plw7");
    		},
    		m(target, anchor) {
    			insert(target, header, anchor);
    			append(header, h1);
    			append(header, t1);
    			append(header, div5);
    			append(div5, div0);
    			mount_component(githublogo, div0, null);
    			append(div5, t2);
    			append(div5, div1);
    			mount_component(discordlogo, div1, null);
    			append(div5, t3);
    			append(div5, div2);
    			mount_component(steamlogo, div2, null);
    			append(div5, t4);
    			append(div5, div3);
    			mount_component(youtubelogo, div3, null);
    			append(div5, t5);
    			append(div5, div4);
    			mount_component(twitchlogo, div4, null);
    			current = true;
    		},
    		p: noop,
    		i(local) {
    			if (current) return;
    			transition_in(githublogo.$$.fragment, local);
    			transition_in(discordlogo.$$.fragment, local);
    			transition_in(steamlogo.$$.fragment, local);
    			transition_in(youtubelogo.$$.fragment, local);
    			transition_in(twitchlogo.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(githublogo.$$.fragment, local);
    			transition_out(discordlogo.$$.fragment, local);
    			transition_out(steamlogo.$$.fragment, local);
    			transition_out(youtubelogo.$$.fragment, local);
    			transition_out(twitchlogo.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(header);
    			destroy_component(githublogo);
    			destroy_component(discordlogo);
    			destroy_component(steamlogo);
    			destroy_component(youtubelogo);
    			destroy_component(twitchlogo);
    		}
    	};
    }

    class Header extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$6, safe_not_equal, {});
    	}
    }

    /* src\Components\Footer.svelte generated by Svelte v3.37.0 */

    function create_fragment$5(ctx) {
    	let footer;

    	return {
    		c() {
    			footer = element("footer");

    			footer.innerHTML = `<div class="link svelte-kjvvt5"><a class="text-primary-color svelte-kjvvt5" href="mailto:hugo@hteixeira.me">Contact me!</a></div> 
  <p class="svelte-kjvvt5">Copyright (c) 2020-2021 Timber1900</p>`;

    			attr(footer, "class", "text-primary-color dark-primary-color svelte-kjvvt5");
    		},
    		m(target, anchor) {
    			insert(target, footer, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(footer);
    		}
    	};
    }

    class Footer extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$5, safe_not_equal, {});
    	}
    }

    /* src\Components\LeftSidebar.svelte generated by Svelte v3.37.0 */

    function create_fragment$4(ctx) {
    	let div3;

    	return {
    		c() {
    			div3 = element("div");

    			div3.innerHTML = `<div class="item svelte-1jqmq4i"><a href="https://www.web-dl.live" class="text-primary-color svelte-1jqmq4i">WebDL</a></div> 
  <div class="item svelte-1jqmq4i"><a href="https://open.timber1900.tk" class="text-primary-color svelte-1jqmq4i">OpenTK Library</a></div> 
  <div class="item svelte-1jqmq4i"><a href="/EllipseReflections/" class="text-primary-color svelte-1jqmq4i">Ellipse Reflections</a></div>`;

    			attr(div3, "class", "left-side svelte-1jqmq4i");
    		},
    		m(target, anchor) {
    			insert(target, div3, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(div3);
    		}
    	};
    }

    class LeftSidebar extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$4, safe_not_equal, {});
    	}
    }

    /* src\Components\RightSidebar.svelte generated by Svelte v3.37.0 */

    function create_fragment$3(ctx) {
    	let div;

    	return {
    		c() {
    			div = element("div");
    			div.innerHTML = `<p class="text-primary-color">RightSidebar</p>`;
    			attr(div, "class", "right-side svelte-mfc2i8");
    		},
    		m(target, anchor) {
    			insert(target, div, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(div);
    		}
    	};
    }

    class RightSidebar extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$3, safe_not_equal, {});
    	}
    }

    /* src\Components\MainContent.svelte generated by Svelte v3.37.0 */

    function create_fragment$2(ctx) {
    	let main;

    	return {
    		c() {
    			main = element("main");
    			main.textContent = "Main";
    			attr(main, "class", "text-primary-color light-primary-color svelte-17gu4eh");
    		},
    		m(target, anchor) {
    			insert(target, main, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(main);
    		}
    	};
    }

    class MainContent extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$2, safe_not_equal, {});
    	}
    }

    /* src\Components\Layout.svelte generated by Svelte v3.37.0 */

    function create_fragment$1(ctx) {
    	let div;
    	let header;
    	let t0;
    	let leftsidebar;
    	let t1;
    	let maincontent;
    	let t2;
    	let rightsidebar;
    	let t3;
    	let footer;
    	let current;
    	header = new Header({});
    	leftsidebar = new LeftSidebar({});
    	maincontent = new MainContent({});
    	rightsidebar = new RightSidebar({});
    	footer = new Footer({});

    	return {
    		c() {
    			div = element("div");
    			create_component(header.$$.fragment);
    			t0 = space();
    			create_component(leftsidebar.$$.fragment);
    			t1 = space();
    			create_component(maincontent.$$.fragment);
    			t2 = space();
    			create_component(rightsidebar.$$.fragment);
    			t3 = space();
    			create_component(footer.$$.fragment);
    			attr(div, "class", "main-grid default-primary-color svelte-s1ql11");
    		},
    		m(target, anchor) {
    			insert(target, div, anchor);
    			mount_component(header, div, null);
    			append(div, t0);
    			mount_component(leftsidebar, div, null);
    			append(div, t1);
    			mount_component(maincontent, div, null);
    			append(div, t2);
    			mount_component(rightsidebar, div, null);
    			append(div, t3);
    			mount_component(footer, div, null);
    			current = true;
    		},
    		p: noop,
    		i(local) {
    			if (current) return;
    			transition_in(header.$$.fragment, local);
    			transition_in(leftsidebar.$$.fragment, local);
    			transition_in(maincontent.$$.fragment, local);
    			transition_in(rightsidebar.$$.fragment, local);
    			transition_in(footer.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(header.$$.fragment, local);
    			transition_out(leftsidebar.$$.fragment, local);
    			transition_out(maincontent.$$.fragment, local);
    			transition_out(rightsidebar.$$.fragment, local);
    			transition_out(footer.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(div);
    			destroy_component(header);
    			destroy_component(leftsidebar);
    			destroy_component(maincontent);
    			destroy_component(rightsidebar);
    			destroy_component(footer);
    		}
    	};
    }

    class Layout extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$1, safe_not_equal, {});
    	}
    }

    /* src\App.svelte generated by Svelte v3.37.0 */

    function create_fragment(ctx) {
    	let layout;
    	let current;
    	layout = new Layout({});

    	return {
    		c() {
    			create_component(layout.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(layout, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i(local) {
    			if (current) return;
    			transition_in(layout.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(layout.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(layout, detaching);
    		}
    	};
    }

    class App extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment, safe_not_equal, {});
    	}
    }

    const app = new App({
    	target: document.body,
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
