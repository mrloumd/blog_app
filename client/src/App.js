import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/reusableComponents/Navbar";
import ViewBlog from "./components/reusableComponents/ViewBlog";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/viewBLog' element={<ViewBlog />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
