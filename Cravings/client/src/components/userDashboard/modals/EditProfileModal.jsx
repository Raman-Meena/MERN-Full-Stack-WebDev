import React from "react";

const EditProfileModal = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto border rounded">
          <div>EditProfileModal</div>
          <button onClick={() => onClose()}>X</button>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          ducimus ad eveniet alias fugiat reprehenderit, quis eos est eius! Ea
          est alias itaque labore ex tempore repellendus ullam dolore quo!
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
