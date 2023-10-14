import { useState } from "react";
import { registerGuest } from "../api/guest/registerGuest";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const GuestSignUp = () => {
  const [guestData, setGuestData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status } = await registerGuest(guestData);
    if (status === true) {
      toast.success("SIGNED UP SUCCESSFULLY !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("AN ERROR OCCURRED WHILE SIGNING UP", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    navigate("/login-guest");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-100">
      <section className="flex justify-center items-center">
        <form className="bg-blue-300 p-6 rounded-lg space-y-4 w-96">
          <div className="mb-4">
            <h3 className="text-center mb-10 text-md font-bold mb-8 text-blue-700">
              Guest SignUp Page
            </h3>
            <label className="block text-blue-900 font-bold">Name</label>
            <input
              type="text"
              required
              className="w-full p-2 rounded-md border border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
              onChange={(e) => {
                setGuestData({ ...guestData, name: e.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-900 font-bold">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 rounded-md border border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
              onChange={(e) => {
                setGuestData({ ...guestData, email: e.target.value });
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
                setGuestData({ ...guestData, password: e.target.value });
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
      <ToastContainer/>
    </div>
  );
};

export default GuestSignUp;
