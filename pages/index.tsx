import Link from 'next/link'
import Head from 'next/head';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Content = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Hugo's Website - Home </title>
      </Head>
      <div className="relative grid h-full gap-0 font-rubik bg-gradient-to-t from-gray-100 to-white dark:bg-gradient-to-t dark:from-[#121717] dark:to-[#0e1212] grid-rows-pancake w-full min-w-[500px]">
        <Header />
        <div className="z-0 grid w-full 2xl:w-[1536px] mx-auto h-full grid-cols-2 gap-6 px-6 py-2 lg:grid-cols-4  lg:gap-12 lg:px-12">
          <div className="grid grid-cols-1 col-span-2 gap-2 text-2xl lg:col-span-4 place-items-center min-h-card rounded-xl 2xl:grid-cols-12 2xl:grid-rows-2">
            <div className="flex flex-col w-full h-full p-4 text-lg rounded-md 2xl:col-span-7 2xl:row-span-2">
              <h1 className="py-8 text-4xl font-bold text-center">A bit about me!</h1>
              <p className="indent-2">Hi! My name's <span className="font-bold">Hugo Teixeira</span>, I'm a 21 year old student from <span className="font-bold">Portugal</span>, <span className="font-bold">Viseu</span>, currently enrolled in <span className="font-bold">IST</span> (Instituto Superior Tecnico), majoring in Aerospacial Engineering, some of my hobbies include:</p>
              <p>{"•"} Programming, mainly <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Javascript</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Typescript</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">C#</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">C</code></p>
              <p>{"•"} Swimming.</p>
              <p className='indent-2'>I'm also the technical director <a className='indent-0' href='https://tlmoto.tecnico.ulisboa.pt/'>TLMoto</a>, a student team that specializes in creating competition eletric motorcicles.</p>
            </div>
            <div className="grid w-full h-full row-span-2 row-start-2 p-4 rounded-md 2xl:col-span-5 place-items-center 2xl:row-start-auto">
              <img src="/Me.png" alt='Hugo' className="aspect-square border-4 border-white rounded-full shadow-xl w-half dark:border-[#0e1212]" />
            </div>
          </div>
          <Card
            Content={
            <>
              <p className="indent-2">
                <Link href="/webdl" as={process.env.BACKEND_URL + '/webdl'}>
                  <a>WebDL</a>
                </Link>
                {" "}is a application designed to download videos from the web with a focus on popular websites such as: <span className="font-bold">YouTube</span>, <span className="font-bold">Twitch</span>, <span className="font-bold">Imgur</span>, <span className="font-bold">Twitter</span>...</p>
              <p className="text-left">{"•"} To see a list of currently supported websites click <a href="https://github.com/ytdl-org/youtube-dl/blob/master/docs/supportedsites.md" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">here</a>.</p>
              <p className="text-left">{"•"} If you have any issues using the app, please report them <a href="https://www.github.com/Timber1900/WebDL/issues/new/choose" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">here</a>.</p>
            </>
            }
            Links={
            <>
              <div className="flex flex-row group place-items-center">
                <GetAppRoundedIcon id="downloadWebDL" className="w-8 h-8 mx-1 text-indigo-800 fill-current dark:text-blue-400" />
                <label htmlFor='downloadWebDL'>
                  <a href="https://www.github.com/Timber1900/WebDL/releases/latest">Download</a>
                </label>
              </div>
              <Link href="/webdl" as={process.env.BACKEND_URL + '/webdl'}>
                <a>{"•"} Learn more</a>
              </Link>
            </>
            }
            vidSource="/WebDL.mp4" place='Left' title='WebDL'
          />
          <Card
            Content={
              <>
                <p className="indent-2"><a href="OpenTK-3D-Engine">OpenTK 3D Engine</a> is a <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">C#</code> library for 2D/3D applications. The example is a 2D Raycaster written with the help of the library for rendering, however actual 3D functions exist. Heres what it is good for:</p>
                <p className="text-left">{"•"} Easy to create decent performance 2D/3D applications.</p>
                <p className="text-left">{"•"} Can be used as a stepping stone to the actual OpenTK library and all of that OpenGL goodness</p>
                <p className="indent-2">Some drawbacks:</p>
                <p className="text-left">{"•"} Low degree of customizability for shaders.</p>
                <p className="text-left">{"•"} Non regular updates.</p>
              </>
            }
            Links={
              <>
                <a href="https://www.github.com/Timber1900/OpenTK-3D-Engine">{"•"} Github</a>
                <a href="https://www.nuget.org/packages/OpenTK.3D.Library/">{"•"} Nuget</a>
                <a href="OpenTK-3D-Engine/">{"•"} Documentation</a>
                <a href="https://www.github.com/Timber1900/RaycasterWithOpenTK">{"•"} Raycaster Example</a>
              </>
            }

            vidSource="/OpenTKExample.mp4" place='Right' title='OpenTK 3D Engine'
          />
          <Card
            Content={
            <>
              <p className="indent-2"><a href="3d-parametric-function-viewer/">3D Parametric function viewer</a> is a progressive web app to visualize 3D parametric functions, it is made in <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">javascript</code> with <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">three.js</code> for the 3D rendering.</p>
              <p className="indent-2">The application is still in it's early stages and I eventually want to add complex function visualization to it to, as well maybe 3d surface equations, however both these are significantly harder to achieve</p>
            </>
            }
            Links={
              <>
                <a href="https://www.github.com/Timber1900/3d-parametric-function-viewer" >{"•"} Github</a>
                <a href="3d-parametric-function-viewer/">{"•"} Website</a>
              </>
            }
            vidSource="/3DEqViewer.mp4" place='Left' title='3D Parametric function viewer'
          />
          <Card
          Content={
            <>
              <p className='indent-2'>Prirdle is a free to play game where you have to guess the prime number! It takes inspiration in the popular game <a className='indent-0' href='https://www.nytimes.com/games/wordle/index.html'>Wordle</a> and alters it so that you have to guess a prime number instead!</p>
              <p>It current features two possible game modes:</p>
              <p>{"•"} Normal mode: You have 7 guesses to guess the prime, only prime numbers are allowed but there are no penalties</p>
              <p>{"•"} Expert mode: You have 7 guesses to guess the prime, only prime numbers are allowed, like the normal game mode, but if you enter 3 numbers that aren't prime you'll start losing a line for every number you place!</p>
            </>
          }
          Links={
            <>
              <a href='https://www.prirdle.com/'>Pridle</a>
            </>
          }
          vidSource="/prirdle.mp4" place='Right' title='Prirdle'
        />
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Content;
