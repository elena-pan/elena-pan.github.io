import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Landing from "./components/Landing";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
