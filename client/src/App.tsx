import React from 'react';
// import 'bootstrap/dist/css/boostrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';

import HomePage from "./components/homepage.component";
import JoinButton from "./components/joinbutton.component";
import JoinInfo from "./components/joinpartyinfo.component";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        {/* <Navbar /> */}
        <br />
        <Route path="/" component={HomePage} />
        <br />
        <Route path="/" component={JoinButton} />
        <br />
        <Route path="/" component={JoinInfo} />
      </div>
    </Router>
  );
}

export default App;
