import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Counter from "./components/Counter";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/counter">
            <Counter />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
