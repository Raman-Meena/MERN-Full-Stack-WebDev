import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import { FiEdit, FiCamera } from "react-icons/fi";
import api from "../../config/Api";
import toast from "react-hot-toast";

const UserProfile = () => {
  const { user, setUser } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [preview, setPreview] = useState("");

  const fileInputRef = useRef(null);

  const firstLetter = user?.fullName?.charAt(0)?.toUpperCase() || "U";

  useEffect(() => {
    if (!preview && user?.photo?.url) {
      setPreview(user.photo.url);
    }
  }, [user, preview]);

  const changePhoto = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await api.patch("/user/changePhoto", formData);
      toast.success(res.data.message);
      setUser(res.data.user);
      setPreview(res.data.user.photo.url);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Image upload failed");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Only image files are allowed");
      return;
    }

    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);
    changePhoto(file);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
          <button
            onClick={() => setIsEditProfileModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-xl transition-all hover:scale-105 shadow"
          >
            <FiEdit />
            Edit Profile
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start border-t pt-8">
          <div className="relative">
            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover shadow-md border-4 border-amber-500"
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-amber-400 flex items-center justify-center text-white text-5xl font-bold shadow-md border-4 border-amber-500">
                {firstLetter}
              </div>
            )}

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-1 right-3 bg-gray-900 text-white p-2 rounded-full shadow-lg hover:bg-amber-500 hover:scale-110 transition-all"
            >
              <FiCamera size={15} />
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <ProfileField label="Full Name" value={user?.fullName} />
            <ProfileField label="Email" value={user?.email} />
            <ProfileField label="Phone Number" value={user?.mobileNumber} />
          </div>
        </div>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

const ProfileField = ({ label, value }) => {
  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-xl">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
        {label}
      </label>
      <span className="text-lg font-medium text-gray-800 break-all">
        {value || "—"}
      </span>
    </div>
  );
};

export default UserProfile;
