import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

//Import Pages
import Todos from "./Pages/Todo";
import MapJson from "./Pages/mapJson";
import Incre from "./Pages/Increment";
import CssBs from "./Pages/CssBs";
import Home from "./Pages/Home";
import Guest from "./Pages/Guest";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={{ display: "flex", flexDirection: "row" }}>
            <li style={{ marginRight: 50 }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: 50 }}>
              <Link to="/Todo">Todo</Link>
            </li>
            <li style={{ marginRight: 50 }}>
              <Link to="/Increment">Incrment</Link>
            </li>
            <li style={{ marginRight: 50 }}>
              <Link to="/Cssbs">Css Bootstrap</Link>
            </li>
            <li style={{ marginRight: 50 }}>
              <Link to="/Mapjson">Map JSON</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <PrivateRoute path="/Todo">
            <Todos />
          </PrivateRoute>
          <PrivateRoute path="/Increment">
            <Incre />
          </PrivateRoute>

          <PrivateRoute path="/Cssbs">
            <CssBs />
          </PrivateRoute>

          <PrivateRoute path="/Mapjson" component={MapJson} />
          <PrivateRoute path="/Guest" component={Guest} />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticate: true,
  Authenticated(cb) {
    fakeAuth.isAuthenticate = true;
    setTimeout(cb, 50); //fake Async
  },
  signOut(cb) {
    fakeAuth.isAuthenticate = false;
    setTimeout(cb, 50);
  },
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticate ? (
          children
        ) : (
          <Redirect to={{ pathname: "/Login", state: { from: location } }} />
        )
      }
    />
  );
}

export default App;
