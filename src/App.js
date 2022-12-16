import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";

import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"


function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    { 
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
      
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  
  ]);

  return (
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
