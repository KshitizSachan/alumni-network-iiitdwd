import React from "react";

const ProfileDetail = ({ type, detail }) => {
  return (
    <div className="flex justify-between bg-white border border-[#8a8a8a] rounded-xl px-3 py-2 w-80 font-poppins">
      <div className="flex flex-col">
        <p className="text-sm text-black/50">{type}</p>
        <p>{detail}</p>
      </div>
      <img src="/copy-icon.svg" alt="copy-icon" />
    </div>
  );
};

export default ProfileDetail;
