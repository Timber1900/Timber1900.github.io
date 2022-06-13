import { useEffect, useState } from "react";
import Link from 'next/link';
import NightModeSelector from './NightModeSelector';
import { useRouter } from 'next/router';


const selectDarkMode = () => {
  if(process.browser) {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
      return 'dark';
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      return 'light';
    }
  }
}

const changeDarkMode = () => {
  if(process.browser) {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
      return 'light';
    } else {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark');
      return 'dark';
    }
  }
}

const Header = () => {
  const [dark, setDark] = useState(selectDarkMode());
  const { pathname, basePath } = useRouter();

  return(
    <header className="z-10 flex justify-center w-full font-rubik">
      <div className="relative flex flex-row h-20 my-2 items-center justify-end w-full-minus-padding-small sm:w-full-minus-padding">
        <p className='mr-auto ml-12 text-3xl font-semibold dark:text-indigo-600 text-blue-600'>{pathname == `${basePath}/` ? "Home" : "WebDL"}</p>
        <ul className='flex flex-row items-center justify-center gap-4 mx-20 text-lg'>
          <li>
            <Link href="/" as={process.env.BACKEND_URL + '/'}>
                <a href='' className={`${pathname == process.env.BACKEND_URL + "/" ? "dark:text-gray-500 hover:dark:text-gray-500 text-gray-500 hover:text-gray-500" : "dark:text-[#dbdbdb] hover:dark:text-[#dbdbdb] text-black hover:text-black"} transition-colors duration-500 font-normal`}>Home</a>
              </Link>
          </li>
          <li>
            <Link href="/webdl" as={process.env.BACKEND_URL + '/webdl'}>
              <a href='' className={`${pathname == process.env.BACKEND_URL + "/webdl" ? "dark:text-gray-500 hover:dark:text-gray-500 text-gray-500 hover:text-gray-500" : "dark:text-[#dbdbdb] hover:dark:text-[#dbdbdb] text-black hover:text-black"} transition-colors duration-500 font-normal`}>WebDL</a>
            </Link>
          </li>
        </ul>
        <NightModeSelector onClick={() => {setDark(changeDarkMode())}} text={dark}/>
      </div>
    </header>
  )
}

export default Header;
