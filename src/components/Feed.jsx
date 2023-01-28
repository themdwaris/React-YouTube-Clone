import React from "react";
import { useYourContext } from "../context/context";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useYourContext();
  return (
    <div className="flex h-[calc(100%-88px)]">
      <LeftNav />
      <div className="grow max-w-[1300px] my-0 mx-auto justify-center items-center h-[100vh] overflow-y-auto bg-[#0F0F0F]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-0 md:p-5">
          {!loading && searchResults &&
            searchResults?.map((item, index) => {
              return <VideoCard key={index} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
