import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {

  console.log('SHOWING SEARCH RESULTS');


  const [videos, setVideos] = useState(null);
  //extracting the search term from the url that is passed there when we hit the search button , then onhandleSubmit is called which 
  //  if (searchTerm) {
    //   navigate(`/search/${searchTerm}`); // this url is entered and then searchFeed component is triggered 

    //   setSearchTerm("");
    // }
  const { searchTerm } = useParams();

  useEffect(() => {
    // setting the query q to search terms 
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
