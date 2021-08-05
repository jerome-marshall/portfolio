import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home></Home>
    </Router>
  );
}

export default App;
