import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import ExamplePage from 'pages/Example';
import CheckoutPage from 'pages/CheckoutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/example" component={ExamplePage} />
      </Router>
    </div>
  );
}

export default App;
