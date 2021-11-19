
import React, {lazy } from "react";
 import DemoTable2 from './Components/DemoTable2';
 import { Routes  } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
const Directory = lazy(() => import("./Components/Directory"));


function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Routes>
       
        <Route exact path="/" component={Directory} />
            <Route path="/demoTable2" component={DemoTable2} />
            <Route path='/directory' element={<DemoTable2/>} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;

