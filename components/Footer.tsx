import {DiscordLogo, GithubLogo, TwitchLogo, YoutubeLogo, SteamLogo, LinkdinLogo} from "./svgs"

const Footer = () => {
  return(
    <footer className="z-10 flex justify-center w-full">
      <div className="relative flex flex-col justify-center place-items-center sm:w-full-minus-padding sm:max-w-full-minus-padding w-full-minus-padding-small max-w-full-minus-padding-small">
        <div className="flex justify-center gap-2 md:absolute md:right-0 place-items-center">
          <button aria-label="Linkdin" className="hover:opacity-100 opacity-60 h-10 hover:after:content-[attr(aria-label)]  text-black dark:text-white transition-opacity after:text-center flex flex-row gap-2 justify-center items-center w-auto after:w-0 hover:after:w-16 after:transition-all after:overflow-hidden after:font-bold" onClick={() => {window.open("https://www.linkedin.com/in/hugo-teixeira-54801b228/")}}>
            <LinkdinLogo className="h-10 py-2 fill-current text-[#0a66c2]"/>
          </button>

          <button aria-label="Discord" className="hover:opacity-100 opacity-60 h-10 hover:after:content-[attr(aria-label)]  text-black dark:text-white transition-opacity after:text-center flex flex-row gap-2 justify-center items-center w-auto after:w-0 hover:after:w-16 after:transition-all after:overflow-hidden after:font-bold" onClick={() => {window.open("discord:///users/263073389432930314")}}>
            <DiscordLogo className="h-10 py-2 fill-current text-discord dark:text-white"/>
          </button>

          <button aria-label="Github" className="hover:opacity-100 opacity-60 h-10 hover:after:content-[attr(aria-label)]  text-black dark:text-white transition-opacity after:text-center flex flex-row gap-2 justify-center items-center w-auto after:w-0 hover:after:w-14 after:transition-all after:overflow-hidden after:font-bold" onClick={() => {window.open("https://github.com/timber1900")}}>
            <GithubLogo  className="h-10 py-2 fill-current text-discord dark:text-white"/>
          </button>

          <button aria-label="Twitch" className="hover:opacity-100 opacity-60 h-10 hover:after:content-[attr(aria-label)]  text-black dark:text-white transition-opacity after:text-center flex flex-row gap-2 justify-center items-center w-auto after:w-0 hover:after:w-14 after:transition-all after:overflow-hidden after:font-bold" onClick={() => {window.open("https://www.twitch.tv/timber1900")}}>
            <TwitchLogo  className="h-10 py-2 fill-current text-twitch"/>
          </button>

          <button aria-label="Youtube" className="hover:opacity-100 opacity-60 h-10 hover:after:content-[attr(aria-label)]  text-black dark:text-white transition-opacity after:text-center flex flex-row gap-2 justify-center items-center w-auto after:w-0 hover:after:w-[4.5rem] after:transition-all after:overflow-hidden after:font-bold" onClick={() => {window.open("https://www.youtube.com/channel/UC8QDXDI7nTM3T-qEDAn37OA")}}>
            <YoutubeLogo className="h-10 py-2 fill-current text-youtube"/>
          </button>

          <button aria-label="Steam" className="hover:opacity-100 opacity-60 h-10 hover:after:content-[attr(aria-label)]  text-black dark:text-white transition-opacity after:text-center flex flex-row gap-2 justify-center items-center w-auto after:w-0 hover:after:w-14 after:transition-all after:overflow-hidden after:font-bold" onClick={() => {window.open("https://steamcommunity.com/id/timber1900/")}}>
            <SteamLogo className="h-10 py-2 fill-current text-steam dark:text-white"/>
          </button>
        </div>
        <a className="mx-auto font-rubik text-xl font-bold text-center md:mx-0 dark:text-white" href="mailto:hugo@hteixeira.me">Contact me!</a>
      </div>
    </footer>
  )
}

export default Footer;
