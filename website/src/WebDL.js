import { useEffect, useState } from "react";
import WebDL_Extension_Example from "./images/WebDL_Extension_Example.mp4";
import WebDL_Playlist_Example from "./images/WebDL_Playlist_Example.mp4";
import WebDL_Search_Example from "./images/WebDL_Search_Example.mp4";
import WebDL_VideoOptions_Example from "./images/WebDL_VideoOptions_Example.mp4";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { Link, useRouteMatch } from "react-router-dom";

const CopyButton = ({ copyText, copied, setCopied }) => {
  const copyCommand = (text) => {
    setCopied("Copied!");
    navigator.clipboard.writeText(text)
    setTimeout(() => {
      setCopied("Click to copy.")
    }, 1000);
  }

  return (
    <button aria-label={copied} onClick={() => copyCommand(copyText)} className={`dark:bg-gray-900 bg-gray-400 px-1 py-0.5 rounded-lg focus:outline-none dark:active:bg-gray-700 active:bg-gray-500 transition-colors before:absolute relative before:bottom-[125%] before:w-max before:-inset-x-16 before:text-center before:mx-auto before:bg-gray-400 dark:before:bg-gray-900 before:px-1 before:py-0.5 before:rounded-md before:content-[attr(aria-label)] hover:before:content-[attr(aria-label)] dark:before:content-[attr(aria-label)] after:border-b-4 after:border-r-4 after:rotate-45 after:absolute after:border-gray-400 dark:after:border-gray-900 after:bottom-[120%] after:inset-x-0 after:mx-auto after:w-0 after:h-0 hover:after:opacity-100 after:opacity-0 hover:before:opacity-100 before:opacity-0 after:transition-opacity ${copied === "Copied!" ? 'before:w-[9ch]' : 'before:w-[16ch]'} before:transition-all before:whitespace-nowrap before:overflow-x-hidden select-none before:text-center sm:ml-auto`}>Copy!</button>
  )
}

