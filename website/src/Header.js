import { changeDarkMode, selectDarkMode } from "./darkMode";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(selectDarkMode());

  return(
    <header className="z-10 flex justify-center w-full bg-white dark:bg-gray-800 custombp:sticky custombp:top-0">
      <div className="relative flex h-20 my-2 border-b border-gray-200 place-items-center dark:border-gray-700 w-full-minus-padding-small sm:w-full-minus-padding">
        <h1 className="mx-auto font-sans text-xl font-bold text-center text-black sm:text-4xl dark:text-white"><Link to="/">Hugo's Github Projects</Link></h1>
        <button aria-label={`Change to ${dark === 'dark' ? 'light' : 'dark'} mode`} onClick={() => {setDark(changeDarkMode())}} className="w-auto h-auto p-2 transition-colors duration-300 origin-center bg-transparent rounded-full hover:bg-gray-500/25 focus:bg-gray-500/25 active:bg-gray-500/40 relative before:content-[attr(aria-label)] dark:before:content-[attr(aria-label)] before:top-[120%] before:inset-x-0 before:ml-auto before:absolute before:w-max before:bg-gray-200 dark:before:bg-gray-700 before:px-2 before:py-1 before:rounded-md before:text-black dark:before:text-white before:opacity-0 before:scale-0 hover:before:content-[attr(aria-label)] before:origin-top-right hover:before:opacity-100 hover:before:scale-100 before:transform before:transition-all after:border-t-4 after:border-r-4 after:border-gray-200 dark:after:border-gray-700 after:absolute after:rotate-45 after:top-[120%] after:inset-x-0 after:mx-auto after:h-0 after:w-0 after:opacity-0 after:scale-0 hover:after:opacity-100 hover:after:scale-100 after:transform after:transition-all after:origin-top-right before:shadow-md after:shadow-md focus:outline-none">
          <svg className="w-8 h-8 text-black fill-current dark:text-white" version="1.1" viewBox="0 0 400.88 400.88">
            <path
              className="transition-transform duration-500 origin-center transform rotate-0 dark:rotate-180 ease-back"
              d="M342.17,141.73V58.71h-83.02L200.44,0l-58.71,58.71H58.71v83.02L0,200.44l58.71,58.71v83.02h83.02l58.71,58.71l58.71-58.71
            h83.02v-83.02l58.71-58.71L342.17,141.73z M200.44,313.83c-62.62,0-113.39-50.76-113.39-113.39S137.82,87.05,200.44,87.05
            s113.39,50.76,113.39,113.39S263.06,313.83,200.44,313.83z"
            />
            <circle className="transition-transform duration-500 dark:translate-x-0 -translate-x-14 ease-back" cx="200.44" cy="200.44" r="90" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header;
