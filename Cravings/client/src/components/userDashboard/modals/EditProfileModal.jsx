import React, { useState } from "react";
import { useAuth } from "../../../context/authContext";
import api from "../../../config/Api";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    mobileNumber: user.mobileNumber,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  try {
    const res = api.put("/user/update", formData);
    setUser(res.data.data);
    setIsLogin(true);
    //sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
  } catch (error) {
    console.log(error);
  } finally {
    onClose();
  }
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div className="bg-white w-500px rounded shadow-lg">
          {/* Header */}
          <div className="flex justify-between px-5 py-3 border-b items-center">
            <h2 className="text-lg font-semibold">Edit Profile</h2>
            <button
              onClick={onClose}
              className="text-red-600 hover:text-red-800 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.fullName}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobileNumber}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email (Not Editable) */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
