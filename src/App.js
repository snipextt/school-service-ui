import React, { useEffect } from "react";
import { Example } from "./componeents/Header";
import "./Static/custom.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./componeents/Footer";
import Logo from "./componeents/Logo";
import Blog from "./pages/Blog";
import WildCardRedirect from "./WildCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById("root").scrollIntoView();
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="">
      <Router>
        <Example />
        <ScrollToTop />
        <Logo />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/*" component={WildCardRedirect} />
          </Switch>
        </AnimatePresence>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
