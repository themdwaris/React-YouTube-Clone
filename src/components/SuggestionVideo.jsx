import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength'
import { BsCheckCircleFill } from "react-icons/bs";

const SuggestionVideo = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`} className="">
        <div className="flex mr-3 mb-4">
          <div className="relative h-30 lg:h-40 xl:h-50 w-48 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails?.[0]?.url}
            />
            {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds} />
            )}
          </div>
          <div className="flex text-white mt-5 px-5">
           
            <div className="h-full flex flex-col ml-3 overflow-hidden">
              <span className="text-[#F1F1F1] text-[1.2rem] font-bold line-clamp-2">
                {`${video?.title?.length}` >= 70
                  ? `${video?.title?.slice(0, 70)}...`
                  : video?.title}
              </span>
              <span className="text-[12px] font-semibold mt-2 text-white/[.7] flex items-center">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsCheckCircleFill className="text-white/[.7] text-[12px] ml-2" />
                )}
              </span>
              <div className="flex text-[12px] font-semibold text-white/[.7] truncate overflow-hidden gap-2">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[20px] font-bold text-white/[.7] relative top-[-12px]">
                  .
                </span>
                <div className="truncate">{video?.publishedTimeText}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default SuggestionVideo