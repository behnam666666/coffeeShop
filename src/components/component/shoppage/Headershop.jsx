
import { Box, Typography } from "@mui/material";
import instagramTcon from "../../../assets/instagram.svg";
const Headershop =()=>{
    return(
        <>
        <Box
          component="img"
          src={instagramTcon}
          sx={{ position: "absolute", top: "26px", right: "0px" }}
        />
        </>
    )
}


export default Headershop;