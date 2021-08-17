import {DiscordLogo, GithubLogo, TwitchLogo, YoutubeLogo, SteamLogo} from "./svgs"

const Footer = () => {
  return(
    <footer className="z-10 flex justify-center w-full bg-white dark:bg-gray-800 custombp:sticky custombp:bottom-0">
      <div className="relative flex flex-col justify-center h-20 my-2 border-t border-gray-200 place-items-center dark:border-gray-700 sm:w-full-minus-padding sm:max-w-full-minus-padding w-full-minus-padding-small max-w-full-minus-padding-small">
        <div className="flex justify-center md:absolute md:right-0 place-items-center">
          <div className="flex flex-row w-auto h-auto px-1 transition-opacity group place-items-center hover:opacity-100 opacity-60" onClick={() => {window.open("discord:///users/263073389432930314")}}>
            <DiscordLogo className="w-10 h-10 px-2 fill-current text-discord dark:text-white"/>
            <p className="w-0 h-auto overflow-hidden font-sans text-base font-bold text-black transition-all group-hover:w-14 dark:text-white ">Discord</p>
          </div>

          <div className="flex flex-row w-auto h-auto px-1 transition-opacity group place-items-center hover:opacity-100 opacity-60" onClick={() => {window.open("https://github.com/timber1900")}}>
            <GithubLogo  className="w-10 h-10 px-2 fill-current text-github dark:text-white"/>
            <p className="w-0 h-auto overflow-hidden font-sans text-base font-bold text-black transition-all group-hover:w-14 dark:text-white ">Github</p>
          </div>

          <div className="flex flex-row w-auto h-auto px-1 transition-opacity group place-items-center hover:opacity-100 opacity-60" onClick={() => {window.open("https://www.twitch.tv/timber1900")}}>
            <TwitchLogo  className="w-10 h-10 px-2 fill-current text-twitch"/>
            <p className="w-0 h-auto overflow-hidden font-sans text-base font-bold text-black transition-all group-hover:w-14 dark:text-white ">Twitch</p>
          </div>

          <div className="flex flex-row w-auto h-auto px-1 transition-opacity group place-items-center hover:opacity-100 opacity-60" onClick={() => {window.open("https://www.youtube.com/channel/UC8QDXDI7nTM3T-qEDAn37OA")}}>
            <YoutubeLogo className="w-10 h-10 px-2 fill-current text-youtube"/>
            <p className="w-0 h-auto overflow-hidden font-sans text-base font-bold text-black transition-all group-hover:w-16 bl dark:text-white ">Youtube</p>
          </div>

          <div className="flex flex-row w-auto h-auto px-1 transition-opacity group place-items-center hover:opacity-100 opacity-60" onClick={() => {window.open("https://steamcommunity.com/id/timber1900/")}}>
            <SteamLogo   className="w-10 h-10 px-2 fill-current text-steam dark:text-white"/>
            <p className="w-0 h-auto overflow-hidden font-sans text-base font-bold text-black transition-all group-hover:w-12 dark:text-white ">Steam</p>
          </div>
        </div>
        <a className="mx-auto font-sans text-xl font-bold text-center md:mx-0 dark:text-white" href="mailto:hugo@hteixeira.me">Contact me!</a>
      </div>
    </footer>
  )
}

export default Footer;
