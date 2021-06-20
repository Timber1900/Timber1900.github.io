import { selectDarkMode ,changeDarkMode } from "./darkMode";
import { Switch } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState(selectDarkMode());

  return(
    <header className="z-10 flex justify-center w-full bg-white dark:bg-gray-800 custombp:sticky custombp:top-0">
      <div className="relative flex h-20 my-2 border-b border-gray-200 place-items-center dark:border-gray-700 w-full-minus-padding-small sm:w-full-minus-padding">
        <h1 className="mx-auto font-sans text-xl font-bold text-center text-black sm:text-4xl dark:text-white"><Link to="/">Hugo's Github Projects</Link></h1>
        <label htmlFor='switch'>
          <Switch color="primary" id="switch" checked={dark === "dark"} onChange={() => {setDark(changeDarkMode())}}/>
          <NightsStayIcon className="text-black fill-current dark:text-white"/>
        </label>
      </div>
    </header>
  )
}

export default Header;
