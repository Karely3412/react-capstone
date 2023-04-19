import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Landing from "./pages/Landing";
import ShowRoom from "./pages/ShowRoom";
import SideNav from "./navigation/SideNav";
import Footer from "./navigation/Footer";

function App() {
  return (
    <Router>
      <div>
        <SideNav></SideNav>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          {/* <Route exact path="/landing" component={Landing} /> */}
          <Landing></Landing>
          <Route exact path="/showroom" component={ShowRoom} />
          {/* Ask about showroom route */}
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
