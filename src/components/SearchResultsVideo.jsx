import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const SearchResultsVideo = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-8 md:mb-3 hover:bg-white/[.1] md:rounded-xl py-1">
        <div className="flex relative shrink-0 h-[200px] md:h-[175px] lg:h-[200px] xl:h-[200px] w-full md:w-[250px] lg:w-[350px] xl:[350px] overflow-hidden md:rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails?.[0]?.url}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className="text-[#F1F1F1] text-[1.3rem] md:text-[1.9rem] font-inter line-clamp-2">
            {`${video?.title.length}` >= 70
              ? `${video?.title.slice(0, 70)}...`
              : video?.title}
          </span>

          <div className="flex text-[12px] font-semibold text-white/[.7] truncate overflow-hidden gap-2">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className="flex text-[20px] font-bold text-white/[.7] relative top-[-12px]">
              .
            </span>
            <div className="truncate">{video?.publishedTimeText}</div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={video?.author?.avatar?.[0]?.url}
              />
            </div>
            <span className="text-[12px] font-semibold mt-2 text-white/[.7] flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsCheckCircleFill className="text-white/[.7] text-[12px] ml-2" />
              )}
            </span>
          </div>
          <div className="hidden md:block empty:hidden text-white/[.7] md:pr-24 md:my-5 line-clamp-1 md:line-clamp-2 text-[14px]">
            {video.descriptionSnippet}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultsVideo;
