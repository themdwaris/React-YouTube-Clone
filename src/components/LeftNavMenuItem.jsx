import React from "react";

const LeftNavMenuItem = ({ item, icon, action, className }) => {
  return (
    <div
      className={
        `flex items-center py-[15px] text-white h-10 px-3 mb-5 cursor-pointer rounded-lg hover:bg-white/[0.2] ${className}`
      }
      onClick={action}
    >
      <span className="text-4xl mr-10 font-inter">{icon}</span>
      <span className="text-[1.4rem] mr-5 font-inter">{item}</span>
    </div>
  );
};

export default LeftNavMenuItem;
