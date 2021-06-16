import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect } from "react";
import { selectDarkMode } from "./darkMode";
function App() {
  useEffect(() => {
    selectDarkMode();
  })

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen grid gap-0 grid-rows-pancake">
      <Header/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
