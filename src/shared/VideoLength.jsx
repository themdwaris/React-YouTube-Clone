import React from "react";
import moment from "moment/moment";

const VideoLength = ({time}) => {
  const videoLengthInSec = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return(
    <div className="absolute bottom-2 right-2 text-[1.1rem] font-sans font-bold bg-black/[0.9] rounded-md py-0 my-0 px-1 text-white">{videoLengthInSec}</div>
  )
};

export default VideoLength
