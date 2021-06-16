import {DiscordLogo, GithubLogo, TwitchLogo, YoutubeLogo, SteamLogo} from "./svgs"

const Footer = () => {
  return(
    <footer className="bg-white dark:bg-gray-800 w-full flex justify-center sticky bottom-0">
      <div className="relative flex h-20 justify-center place-items-center flex-row border-t border-gray-200 dark:border-gray-700 w-full-minus-padding my-2">
        <h1 className="text-center text-4xl font-sans font-bold md:mx-0 mx-auto dark:text-white">stuff</h1>
        <div className="md:absolute md:right-0 flex justify-center place-items-center">
          <div className="flex flex-row group px-2 w-auto h-auto place-items-center">
            <DiscordLogo className="px-2 w-12 h-12 fill-current text-discord dark:text-white"/>
            <p className="w-auto h-auto hidden invisible group-hover:visible group-hover:block text-black dark:text-white font-sans font-bold text-base">Discord</p>
          </div>

          <div className="flex flex-row group px-2 w-auto h-auto place-items-center">
            <GithubLogo  className="px-2 w-12 h-12 fill-current text-github dark:text-white"/>
            <p className="w-auto h-auto hidden invisible group-hover:visible group-hover:block text-black dark:text-white font-sans font-bold text-base">Github</p>
          </div>

          <div className="flex flex-row group px-2 w-auto h-auto place-items-center">
            <TwitchLogo  className="px-2 w-12 h-12 fill-current text-twitch"/>
            <p className="w-auto h-auto hidden invisible group-hover:visible group-hover:block text-black dark:text-white font-sans font-bold text-base">Twitch</p>
          </div>

          <div className="flex flex-row group px-2 w-auto h-auto place-items-center">
            <YoutubeLogo className="px-2 w-12 h-12 fill-current text-youtube"/>
            <p className="w-auto h-auto hidden invisible group-hover:visible group-hover:block text-black dark:text-white font-sans font-bold text-base">Youtube</p>
          </div>

          <div className="flex flex-row group px-2 w-auto h-auto place-items-center">
            <SteamLogo   className="px-2 w-12 h-12 fill-current text-steam dark:text-white"/>
            <p className="w-auto h-auto hidden invisible group-hover:visible group-hover:block text-black dark:text-white font-sans font-bold text-base">Steam</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
