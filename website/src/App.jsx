import Narvbar from "./Narvbar";
import Home from './Home'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Create from "./Create";


const App = () => {

  return (
    <Router>
      <div className="App">
        <Narvbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
