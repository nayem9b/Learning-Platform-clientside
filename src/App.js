import "./App.css";
import Login from "./Components/Login/Login";
import Navbar, { Nav } from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Register></Register>
      <Login></Login>
    </div>
  );
}

export default App;
