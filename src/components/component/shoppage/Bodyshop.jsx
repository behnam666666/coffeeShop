import { Box } from "@mui/material";
import Navbarmenu from "./Navbarmenu";
import Headershop from "./Headershop";
import Navbarshop from "./Navbarshop" ;
const Bodyshop = () => {
  return (
    <>

    
      <Box
        sx={{
          width: "100%",
          height: "850px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Headershop />

        <Navbarmenu />

        <Navbarshop />
      </Box>
      <Box sx={{width:"440px", height:"20%" , bgcolor:"rgba(75, 143, 90, 1)", position:"fixed" , bottom:"0" , zIndex:"-4"}}>
      </Box>
    </>
  );
};

export default Bodyshop;
