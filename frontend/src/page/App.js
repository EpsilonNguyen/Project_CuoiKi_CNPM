import Login from "./Auth/Login";
import HomePage from "./Admin/HomePage";
import { ToastContainer } from "react-toastify";
import AlertPage from "./Admin/AlertPage";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/add-alert">
            <AlertPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
