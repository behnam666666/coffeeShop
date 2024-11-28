import searchIcon from "../../../assets/searchIcon.svg";

import { Box } from "@mui/material";

const Search = () => {
  return (
    <>
      <Box sx={{ position: "relative", width:"100%" ,marginTop: "82px"}}>
        <Box component="img" src={searchIcon} sx={{ position: "absolute" , top:"12px", left:"12px" }} />
          <input type="text" className="Search" placeholder="جستجو..." />
      </Box>
    </>
  );
};

export default Search;
