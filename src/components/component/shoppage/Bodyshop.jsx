import { Box } from "@mui/material";

import Headershop from "./Headershop";
import Search from "./Search";
import Navbarmenu from "./Navbarmenu";
import ItemsShop from "./ItemsShop";
const Bodyshop = () => {
  return (
    <>

    
      <Box
        sx={{
          width: "90%",
          height: "100vh",
          overflow:"scroll",
          
          position: "relative",
        }}
      >
        <Headershop />
        <Search />
        <Navbarmenu />
        <ItemsShop />
      </Box>

    </>
  );
};

export default Bodyshop;
