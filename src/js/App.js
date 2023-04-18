import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Landing from "./pages/Landing";
import ShowPage from "./pages/ShowPage";
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
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/show" component={ShowPage} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
