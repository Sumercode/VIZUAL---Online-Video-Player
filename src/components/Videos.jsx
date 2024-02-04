import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {

  console.log( videos);
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>

    {/* map on videos data received from feed componenet and render all the thumnails for all the videos in the array , */}
      {videos.map((item, idx) => (
        <Box key={idx}>
        {/* if it is video render video card else if it is channel render channel card  */}
        {/* this first contains the videoId and not the channel ID , item passed is the object that contains the details about the object */}
          {item.id.videoId && <VideoCard video={item} /> }
          {/* this contains the channel id and details of the channel */}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
