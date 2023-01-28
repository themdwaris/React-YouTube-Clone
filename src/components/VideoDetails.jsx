import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import ReactPlayer from "react-player";
import { useYourContext } from "../context/context";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { fetchApi } from "../utils/api";
import SuggestionVideo from "./SuggestionVideo";
import LeftNav from "./LeftNav";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading} = useYourContext();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchApi(`video/details/?id=${id}`).then((res) => {
      // console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };
  const fetchRelatedVideo = () => {
    setLoading(true);
    fetchApi(`video/related-contents/?id=${id}`).then((res) => {
      // console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  };

  return (
    <>
    <div className="flex flex-row relative justify-center h-[calc(100%-88px)] bg-[#0F0F0F]"> 
    
    <div className="absolute left-0">
    <LeftNav/>
    </div>
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="min-h-[400px] md:h-auto flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] py-3 lg:py-6 overflow-y-auto ">
          <div className="h-[300px] md:h-[400px] lg:h-[400px] xl:h-[550px] lg:ml[0] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#0F0F0F" }}
              playing={true}
            />
          </div>

          <div className="text-[#F1F1F1] text-[1.9rem] font-bold line-clamp-2 mt-4 line-clamp-2 px-4">
            {video?.title}
          </div>

          <div className="flex flex-col justify-between md:flex-row mt-8 px-4">
            <div className="flex">
              <div className="flex items-center">
                <div className="flex h-12 w-12 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={video?.author?.avatar?.[0]?.url}
                  />
                </div>
              </div>

              <div className="flex flex-col ml-1 px-4">
                <span className="text-[15px] font-semibold text-white/[.9] flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsCheckCircleFill className="text-white/[.7] text-[12px] ml-2" />
                  )}
                </span>
                <span className="text-white/[.5] text-[12px] font-sans">
                  {video?.author?.stats?.subscribersText}
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-6 md:mt-0">
              <div className="flex justify-center items-center gap-2 bg-white/[.1] px-8  rounded-full h-16">
                <AiOutlineLike className="text-white text-[20px]" />
                <span className="text-white font-semibold text-[15px] border-[white]/[.4] border-r-[1px] pr-3">
                  {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
                </span>
                <AiOutlineDislike className="text-white text-[20px]" />
              </div>

              <div className="flex justify-center items-center gap-2 bg-white/[.1] px-8  rounded-full h-16">
                <span className="text-white font-semibold text-[15px] pr-3">
                  {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] mt-10">
          {relatedVideos?.contents?.map((relatedItem, index) => {
            if (relatedItem?.type !== "video") return false;
            return <SuggestionVideo key={index} video={relatedItem?.video} />;
          })}
          
        </div>
      </div>
    </div>
    </>
  );
};

export default VideoDetails;
