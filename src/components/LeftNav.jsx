import React from "react";
import { useNavigate } from "react-router-dom";
import { useYourContext } from "../context/context";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";

const LeftNav = () => {
  const { selectCategory, setSelectCategory, toggle,setToggle,menu} = useYourContext();
  const navigate = useNavigate()
  const activeClassHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategory(name);
      case "home":
        return setSelectCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return toggle? (
    <div className={`min-w-[250px] overflow-y-auto h-[100vh] py-4 bg-[#0F0F0F] absolute md:relative z-30 md:translate-x-0 transition-all`}> 
      <div className="flex flex-col px-5">
        {categories.map((menuItem) => {
          return (
            <React.Fragment key={menuItem.name}>
              <LeftNavMenuItem
                item={menuItem.type === "home" ? "Home" : menuItem.name}
                icon={menuItem.icon}
                action={() => {
                  activeClassHandler(menuItem.name, menuItem.type);
                  navigate("/")
                  setToggle(false)
                }}
                className={`${
                  selectCategory === menuItem.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {menuItem.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">Clone by: md waris</div>
      </div>
    </div>
  ) : null;
};

export default LeftNav;
