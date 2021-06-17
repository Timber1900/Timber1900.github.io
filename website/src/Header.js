import { selectDarkMode ,changeDarkMode } from "./darkMode";
import { Switch } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(selectDarkMode());


  return(
    <header className="bg-white dark:bg-gray-800 w-full flex justify-center sticky top-0">
      <div className="flex h-20 place-items-center my-2 border-b border-gray-200 dark:border-gray-700 w-full-minus-padding relative">
        <h1 className="text-center text-xl sm:text-4xl font-sans font-bold mx-auto text-black dark:text-white">Timber's Github Projects</h1>
        <label htmlFor='switch'>
          <Switch color="primary" id="switch" checked={dark === "dark"} onChange={() => {setDark(changeDarkMode())}}/>
          <NightsStayIcon className="text-black dark:text-white fill-current"/>
        </label>
      </div>
    </header>
  )
}

export default Header;
