import WebDL_Extension_Example from "./images/WebDL_Extension_Example.mp4";
import WebDL_Playlist_Example from "./images/WebDL_Playlist_Example.mp4";
import WebDL_Search_Example from "./images/WebDL_Search_Example.mp4";
import WebDL_VideoOptions_Example from "./images/WebDL_VideoOptions_Example.mp4";

const WebDL = () => {
  return(
    <div className="flex flex-col gap-4 justify-start items-center">
      {/* Chrome Extension */}
      <span className="block h-24 -mt-24 invisible" id="webdl-chrome-extension"></span>
      <div className="md:grid md:grid-rows-1 md:grid-cols-5 flex flex-col gap-4 rounded-xl w-auto max-w-screen-xl h-auto md:min-h-card dark:text-white text-black font-extrabold text-2xl m-4">
        <div className="md:col-span-3 text-lg font-semibold md:p-10 p-4 h-auto">
          <h1 className="text-4xl font-bold py-8 text-left">
            WebDL Chrome Extension
          </h1>
          <p className="text-justify">
            WebDL includes an official <a href="https://chrome.google.com/webstore/detail/webpage-downloader/nfkaeignpggbjnhhijmggoeploenicdo" className="hover:text-indigo-600 dark:hover:text-blue-200 transition-colors duration-300 inline-block text-indigo-800 dark:text-blue-400 font-bold">Chrome Extension</a> to make downloading videos easier! Simply click the extension button with a video open, or right click on the video and press "Send to WebDL" and the video will be added to the queue. It really is that simple!
          </p>
        </div>
        <div className="md:col-span-2 grid place-items-center p-4">
          <video autoPlay loop muted playsInline  src={WebDL_Extension_Example} alt='WebDL Extension Example' className="rounded-md shadow-xl m-4"/>
        </div>
      </div>
      {/* Playlist */}
      <span className="block h-24 -mt-24 invisible" id="webdl-playlist"></span>
      <div className="md:grid md:grid-rows-1 md:grid-cols-5 flex flex-col gap-4 rounded-xl w-auto max-w-screen-xl h-auto md:min-h-card dark:text-white text-black font-extrabold text-2xl m-4">
        <div className="md:col-span-3 md:col-start-3 text-lg font-semibold md:p-10 p-4 h-auto">
          <h1 className="text-4xl font-bold py-8 text-left">Playlist support</h1>
          <p className="text-justify">
            WebDL officialy supports YouTube playlists of any size, the days of slow url copy pasting are finnaly over! Simply use the <a href="#webdl-chrome-extension" className="hover:text-indigo-600 dark:hover:text-blue-200 transition-colors duration-300 inline-block text-indigo-800 dark:text-blue-400 font-bold">WebDL Chrome Extension</a> to add the playlist to WebDL, or simply paste the playlist URL directly into WebDL, or use the <a href="#webdl-search" className="hover:text-indigo-600 dark:hover:text-blue-200 transition-colors duration-300 inline-block text-indigo-800 dark:text-blue-400 font-bold">WebDL Search Feature</a> to search for the playlist directly in WebDL!
          </p>
        </div>
        <div className="md:col-span-2 md:col-start-1 md:row-start-1 grid place-items-center p-4">
          <video autoPlay loop muted playsInline  src={WebDL_Playlist_Example} alt='WebDL Playlist Example' className="rounded-md shadow-xl m-4"/>
        </div>
      </div>
      {/* Search */}
      <span className="block h-24 -mt-24 invisible" id="webdl-search"></span>
      <div className="md:grid md:grid-rows-1 md:grid-cols-5 flex flex-col gap-4 rounded-xl w-auto max-w-screen-xl h-auto md:min-h-card dark:text-white text-black font-extrabold text-2xl m-4">
        <div className="md:col-span-3 text-lg font-semibold md:p-10 p-4 h-auto">
          <h1 className="text-4xl font-bold py-8 text-left">Search YouTube in WebDL</h1>
          <p className="text-justify">
            WebDL also allows you to search youtube directly in the app, simple press the <code className="bg-blue-400 dark:bg-blue-600 px-1 py-0.5 rounded-md">Search Youtube</code> button and search, both videos and <a href="#webdl-playlist" className="hover:text-indigo-600 dark:hover:text-blue-200 transition-colors duration-300 inline-block text-indigo-800 dark:text-blue-400 font-bold">playlists</a>  will show up!
          </p>
        </div>
        <div className="md:col-span-2 grid place-items-center p-4">
          <video autoPlay loop muted playsInline  src={WebDL_Search_Example} alt='WebDL Search Example' className="rounded-md shadow-xl m-4"/>
        </div>
      </div>
      {/* Video Options */}
      <span className="block h-24 -mt-24 invisible" id="webdl-trim"></span>
      <div className="md:grid md:grid-rows-1 md:grid-cols-5 flex flex-col gap-4 rounded-xl w-auto max-w-screen-xl h-auto md:min-h-card dark:text-white text-black font-extrabold text-2xl m-4">
        <div className="md:col-span-3 md:col-start-3 text-lg font-semibold md:p-10 p-4 h-auto">
          <h1 className="text-4xl font-bold py-8 text-left">WebDL video options</h1>
          <p className="text-justify">
            WebDL offers single video options for downloading, these include changing video quality, changing the type of video/audio, renaming the file before download and cutting the video into pieces! Besides this there are also global options for when videos are added to the queue, these include changing the type of video/audio aswell as allowing custom extensions!
          </p>
        </div>
        <div className="md:col-span-2 md:col-start-1 md:row-start-1 grid place-items-center p-4">
          <video autoPlay loop muted playsInline  src={WebDL_VideoOptions_Example} alt='WebDL Video Options Example' className="rounded-md shadow-xl m-4"/>
        </div>
      </div>
    </div>


  )
}

export default WebDL;
