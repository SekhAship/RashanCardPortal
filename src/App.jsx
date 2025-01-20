import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/home";
import NoPage from "./pages/noPage/noPage";
import HomePageProductCard from "./components/homePageProductCard/homePageProducgtCard";
import Login from "./pages/registration/login";
import Signup from "./pages/registration/signup";
import UserDashboard from "./pages/user/userDashboard";
import AdminDashboard from "./pages/admin/admindashboard";
import MyState from "./context/myState";
import { ProtectedRouteForAdmin } from "./protectedRoute/protectedRouteForAdmin";
import { ProtectedRouteForUser } from "./protectedRoute/protectedRouteForUser";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/scrollTop/scrollTop";
import UpdateUserPage from "./pages/admin/updateUserPage";




const App = () => {
  return (
    <div>
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
              <Route path="/adminhomepage" element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin> } />
              <Route path="/updateUser/:id" element={
              <ProtectedRouteForAdmin>
                <UpdateUserPage />
              </ProtectedRouteForAdmin> } />
              
              <Route path="/userdashboard" element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
              } />

          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </div>
  );
}

export default App;