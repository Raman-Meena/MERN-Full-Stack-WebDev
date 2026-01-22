import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user } = useAuth();
  return (
    <>
      <div className=" flex gap-10">
        <div>
          <span>
            Name: <span>{user.fullName}</span>
          </span>
        </div>
        <div>
          <span>
            Mobile: <span>{user.mobileNumber}</span>
          </span>
        </div>
        <div>
          <span>
            Email: <span>{user.email}</span>
          </span>
        </div>
        <button
          className="border rounded px-5 py-2 bg-amber-500 cursor-pointer hover:bg-amber-600"
          onClick={() => setIsEditProfileModalOpen(true)}
        >
          Edit Profile
        </button>
      </div>
      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
