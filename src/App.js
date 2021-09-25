import "./App.css";
import TodoList from "./Pages/TodoList";
import DemoUseSpring from "./Pages/DemoUseSpring/DemoUseSpring";
import Demo2UseSpring from "./Pages/DemoUseSpring/Demo2UseSpring";
import Demo3UseSpring from "./Pages/DemoUseSpring/Demo3UseSpring";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DemoUseTrail from "./Pages/DemoUseTrail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/spring" component={DemoUseSpring} />
        <Route exact path="/spring2" component={Demo2UseSpring} />
        <Route exact path="/spring3" component={Demo3UseSpring} />
        <Route exact path="/trail" component={DemoUseTrail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
