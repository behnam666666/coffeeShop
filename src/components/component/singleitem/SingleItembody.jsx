import { Box } from "@mui/material";

import Productphoto from "./Productphoto";
import Headsingleitem from "./Headsingleitem";
import Pricedescription from "./Pricedescription";
const SingleItem = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Headsingleitem />
        <Productphoto />
        <Pricedescription />

        
      </Box>
    </>
  );
};

export default SingleItem;
