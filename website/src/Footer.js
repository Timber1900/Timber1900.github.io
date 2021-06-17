import {DiscordLogo, GithubLogo, TwitchLogo, YoutubeLogo, SteamLogo} from "./svgs"

const Footer = () => {
  return(
    <footer className="bg-white dark:bg-gray-800 w-full flex justify-center custombp:sticky custombp:bottom-0">
      <div className="relative flex h-20 justify-center place-items-center sd:flex-row flex-col border-t border-gray-200 dark:border-gray-700 w-full-minus-padding my-2 max-w-full-minus-padding">
        <div className="md:absolute md:right-0 flex justify-center place-items-center">
          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center hover:opacity-100 opacity-60 transition-opacity" onClick={() => {window.open("https://discord.com/users/263073389432930314")}}>
            <DiscordLogo className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-discord dark:text-white"/>
            <p className="h-auto w-0 group-hover:w-14 transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Discord</p>
          </div>

          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center hover:opacity-100 opacity-60 transition-opacity" onClick={() => {window.open("https://github.com/timber1900")}}>
            <GithubLogo  className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-github dark:text-white"/>
            <p className="h-auto w-0 group-hover:w-14 transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Github</p>
          </div>

          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center hover:opacity-100 opacity-60 transition-opacity" onClick={() => {window.open("https://www.twitch.tv/timber1900")}}>
            <TwitchLogo  className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-twitch"/>
            <p className="h-auto w-0 group-hover:w-14 transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Twitch</p>
          </div>

          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center hover:opacity-100 opacity-60 transition-opacity" onClick={() => {window.open("https://www.youtube.com/channel/UC8QDXDI7nTM3T-qEDAn37OA")}}>
            <YoutubeLogo className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-youtube"/>
            <p className="h-auto w-0 group-hover:w-16 bl transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Youtube</p>
          </div>

          <div className="flex flex-row group px-1 sd:px-2 w-auto h-auto place-items-center hover:opacity-100 opacity-60 transition-opacity" onClick={() => {window.open("https://steamcommunity.com/id/timber1900/")}}>
            <SteamLogo   className="px-2 sd:w-12 sd:h-12 w-10 h-10 fill-current text-steam dark:text-white"/>
            <p className="h-auto w-0 group-hover:w-12 transition-all text-black dark:text-white font-sans font-bold text-base overflow-hidden ">Steam</p>
          </div>
        </div>
        <a className="text-center text-xl sd:text-4xl font-sans font-bold md:mx-0 mx-auto dark:text-white" href="mailto:hugo@hteixeira.me">Contact me!</a>
      </div>
    </footer>
  )
}

export default Footer;
