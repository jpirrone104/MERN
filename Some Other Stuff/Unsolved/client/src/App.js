import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Nav />
      <switch>
        <Router>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/: id" component={Detail} />
        </Router>
      </switch>
      <Books />
    </div>
  );
}

export default App;
