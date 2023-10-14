import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { postGuestData } from "../api/postData";

const GuestPage = () => {
  const [details, setDetails] = useState({ details: "" });
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    const { status } = await postGuestData(details);

    if (status === true) {
      toast.success("POSTED SUCCESSFULLY !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("AN ERROR OCCURRED WHILE POSTING", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setDetails({ details: "" });
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    !jwtToken && navigate("/login-guest");
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-80">
        <div className="bg-white p-4 w-96 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Enter Details</h2>
          <input
            type="text"
            className="w-full p-2 border rounded-md border-gray-300"
            placeholder="Details"
            required
            onChange={(e) =>
              setDetails({ ...details, details: e.target.value })
            }
            value={details.details}
          />
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200"
              onClick={() => setDetails({ details: "" })}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default GuestPage;
