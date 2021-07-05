import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect } from "react";
import { selectDarkMode } from "./darkMode";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WebDL from "./WebDL";

function App() {
  useEffect(() => {
    selectDarkMode();
  })

  return (
    <Router>
      <div className="grid min-h-screen gap-0 font-sans bg-white dark:bg-gray-800 grid-rows-pancake">
        <Header />
        <Switch>
          <Route path="/webdl">
            <WebDL />
          </Route>
          <Route path="*">
            <Content />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
