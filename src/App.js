import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

//index.js inside the components contains all the exports
//example = export { default as ChannelCard } from './ChannelCard';

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";

//enclose everything inside browser router for making single page application

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      {/* navbar contains the logo and searchbar */}
      <Navbar />
      <Routes>
        {/* feed contains the main page */}
        <Route exact path="/" element={<Feed />} />
        {/* videodetails contains the video player  */}
        <Route path="/video/:id" element={<VideoDetail />} />
        {/* channel details contains the details of the channel */}
        <Route path="/channel/:id" element={<ChannelDetail />} />
        {/* search feed shows the searchresults , SearchFeed component is triggered when the url changes to /search/--*/}
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
