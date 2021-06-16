import { changeDarkMode } from "./darkMode";

const Header = () => {
  return(
    <header className="bg-white dark:bg-gray-800 w-full flex justify-center sticky top-0">
      <div className="flex h-20 place-items-center my-2 border-b border-gray-200 dark:border-gray-700 w-full-minus-padding relative">
        <h1 className="text-center text-xl sm:text-4xl font-sans font-bold mx-auto text-black dark:text-white">Timber's Github Projects</h1>
        <button className="md:flex-end md:absolute md:right-0 relative right-auto bg-blue-400 dark:bg-blue-800 px-2 py-1 rounded-xl hover:bg-blue-500 transition-colors ease-in-out duration-200 focus:outline-none active:bg-indigo-600" onClick={changeDarkMode}>Dark mode</button>
      </div>
    </header>
  )
}

export default Header;
