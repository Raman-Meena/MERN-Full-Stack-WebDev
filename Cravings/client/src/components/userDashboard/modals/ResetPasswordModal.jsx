import React from "react";
import { useState } from "react";
import api from "../../../config/Api";
import toast from "react-hot-toast";

const ResetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    cfNewPassword: "",
  });
  const [errors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.patch("/user/resetPassword", formData);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
        {/* Modal */}
        <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-800">
              Reset Password
            </h2>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-red-100 text-gray-500 hover:text-red-600 transition"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Old Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Old Password *
              </label>
              <input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleInputChange}
                placeholder="Enter your old password"
                className={`w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                  errors.oldPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.oldPassword && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.oldPassword}
                </p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password *
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="Create a new password"
                className={`w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                  errors.newPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.newPassword && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password *
              </label>
              <input
                type="password"
                name="cfNewPassword"
                value={formData.cfNewPassword}
                onChange={handleInputChange}
                placeholder="Re-enter new password"
                className={`w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                  errors.cfNewPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.cfNewPassword && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.cfNewPassword}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordModal;
