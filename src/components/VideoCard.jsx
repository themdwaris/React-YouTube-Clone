import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
  // const {videoId} = video
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col mb-8">
          <div className="relative h-80 md:h-60 md:rounded-xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails?.[0]?.url}
            />
            {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds} />
            )}
          </div>
          <div className="flex text-white mt-5 px-5">
            <div className="flex items-start">
              <div className="flex h-14 w-14 md:h-12 md:w-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={video?.author?.avatar?.[0]?.url}
                />
              </div>
            </div>
            <div className="h-full flex flex-col ml-3 overflow-hidden">
              <span className="text-[#F1F1F1] text-[1.1rem] md:text-[1.3rem] font-bold line-clamp-2">
                {`${video?.title.length}` >= 60
                  ? `${video?.title.slice(0, 60)}...`
                  : video?.title}
              </span>

             <div className="flex flex-row md:flex-col gap-1 items-start">
             <span className="text-[11px] md:font-semibold mt-2 text-white/[.7] flex items-center">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsCheckCircleFill className="text-white/[.7] text-[12px] ml-2" />
                )}
              </span>
              <div className="flex text-[12px] md:font-semibold text-white/[.7] truncate overflow-hidden gap-2 ml-4 md:ml-0 items-center md:items-start">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[20px] md:font-bold text-white/[.7] relative md:top-[-12px] top-[-7px]">
                  .
                </span>
                <div className="truncate">{video?.publishedTimeText}</div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
