import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { IoMdMic } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import Loader from "../shared/Loader";
import profile from "../images/pro1.png";

import ytLogoMobile from "../images/yt-logo-mobile.png";
import ytLogo from "../images/yt-logo.png";

import { useYourContext } from "../context/context";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, toggle, setToggle, menu, setMenu } = useYourContext();
  const navigate = useNavigate();
  const serachQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
      // setSearchQuery("")
    }
  };
  const mobileMenuHandler = () => {
    setToggle(!toggle);
  };
  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-20 h-[5.5rem] flex flex-row items-center justify-between px-5 md:px-10 md:px5 text-[white] dark:bg-[#0F0F0F]">
      {loading && <Loader />}
      <div className="flex h-8 items-center gap-2">
        {pageName !== "video" && (
          <div className="flex mr-3 md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            {toggle ? (
              <SlMenu
                className="text-[white] text-[1.7rem] cursor-pointer"
                onClick={mobileMenuHandler}
              />
            ) : (
              <SlMenu
                className="text-[white] text-[1.7rem] cursor-pointer"
                onClick={mobileMenuHandler}
              />
            )}
          </div>
        )}
        <Link to="/">
          <img className="hidden md:block w-[85px] ml-[3rem]" src={ytLogo} />
          <img className="h-full md:hidden w-[30px]" src={ytLogoMobile} />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex justify-between items-center h-[35px] md:h-[38px] md:ml-10 md:pl-7 border border-[#303030] rounded-l-[35px] group-focus-within:border-blue-500 md:group-focus-within:ml-7 md:group-focus-within:pl-5">
          <div className="items-center justify-center w-10 hidden group-focus-within:md:flex">
            <IoIosSearch className="mr-3 text-[white] text-[2.3rem]" />
          </div>
          <input
            type="text"
            placeholder="Search"
            autoComplete="off"
            className="bg-transparent outline-none text-[white] px-5 md:pl-0 w-64 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] placeholder:text-[#888888] placeholder:font-inter"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={serachQueryHandler}
            value={searchQuery}
          />
          {searchQuery !== "" ? (
            <button className="mr-2">
              <CgClose
                className="text-[white]/[0.7] cursor-pointer text-[20px] md:text-[25px]"
                onClick={() => setSearchQuery("")}
              />
            </button>
          ) : null}
        </div>
        <button className="h-[35px] md:h-[38px] w-[40px] md:w-[60px] flex justify-center items-center border border-l-0 border-[#303030] rounded-r-[40px] bg-[white]/[0.1]">
          <IoIosSearch className="mr-3 text-[white] text-[2rem] md:text-[2.2rem]" />
        </button>
        <button className="w-[30px] md:w-[35px] h-[30px] md:h-[35px] bg-[white]/[0.1] hover:bg-[white]/[0.2] rounded-full flex justify-center items-center ml-[1.5rem] md:ml-[1rem]">
          <IoMdMic className=" text-[white] text-[2rem]" />
        </button>
      </div>
      <div className="flex">
      <div className="hidden md:flex items-center gap-1">
        <button className="w-25px md:w-[35px] h-[25px] md:h-[35px] hover:bg-[white]/[0.2] rounded-full flex justify-center items-center ml-[1rem]">
          <RiVideoAddLine className=" text-[white] text-[2rem]" />
        </button>
        <button className="w-25px md:w-[35px] h-[25px] md:h-[35px] hover:bg-[white]/[0.2] rounded-full flex justify-center items-center ml-[1rem]">
          <BsBell className=" text-[white] text-[2rem]" />
        </button>
        </div>
        <div className="flex items-center w-10 h-10 rounded-full overflow-hidden md:ml-4 ml-0 cursor-pointer">
          <img src={profile} />
        </div>
      </div>
    </div>
  );
};

export default Header;
