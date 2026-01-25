import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import { FiEdit } from "react-icons/fi";

const UserProfile = () => {
  const { user } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const firstLetter = user?.fullName?.charAt(0)?.toUpperCase() || "U";
  const hasProfileImage = Boolean(user?.profileImage);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
        {/* Header */}
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

        {/* Profile Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start border-t pt-8">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            {hasProfileImage ? (
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover shadow-md border-4 border-amber-500"
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-amber-400 flex items-center justify-center text-white text-5xl font-bold shadow-md border-4 border-amber-500">
                {firstLetter}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <ProfileField label="Full Name" value={user?.fullName} />
            <ProfileField label="Email" value={user?.email} />
            <ProfileField label="Phone Number" value={user?.mobileNumber} />
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
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
