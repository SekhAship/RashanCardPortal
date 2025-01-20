import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('users'))
  // console.log(user)
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('users');
    navigate('/login');
  }
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={'/'}>Home</Link>
      </li>

      {/* Admin */}
      {user?.role === "admin" && <li>
        <Link to={'/adminhomepage'}>Admin</Link>
      </li>}
      {/* sign up */}
      <li>
        <Link to={'/signup'}>Signup</Link>
      </li>
      {/* login */}
      {!user ? <li>
        <Link to={'/login'}>Login</Link>
      </li> : ""}

      {user?.role === "user" && <li>
        <Link to={'/user-dashboard'}>{user.name}</Link>
      </li>}
      {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}




    </ul>
  )
  return (
    <nav className="bg-blue-gray-800 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={'/'}>
            <h2 className=" font-bold text-white text-2xl text-center">E-Bharat</h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">
          {navList}
        </div>


      </div>
    </nav>
  );
}
export default Navbar;