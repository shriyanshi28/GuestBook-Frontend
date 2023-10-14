import { useState } from "react";
import { loginAdmin } from "../api/admin/loginAdmin";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AdminLogIn = () => {
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginAdmin(adminData);
    Cookies.set("jwtToken", result.data, { expires: 7 });
    result.data && navigate("/admin");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-blue-100">
      <section className="flex justify-center items-center">
        <form className="bg-blue-300 p-6 rounded-lg space-y-4 w-80">
          <div className="mb-4">
            <h3 className="text-center mb-10 text-md font-bold mb-8 text-blue-700">
              Admin Login Page
            </h3>
            <label className="block text-blue-900 font-bold">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 rounded-md border border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
              onChange={(e) => {
                setAdminData({ ...adminData, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-900 font-bold">Password</label>
            <input
              type="password"
              required
              className="w-full p-2 rounded-md border border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
              onChange={(e) => {
                setAdminData({ ...adminData, password: e.target.value });
              }}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="w-full bg-blue-300 text-blue-700 py-2 rounded-md hover:bg-blue-400 focus:outline-none"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go back to home page
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminLogIn;
