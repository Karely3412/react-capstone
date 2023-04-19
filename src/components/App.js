import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.scss";
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
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/showroom" component={ShowRoom} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
