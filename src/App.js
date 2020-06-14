import React from "react";
import Header from "./componeents/Header";
import "./Static/custom.css";
import Home from "./pages/Home";
import Scholorships from "./pages/Scholorship";
import About from "./pages/About";
import Footer from "./componeents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/scholorship" component={Scholorships} />
            <Route exact path="/about" component={About} />
          </Switch>
        </AnimatePresence>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
