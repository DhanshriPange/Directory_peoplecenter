
import React from "react";
import DemoTable2 from './Components/DemoTable2'; import Directory from "./Components/Directory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Header } from "antd/lib/layout/layout";






function App() {
  // function Emppage=()=>{
  //   return
  // }
  return (
<div>
    <Router>
      <Switch>


        {/* <Directory /> */}

        {/* <Link to="/demotable2">Emp_data</Link> */}
      <Route exact path="/" component={Directory} />
        <Route exact path="/demotable2" component={DemoTable2}/>





      </Switch>

    </Router>
</div>

  );
}
export default App;

