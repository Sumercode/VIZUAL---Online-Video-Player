import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

//this is the component which fetch the video data from rapid api 
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";


// feed contains sidebar , videos 

const Feed = () => {


  //this is changed in the sidebar component where we pass the selectedcategory and setSelectedcategory
  const [selectedCategory, setSelectedCategory] = useState("New");
  //use state hook for videos 
  const [videos, setVideos] = useState(null);

    //fetching videos whenever the url reloads by useEffect hook - The useEffect hook in the provided code snippet is used to fetch videos from an API based on the selected category whenever the selectedCategory state changes. 

    console.log(videos);

    // part=snippet: The part parameter specifies which parts of the resource should be included in the API response. In this case, snippet is one of the parts of the resource that typically includes metadata about the search result, such as the title, description, and thumbnails.
    // q=${selectedCategory}: The q parameter is used to specify the search query. In this case, ${selectedCategory} is a placeholder for the value of the selected category variable. It indicates that the API should return results related to the selected category.
  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2024 VIZUAL
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        {/* passing videos ( fetched from rapid api calling ) as props to Videos Component */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
