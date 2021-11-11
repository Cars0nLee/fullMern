import './App.css';
import Main from "./Views/Main"
import Edit from "./Components/edit"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route exact path="/edit/:_id" component={Edit} />
        </div>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
