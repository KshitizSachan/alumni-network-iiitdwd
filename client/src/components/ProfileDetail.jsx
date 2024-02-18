import React from "react";

const ProfileDetail = ({ type, detail }) => {
  return (
    <div className="flex justify-between bg-white border border-[#8a8a8a] rounded-xl px-3 py-2 w-80 font-poppins gap-4">
      <div className="flex flex-col">
        <p className="text-xs 2xl:text-sm text-black/50">{type}</p>
        <p className="text-sm 2xl:text-base">{detail}</p>
      </div>
      <img src="/copy-icon.svg" alt="copy-icon" />
    </div>
  );
};

export default ProfileDetail;
