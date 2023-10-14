import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Cookies from "js-cookie";
import EditPopup from "../components/EditPopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getGuestData } from "../api/getGuestData";
import { deleteGuestData } from "../api/deleteData";

const AdminPage = () => {
  const [userData, setUserData] = useState([]);
  const [editPopup, setEditPopup] = useState(false);
  const [detailId, setDetailId] = useState();
  const navigate = useNavigate();

  const getUserData = async () => {
    const { data } = await getGuestData();
    setUserData(data);
  };

  const handleDelete = async (id) => {
    const { status } = await deleteGuestData(id);

    if (status === true) {
      toast.success("DELETED SUCCESSFULLY !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("AN ERROR OCCURRED WHILE DELETING", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    getUserData();
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    !jwtToken && navigate("/login-admin");
    getUserData();
  }, []);

  return (
    <>
      <Navbar />
      {editPopup && <EditPopup closePopup={setEditPopup} rowId={detailId} setUserData={setUserData}/>}
      <section>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.created_by}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{item.details}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                    onClick={() => {
                      setEditPopup(true);
                      setDetailId(item.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    className="text-orange-600 hover:text-orange-900 focus:outline-none focus:underline"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </section>
    </>
  );
};

export default AdminPage;
