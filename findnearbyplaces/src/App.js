import "./App.css";
import Login from "./components/login";
import Places from "./components/places";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="place/:PLACE" component={Places}/>
        <Route exact path="/home" element={<h1>Home Page</h1>}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;