import WebDlLogo from "./images/WebDL.mp4"
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const Content = () => {
  return(
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 auto-rows-auto lg:gap-12 h-full w-full py-2 px-6 lg:px-12">
      <div className="grid place-items-center min-h-card shadow-lg font-extrabold text-2xl bg-blue-500 dark:bg-blue-800 rounded-xl dark:text-white text-black 2xl:grid-cols-2 2xl:grid-rows-2 grid-cols-1 gap-2">
        <div className="h-full w-full p-4 flex place-items-center 2xl:row-span-2 rounded-md flex-col text-lg text-justify font-semibold">
          <h1 className="text-4xl font-bold py-8">WebDL</h1>
          <p><a href="https://github.com/Timber1900/WebDL" className="inline-block text-indigo-800 dark:text-blue-400 font-bold">WebDL</a> is a windows application designed to download videos from the web with a focus on popular websites such as: <span className="font-bold">Youtube</span>, <span className="font-bold">Twitch</span>, <span className="font-bold">Imgur</span>, <span className="font-bold">Twitter</span>...</p>
          <p>{"•"} To see a list of currently supported websites click <a href="https://ytdl-org.github.io/youtube-dl/supportedsites.html" className="inline-block text-indigo-800 dark:text-blue-400 font-bold">here</a>.</p>
          <p>{"•"} If you have any issues using the app please report them <a href="https://github.com/Timber1900/WebDL/issues/new/choose" className="inline-block text-indigo-800 dark:text-blue-400 font-bold">here</a>.</p>

        </div>
        <div className="h-full w-full p-4 grid place-items-center 2xl:row-start-auto row-start-1  rounded-md">
          <video autoPlay loop muted playsInline src={WebDlLogo} alt='WebDL' className="rounded-md shadow-xl"/>
        </div>
        <div className="h-full w-full p-4 grid place-items-center rounded-md">
          <div className="flex flex-row place-items-center">
            <GetAppRoundedIcon id="downloadWebDL" className="text-black dark:text-white fill-current w-8 h-8 mx-1"/>
            <label htmlFor='downloadWebDL'>
              <a href="https://github.com/Timber1900/WebDL/releases/latest" className="inline-block text-indigo-800 dark:text-blue-400 font-bold">Download</a>
            </label>
          </div>
        </div>
      </div>
      <div className="grid place-items-center min-h-card shadow-lg font-extrabold text-2xl bg-blue-500 dark:bg-blue-800 rounded-xl dark:text-white text-black 2xl:grid-cols-2 2xl:grid-rows-2 grid-cols-1 gap-2">
        <div className="h-full w-full p-4 grid place-items-center 2xl:row-span-2 bg-red-600 rounded-md">1</div>
        <div className="h-full w-full p-4 grid place-items-center 2xl:row-start-auto row-start-1 bg-green-600 rounded-md">2</div>
        <div className="h-full w-full p-4 grid place-items-center bg-yellow-300 rounded-md">3</div>
      </div>
      <div className="grid place-items-center min-h-card shadow-lg font-extrabold text-2xl bg-blue-500 dark:bg-blue-800 rounded-xl dark:text-white text-black 2xl:grid-cols-2 2xl:grid-rows-2 grid-cols-1 gap-2">
        <div className="h-full w-full p-4 grid place-items-center 2xl:row-span-2 bg-red-600 rounded-md">1</div>
        <div className="h-full w-full p-4 grid place-items-center 2xl:row-start-auto row-start-1 bg-green-600 rounded-md">2</div>
        <div className="h-full w-full p-4 grid place-items-center bg-yellow-300 rounded-md">3</div>
      </div>
      <div className="grid place-items-center min-h-card shadow-lg font-extrabold text-2xl bg-blue-500 dark:bg-blue-800 rounded-xl dark:text-white text-black 2xl:grid-cols-2 2xl:grid-rows-2 grid-cols-1 gap-2">
        <div className="h-full w-full p-4 grid place-items-center 2xl:row-span-2 bg-red-600 rounded-md">1</div>
        <div className="h-full w-full p-4 grid place-items-center 2xl:row-start-auto row-start-1 bg-green-600 rounded-md">2</div>
        <div className="h-full w-full p-4 grid place-items-center bg-yellow-300 rounded-md">3</div>
      </div>
    </div>
  )
}

export default Content;
