import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";
import { FiX, FiUser, FiMail, FiPhone } from "react-icons/fi";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser, setIsLogin } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.put("/user/update", formData);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 transition text-xl"
          >
            <FiX />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Full Name */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Full Name
            </label>
            <div className="relative mt-1">
              <FiUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email (Read Only) */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Email Address
            </label>
            <div className="relative mt-1">
              <FiMail className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full pl-10 pr-4 py-2.5 border rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Mobile Number
            </label>
            <div className="relative mt-1">
              <FiPhone className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                value={formData.mobileNumber}
                onChange={(e) =>
                  setFormData({ ...formData, mobileNumber: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Enter mobile number"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold transition shadow"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
