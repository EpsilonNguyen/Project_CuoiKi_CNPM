import Login from "./Auth/Login";
import HomePage from "./Admin/HomePage";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
