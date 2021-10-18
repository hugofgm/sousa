import "./App.css";
import Home from "./components/home/home";
import UploadForm from "./components/upload/upload";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/page/navbar/navbar";
import Collections from "./components/page/content/collections/collections";
import About from "./components/page/about/about";
import Contact from "./components/page/contact/contact";
import Recent from "./components/page/content/recents/recent";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route key="1" exact path="/">
            <Home />
          </Route>
          <Route key="2" exact path="/upload">
            <UploadForm />
          </Route>
          <Route key="3" exact path="/recents">
            <Recent />
          </Route>
          <Route key="4" exact path="/collections">
            <Collections />
          </Route>
          <Route key="5" exact path="/about">
            <About />
          </Route>
          <Route key="6" exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
