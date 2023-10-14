import { editGuestData } from "../api/editData";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getGuestData } from "../api/getGuestData";

const EditPopup = ({ closePopup, rowId, setUserData }) => {
  const [details, setDetails] = useState({ details: "" });

  const getUserData = async () => {
    const { data } = await getGuestData();
    setUserData(data);
  };

  const handleSave = async () => {
    const { status } = await editGuestData(rowId, details);
    if (status === true) {
      toast.success("EDITED SUCCESSFULLY !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("AN ERROR OCCURRED WHILE EDITING", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    getUserData();
    closePopup(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white p-4 w-96 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Popup Title</h2>
        <input
          type="text"
          className="w-full p-2 border rounded-md border-gray-300"
          placeholder="Details"
          required
          onChange={(e) => setDetails({ ...details, details: e.target.value })}
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
            onClick={() => closePopup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
