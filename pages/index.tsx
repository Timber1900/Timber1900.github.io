import Link from 'next/link'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const Content = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Hugo's Github Projects</title>
      </Head>
      <div className="grid min-h-screen gap-0 font-sans bg-white dark:bg-gray-800 grid-rows-pancake">
        <Header />
        <div className="z-0 grid w-full h-full grid-cols-2 gap-6 px-6 py-2 lg:grid-cols-4 auto-rows-auto lg:gap-12 lg:px-12">
          <div className="grid grid-cols-1 col-span-2 gap-2 text-2xl font-extrabold text-black lg:col-span-4 place-items-center min-h-card rounded-xl dark:text-white 2xl:grid-cols-12 2xl:grid-rows-2">
            <div className="flex flex-col w-full h-full p-4 text-lg font-semibold text-justify rounded-md 2xl:col-span-7 2xl:row-span-2">
              <h1 className="py-8 text-4xl font-bold text-center">A bit about me!</h1>
              <p className="indent-2">Hi! My name's <span className="font-bold">Hugo Teixeira</span>, I'm a 18 year old student from <span className="font-bold">Portugal</span>, <span className="font-bold">Viseu</span>, currently enrolled in <span className="font-bold">IST</span> (Instituto Superior Tecnico), <span aria-label="Aerospacial Engineering" className="after:content-[attr(aria-label)] dark:after:content-[attr(aria-label)] after:absolute relative after:-inset-x-40 after:mx-auto after:bg-gray-200 dark:after:bg-gray-600 after:bottom-[120%] after:w-max after:px-1 after:py-0.5 after:rounded after:grid after:place-content-center after:p-0 after:m-0 after:indent-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity hover:after:transition-opacity after:duration-500 hover:after:duration-500 cursor-default after:pointer-events-none hover:after:pointer-events-auto">LEAer</span> 2021, some of my hobbies include:</p>
              <p className="text-left">{"•"} Programming, mainly <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Javascript</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Typescript</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">C#</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Python</code></p>
              <p className="text-left">{"•"} Gaming, mostly GTAV, CS:GO, Minecraft.</p>
            </div>
            <div className="grid w-full h-full row-span-2 row-start-2 p-4 rounded-md 2xl:col-span-5 place-items-center 2xl:row-start-auto">
              <img src="/Me.png" alt='Hugo' className="border-4 border-white rounded-full shadow-xl w-half dark:border-gray-800" />
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-2 gap-2 text-2xl font-extrabold text-black bg-gray-200 shadow-md dark:bg-gray-700 place-items-center min-h-card rounded-xl dark:text-white 2xl:grid-cols-2 2xl:grid-rows-2">
            <div className="flex flex-col w-full h-full p-4 text-lg font-semibold text-justify rounded-md 2xl:row-span-2">
              <h1 className="py-8 text-4xl font-bold text-center">WebDL</h1>
              <p className="indent-2">
                <Link href="/webdl" as={process.env.BACKEND_URL + '/webdl'}>
                  <a className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">WebDL</a>
                </Link>
                {" "}is a application designed to download videos from the web with a focus on popular websites such as: <span className="font-bold">YouTube</span>, <span className="font-bold">Twitch</span>, <span className="font-bold">Imgur</span>, <span className="font-bold">Twitter</span>...</p>
              <p className="text-left">{"•"} To see a list of currently supported websites click <a href="https://ytdl-org.github.io/youtube-dl/supportedsites.html" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">here</a>.</p>
              <p className="text-left">{"•"} If you have any issues using the app, please report them <a href="https://github.com/Timber1900/WebDL/issues/new/choose" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">here</a>.</p>
            </div>
            <div className="grid w-full h-full row-start-2 p-4 rounded-md place-items-center 2xl:row-start-auto">
              <video autoPlay loop muted playsInline src="/WebDL.mp4" className="rounded-md shadow-xl" />
            </div>
            <div className="flex flex-col items-center justify-start w-full h-auto p-4 my-auto rounded-md">
              <div className="flex flex-row group place-items-center">
                <GetAppRoundedIcon id="downloadWebDL" className="w-8 h-8 mx-1 text-indigo-800 fill-current dark:text-blue-400" />
                <label htmlFor='downloadWebDL'>
                  <a href="https://github.com/Timber1900/WebDL/releases/latest" className="inline-block font-bold text-indigo-800 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-blue-200 dark:text-blue-400">Download</a>
                </label>
              </div>
              <Link href="/webdl" as={process.env.BACKEND_URL + '/webdl'}>
                <a className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Learn more</a>
                </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-2 gap-2 text-2xl font-extrabold text-black bg-gray-200 shadow-md dark:bg-gray-700 place-items-center min-h-card rounded-xl dark:text-white 2xl:grid-cols-2 2xl:grid-rows-2">
            <div className="flex flex-col w-full h-full p-4 text-lg font-semibold text-justify rounded-md 2xl:row-span-2">
              <h1 className="py-8 text-4xl font-bold text-center">OpenTK 3D Engine</h1>
              <p className="indent-2"><a href="https://open.timber1900.tk" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">OpenTK 3D Engine</a> is a <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">C#</code> library for 2D/3D applications. The example is a 2D Raycaster written with the help of the library for rendering, however actual 3D functions exist. Heres what it is good for:</p>
              <p className="text-left">{"•"} Easy to create decent performance 2D/3D applications.</p>
              <p className="text-left">{"•"} Can be used as a stepping stone to the actual OpenTK library and all of that OpenGL goodness</p>
              <p className="indent-2">Some drawbacks:</p>
              <p className="text-left">{"•"} Low degree of customizability for shaders.</p>
              <p className="text-left">{"•"} Non regular updates.</p>
            </div>
            <div className="grid w-full h-full row-start-2 p-4 rounded-md place-items-center 2xl:row-start-auto">
              <video autoPlay loop muted playsInline src="/OpenTKExample.mp4" className="rounded-md shadow-xl" />
            </div>
            <div className="flex flex-col items-center justify-start w-full h-auto p-4 my-auto rounded-md">
              <a href="https://github.com/Timber1900/OpenTK-3D-Engine" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Github</a>
              <a href="https://www.nuget.org/packages/OpenTK.3D.Library/" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Nuget</a>
              <a href="https://open.timber1900.tk" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Documentation</a>
              <a href="https://github.com/Timber1900/RaycasterWithOpenTK" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Raycaster Example</a>
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-2 col-start-1 gap-2 text-2xl font-extrabold text-black bg-gray-200 shadow-md dark:bg-gray-700 lg:col-start-2 place-items-center min-h-card rounded-xl dark:text-white 2xl:grid-cols-2 2xl:grid-rows-2">
            <div className="flex flex-col w-full h-full p-4 text-lg font-semibold text-justify rounded-md 2xl:row-span-2">
              <h1 className="py-8 text-4xl font-bold text-center">3D Parametric function viewer</h1>
              <p className="indent-2"><a href="https://param.timber1900.tk/" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">3D Parametric function viewer</a> is a progressive web app to visualize 3D parametric functions, it is made in <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">javascript</code> with <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">three.js</code> for the 3D rendering.</p>
              <p className="indent-2">The application is still in it's early stages and I eventually want to add complex function visualization to it to, as well maybe 3d surface equations, however both these are significantly harder to achieve</p>
            </div>
            <div className="grid w-full h-full row-start-2 p-4 rounded-md place-items-center 2xl:row-start-auto">
              <video autoPlay loop muted playsInline src="/3DEqViewer.mp4" className="rounded-md shadow-xl" />
            </div>
            <div className="flex flex-col items-center justify-start w-full h-auto p-4 my-auto rounded-md">
              <a href="https://github.com/Timber1900/3d-parametric-function-viewer" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Github</a>
              <a href="https://param.timber1900.tk/" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Website</a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Content;
