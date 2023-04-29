import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { IconName } from "react-icons/fa";

import "./styles/app.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Landing from "./pages/Landing";
import ShowRoom from "./pages/ShowRoom";
import SideNav from "./navigation/SideNav";
import Footer from "./navigation/Footer";
// import Dropdwn from "./pages/Dropdwn";

function App() {
  return (
    <div className="App">
      <Router>
        <SideNav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/showpage" component={ShowRoom} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/dropdwn" component={Dropdwn} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
