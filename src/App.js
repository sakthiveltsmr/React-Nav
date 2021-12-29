import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./component/Home";
import Nav from "./component/Nav";
import About from "./component/About";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
