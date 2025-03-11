import Narvbar from "./Narvbar";
import Home from './Home'


const App = () => {

  return (
    <div className="App">
      <Narvbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App
