import React from "react";
import Header from "./componeents/Header";
import Home from "./pages/Home";
import Footer from "./componeents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
