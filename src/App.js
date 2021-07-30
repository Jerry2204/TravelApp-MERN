import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import ExamplePage from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/" component={LandingPage}></Route> */}
        <Route path="/example" component={ExamplePage}></Route>
      </Router>
    </div>
  );
}

export default App;
