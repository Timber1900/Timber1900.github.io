import {DiscordLogo, GithubLogo, TwitchLogo, YoutubeLogo, SteamLogo} from "./svgs"

const Footer = () => {
  return(
    <footer className="bg-white dark:bg-gray-800 w-full flex justify-center sticky bottom-0">
      <div className="relative flex h-20 justify-center place-items-center sd:flex-row flex-col border-t border-gray-200 dark:border-gray-700 w-full-minus-padding my-2 max-w-full-minus-padding">
        <div className="md:absolute md:right-0 flex justify-center place-items-center">
          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center">
            <DiscordLogo className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-discord dark:text-white"/>
            <p className="h-auto w-0 group-hover:w-14 transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Discord</p>
          </div>

          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center">
            <GithubLogo  className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-github dark:text-white"/>
            <p className="h-auto w-0 group-hover:w-14 transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Github</p>
          </div>

          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center">
            <TwitchLogo  className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-twitch"/>
            <p className="h-auto w-0 group-hover:w-14 transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Twitch</p>
          </div>

          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center">
            <YoutubeLogo className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-youtube"/>
            <p className="h-auto w-0 group-hover:w-16 bl transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Youtube</p>
          </div>

          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center">
            <SteamLogo   className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-steam dark:text-white"/>
            <p className="h-auto w-0 group-hover:w-12 transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Steam</p>
          </div>
        </div>
        <h1 className="text-center text-xl sd:text-4xl font-sans font-bold md:mx-0 mx-auto dark:text-white">stuff</h1>
      </div>
    </footer>
  )
}

export default Footer;
