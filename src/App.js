import { RouterProvider } from "react-router-dom";
import "./App.css";
import Errorpage from "./Components/Error/Errorpage";
import Login from "./Components/Login/Login";
import Navbar, { Nav } from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import router from "./Routes/Route";
function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
