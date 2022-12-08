import React, {Component} from "react";
import Home from "./components/pages/Home";
import Metrics from "./components/pages/Metrics";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/layout/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id='home'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/metrics" element={<Metrics/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;