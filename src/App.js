import React from "react";
import Header from "./componeents/Header";
import Home from "./pages/Home";
import Scholorships from "./pages/Scholorship";
import About from "./pages/About";
import Footer from "./componeents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/scholorship" component={Scholorships} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