const WebDL = () => {
  const [copiedWinget, setCopiedWinget] = useState("Click to copy.")
  const [copiedLinux, setCopiedLinux] = useState("Click to copy.")
  let match = useRouteMatch();

  useEffect(() => {
    document.title = 'Hugos Github Projects - WebDL';
  })

  return (
    <div className="z-0 flex flex-col items-center justify-start gap-4 overflow-x-hidden">
      {/*Introduction*/}
      <div className="flex flex-col gap-2 text-lg font-extrabold text-center text-black dark:text-white jus sm:m-4">
        <h1 className="py-5 m-4 text-4xl font-extrabold text-center text-black dark:text-white">WebDL</h1>
        <p className="m-4 font-semibold text-justify">WebDL is a Windows application designed to download videos from the web with a focus on popular websites such as: <span className="font-bold">YouTube</span>, <span className="font-bold">Twitch</span>, <span className="font-bold">Imgur</span>, <span className="font-bold">Twitter</span>...</p>
        <h1 className="py-5 text-4xl font-extrabold text-center text-black dark:text-white">Installing WebDL</h1>
        <h2 className="text-2xl">On Windows</h2>
        <div className="flex flex-col items-center justify-start w-auto h-auto max-w-screen-xl gap-4 m-4 md:grid md:grid-cols-5 md:grid-rows-1 md:place-items-center">
          <div className="flex flex-col items-center justify-start w-full h-24 col-span-3 rounded-lg">
            <h2 className="px-4 py-2">Using winget</h2>
            <code aria-label={"C:>"} className="items-center justify-start inline-block px-2 py-1 mx-1 bg-gray-300 rounded-lg select-text dark:bg-black before:content-[attr(aria-label)] before:mr-2">
              <p className="inline mr-2" >winget install WebDL</p>
              <CopyButton copied={copiedWinget} setCopied={setCopiedWinget} copyText="winget install WebDL" />
            </code>
          </div>
          <div className="w-full h-24 col-span-2 rounded-lg">
            <h2 className="px-4 py-2">Using windows package installer (.exe)</h2>
            <a href="https://github.com/Timber1900/WebDL/releases/download/v10.3.2/WebDL.exe" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">
              <GetAppRoundedIcon id="downloadWebDL" className="w-8 h-8 mx-1 text-indigo-800 fill-current dark:text-blue-400" />
              Download version v10.3.2 (Latest)
            </a>
          </div>
        </div>
        <h2 className="text-2xl">On Linux</h2>
        <div className="flex flex-col items-center justify-start w-auto h-auto max-w-screen-xl gap-4 m-4">
          <p className="text-base font-normal select-none">Download and run <a className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400" href='https://github.com/Timber1900/WebDL/releases/download/beta-linux-v10.3.2/WebDL.sh'>WebDL.sh</a>, make sure to run
            <code aria-label="$" className="items-center justify-start inline-block px-2 py-1 mx-1 bg-gray-300 rounded-lg select-text dark:bg-black before:content-[attr(aria-label)] before:mr-2">
              <p className="inline mr-2">sudo chmod +x ./WebDL.sh</p>
              <CopyButton copied={copiedLinux} setCopied={setCopiedLinux} copyText="sudo chmod +x ./WebDL.sh" />
            </code>
            <p className="inline">to be able to execute the script.</p>
          </p>
        </div>
        <h2 className="text-2xl">On MacOS</h2>
        <div className="flex flex-col items-center justify-start w-auto h-auto max-w-screen-xl gap-4 m-4">
          <p className="text-base font-normal select-none">Download <a className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400" href='https://github.com/Timber1900/WebDL/releases/download/beta-osx-v10.3.2/WebDL.app.7z'>WebDL.app.7z</a>, extract and move it to the applications folder, you will have to allow the application to run in the settings</p>
        </div>
      </div>
      {/* Features index */}
      <div className="flex flex-col justify-start gap-4 ">
        <h1 className="py-5 m-4 text-4xl font-extrabold text-left text-black dark:text-white">WebDL Features</h1>
        <a href="#webdl-chrome-extension" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} WebDL Chrome Extension</a>
        <a href="#webdl-playlist" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Playlist support</a>
        <a href="#webdl-search" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} Search YouTube in WebDL</a>
        <a href="#webdl-trim" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">{"•"} WebDL video options</a>
      </div>
      {/* Chrome Extension */}
      <span className="invisible block h-24 -mt-24" id="webdl-chrome-extension"></span>
      <div className="flex flex-col w-auto h-auto max-w-screen-xl gap-4 m-4 text-2xl font-extrabold text-black md:grid md:grid-rows-1 md:grid-cols-5 rounded-xl md:min-h-card dark:text-white">
        <div className="h-auto p-4 text-lg font-semibold md:col-span-3 md:p-10">
          <h1 className="py-8 text-4xl font-bold text-left">
            WebDL Chrome Extension
          </h1>
          <p className="text-justify">
            WebDL includes an official <a href="https://chrome.google.com/webstore/detail/webpage-downloader/nfkaeignpggbjnhhijmggoeploenicdo" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">Chrome Extension</a> to make downloading videos easier! Simply click the extension button with a video open, or right click on the video and press "Send to WebDL" and the video will be added to the queue. It really is that simple!
          </p>
        </div>
        <div className="grid p-4 md:col-span-2 place-items-center">
          <video autoPlay loop muted playsInline src={WebDL_Extension_Example} alt='WebDL Extension Example' className="m-4 rounded-md shadow-xl" />
        </div>
      </div>
      {/* Playlist */}
      <span className="invisible block h-24 -mt-24" id="webdl-playlist"></span>
      <div className="flex flex-col w-auto h-auto max-w-screen-xl gap-4 m-4 text-2xl font-extrabold text-black md:grid md:grid-rows-1 md:grid-cols-5 rounded-xl md:min-h-card dark:text-white">
        <div className="h-auto p-4 text-lg font-semibold md:col-span-3 md:col-start-3 md:p-10">
          <h1 className="py-8 text-4xl font-bold text-left">Playlist support</h1>
          <p className="text-justify">
            WebDL officialy supports YouTube playlists of any size, the days of slow url copy pasting are finnaly over! Simply use the <a href="#webdl-chrome-extension" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">WebDL Chrome Extension</a> to add the playlist to WebDL, or simply paste the playlist URL directly into WebDL, or use the <a href="#webdl-search" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">WebDL Search Feature</a> to search for the playlist directly in WebDL!
          </p>
        </div>
        <div className="grid p-4 md:col-span-2 md:col-start-1 md:row-start-1 place-items-center">
          <video autoPlay loop muted playsInline src={WebDL_Playlist_Example} alt='WebDL Playlist Example' className="m-4 rounded-md shadow-xl" />
        </div>
      </div>
      {/* Search */}
      <span className="invisible block h-24 -mt-24" id="webdl-search"></span>
      <div className="flex flex-col w-auto h-auto max-w-screen-xl gap-4 m-4 text-2xl font-extrabold text-black md:grid md:grid-rows-1 md:grid-cols-5 rounded-xl md:min-h-card dark:text-white">
        <div className="h-auto p-4 text-lg font-semibold md:col-span-3 md:p-10">
          <h1 className="py-8 text-4xl font-bold text-left">Search YouTube in WebDL</h1>
          <p className="text-justify">
            WebDL also allows you to search youtube directly in the app, simple press the <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Search Youtube</code> button and search, both videos and <a href="#webdl-playlist" className="inline-block font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">playlists</a>  will show up!
          </p>
        </div>
        <div className="grid p-4 md:col-span-2 place-items-center">
          <video autoPlay loop muted playsInline src={WebDL_Search_Example} alt='WebDL Search Example' className="m-4 rounded-md shadow-xl" />
        </div>
      </div>
      {/* Video Options */}
      <span className="invisible block h-24 -mt-24" id="webdl-trim"></span>
      <div className="flex flex-col w-auto h-auto max-w-screen-xl gap-4 m-4 text-2xl font-extrabold text-black md:grid md:grid-rows-1 md:grid-cols-5 rounded-xl md:min-h-card dark:text-white">
        <div className="h-auto p-4 text-lg font-semibold md:col-span-3 md:col-start-3 md:p-10">
          <h1 className="py-8 text-4xl font-bold text-left">WebDL video options</h1>
          <p className="text-justify">
            WebDL offers single video options for downloading, these include changing video quality, changing the type of video/audio, renaming the file before download and cutting the video into pieces! Besides this there are also global options for when videos are added to the queue, these include changing the type of video/audio aswell as allowing custom extensions!
          </p>
        </div>
        <div className="grid p-4 md:col-span-2 md:col-start-1 md:row-start-1 place-items-center">
          <video autoPlay loop muted playsInline src={WebDL_VideoOptions_Example} alt='WebDL Video Options Example' className="m-4 rounded-md shadow-xl" />
        </div>
      </div>
      {/* FAQ Link*/}
      <Link to={`${match.url}faq`} className="inline-block text-4xl font-bold text-indigo-800 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">FAQ</Link>

    </div>


  )
}

export default WebDL;
