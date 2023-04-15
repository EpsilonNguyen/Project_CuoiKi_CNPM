import Login from './containers/Auth/Login';
import HomePage from './containers/Home/HomePage';
import CameraManager from './containers/CameraManager/CameraManager';
import Alert from './containers/Alert/Alert';
import Area from './containers/Area/Area';
import Statistic from './containers/Statistic/Statistic';
import Contact from './containers/Contact/Contact';
import Setting from './containers/Setting/Setting';
import Register from './containers/Register/Register';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path="/" exact>
            <div className="pt-5" style={{ "background-color": "black", "height": "100vh" }}>
              <Login />
            </div>
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/camera-manager">
            <CameraManager />
          </Route>
          <Route path="/alert">
            <Alert />
          </Route>
          <Route path="/area">
            <Area />
          </Route>
          <Route path="/statistic">
            <Statistic />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
