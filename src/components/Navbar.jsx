import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = Cookies.get("jwtToken");
    const role = jwt_decode(token).roles;
    if (role === "ROLE_ADMIN") {
      navigate("/login-admin");
    } else if (role === "ROLE_USER") navigate("/login-guest");

    Cookies.remove("jwtToken");
  };
  return (
    <div className="bg-blue-500 p-3">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-white">GuestBook</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-orange-400 text-white hover:bg-orange-700 transition duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  </div>
  
  );
};

export default Navbar;
