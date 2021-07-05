import WebDlLogo from "./images/WebDL.mp4";
import OpenTkExample from "./images/OpenTKExample.mp4"
import MyPhoto from "./images/Me.png";
import EqViewerExample from "./images/3DEqViewer.mp4";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { useRouteMatch, Link } from "react-router-dom";
import { useEffect } from "react";

const Content = () => {
  let match = useRouteMatch();
  useEffect(() => {
    document.title = 'Hugos Github Projects';
  })

  return (
    <div className="z-0 grid w-full h-full grid-cols-1 gap-6 px-6 py-2 lg:grid-cols-2 auto-rows-auto lg:gap-12 lg:px-12">
      <div className="grid grid-cols-1 gap-2 text-2xl font-extrabold text-black bg-blue-500 shadow-lg place-items-center min-h-card dark:bg-blue-800 rounded-xl dark:text-white 2xl:grid-cols-2 2xl:grid-rows-2">
        <div className="flex flex-col w-full h-full p-4 text-lg font-semibold text-justify rounded-md 2xl:row-span-2">
          <h1 className="py-8 text-4xl font-bold text-center">A bit about me!</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Hi! My name's <span className="font-bold">Hugo Teixeira</span>, I'm a 18 year old student from <span className="font-bold">Portugal</span>, <span className="font-bold">Viseu</span>, currently enrolled in <span className="font-bold">ESAM</span> (Escola Secundária Alves Martins), in scientifics with hopes to follow Aerospacial Engineering in university, some of my hobbies include:</p>
          <p className="text-left">{"•"} Programming, mainly <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Javascript</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Typescript</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">C#</code>, <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Python</code></p>
          <p className="text-left">{"•"} Gaming, mostly GTAV, CS:GO, Minecraft.</p>
        </div>
        <div className="grid w-full h-full row-span-2 row-start-2 p-4 rounded-md place-items-center 2xl:row-start-auto">
          <img src={MyPhoto} alt='Hugo' className="border-4 border-white rounded-full shadow-xl w-half dark:border-gray-800" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 text-2xl font-extrabold text-black bg-blue-500 shadow-lg place-items-center min-h-card dark:bg-blue-800 rounded-xl dark:text-white 2xl:grid-cols-2 2xl:grid-rows-2">
        <div className="flex flex-col w-full h-full p-4 text-lg font-semibold text-justify rounded-md 2xl:row-span-2">
          <h1 className="py-8 text-4xl font-bold text-center">WebDL</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<Link to={`${match.url}webdl`} className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">WebDL</Link> is a Windows application designed to download videos from the web with a focus on popular websites such as: <span className="font-bold">YouTube</span>, <span className="font-bold">Twitch</span>, <span className="font-bold">Imgur</span>, <span className="font-bold">Twitter</span>...</p>
          <p className="text-left">{"•"} To see a list of currently supported websites click <a href="https://ytdl-org.github.io/youtube-dl/supportedsites.html" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">here</a>.</p>
          <p className="text-left">{"•"} If you have any issues using the app, please report them <a href="https://github.com/Timber1900/WebDL/issues/new/choose" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">here</a>.</p>
        </div>
        <div className="grid w-full h-full row-start-2 p-4 rounded-md place-items-center 2xl:row-start-auto">
          <video autoPlay loop muted playsInline src={WebDlLogo} alt='WebDL' className="rounded-md shadow-xl" />
        </div>
        <div className="flex flex-col items-center justify-start w-full h-auto p-4 my-auto rounded-md">
          <div className="flex flex-row group place-items-center">
            <GetAppRoundedIcon id="downloadWebDL" className="w-8 h-8 mx-1 text-indigo-800 fill-current  dark:text-blue-400" />
            <label htmlFor='downloadWebDL'>
              <a href="https://github.com/Timber1900/WebDL/releases/latest" className="inline-block font-bold text-indigo-800 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-blue-200 dark:text-blue-400">Download</a>
            </label>
          </div>
          <Link to={`${match.url}webdl`} className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Learn more</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 text-2xl font-extrabold text-black bg-blue-500 shadow-lg place-items-center min-h-card dark:bg-blue-800 rounded-xl dark:text-white 2xl:grid-cols-2 2xl:grid-rows-2">
        <div className="flex flex-col w-full h-full p-4 text-lg font-semibold text-justify rounded-md 2xl:row-span-2">
          <h1 className="py-8 text-4xl font-bold text-center">OpenTK 3D Engine</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://open.timber1900.tk" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">OpenTK 3D Engine</a> is a <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">C#</code> library for 2D/3D applications. The example is a 2D Raycaster written with the help of the library for rendering, however actual 3D functions exist. Heres what it is good for:</p>
          <p className="text-left">{"•"} Easy to create decent performance 2D/3D applications.</p>
          <p className="text-left">{"•"} Can be used as a stepping stone to the actual OpenTK library and all of that OpenGL goodness</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Some drawbacks:</p>
          <p className="text-left">{"•"} Low degree of customizability for shaders.</p>
          <p className="text-left">{"•"} Non regular updates.</p>
        </div>
        <div className="grid w-full h-full row-start-2 p-4 rounded-md place-items-center 2xl:row-start-auto">
          <video autoPlay loop muted playsInline src={OpenTkExample} alt='OpenTK' className="rounded-md shadow-xl" />
        </div>
        <div className="flex flex-col items-center justify-start w-full h-auto p-4 my-auto rounded-md">
          <a href="https://github.com/Timber1900/OpenTK-3D-Engine" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Github</a>
          <a href="https://www.nuget.org/packages/OpenTK.3D.Library/" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Nuget</a>
          <a href="https://open.timber1900.tk" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Documentation</a>
          <a href="https://github.com/Timber1900/RaycasterWithOpenTK" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Raycaster Example</a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 text-2xl font-extrabold text-black bg-blue-500 shadow-lg place-items-center min-h-card dark:bg-blue-800 rounded-xl dark:text-white 2xl:grid-cols-2 2xl:grid-rows-2">
        <div className="flex flex-col w-full h-full p-4 text-lg font-semibold text-justify rounded-md 2xl:row-span-2">
          <h1 className="py-8 text-4xl font-bold text-center">3D Parametric function viewer</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://param.timber1900.tk/" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">3D Parametric function viewer</a> is a progressive web app to visualize 3D parametric functions, it is made in <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">javascript</code> with <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">three.js</code> for the 3D rendering.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;The application is still in it's early stages and I eventually want to add complex function visualization to it to, as well maybe 3d surface equations, however both these are significantly harder to achieve</p>
        </div>
        <div className="grid w-full h-full row-start-2 p-4 rounded-md place-items-center 2xl:row-start-auto">
          <video autoPlay loop muted playsInline src={EqViewerExample} alt='3D Param Eq Viewer Example' className="rounded-md shadow-xl" />
        </div>
        <div className="flex flex-col items-center justify-start w-full h-auto p-4 my-auto rounded-md">
          <a href="https://github.com/Timber1900/3d-parametric-function-viewer" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Github</a>
          <a href="https://param.timber1900.tk/" className="inline-block font-bold text-left text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Website</a>
        </div>
      </div>
    </div>
  )
}

export default Content;
