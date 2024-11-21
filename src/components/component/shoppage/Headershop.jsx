
import { Box, Typography } from "@mui/material";
import instagramTcon from "../../../assets/instagram.svg";
const Headershop =()=>{
    return(
        <>
        <Box
          component="img"
          src={instagramTcon}
          sx={{ position: "absolute", top: "25px", right: "16px" }}
        />
        <Box sx={{ width: "85%", marginTop: "75px" }}>
          <Typography
            sx={{ fontSize: "32px", fontWeight: "700", lineHeight: "38px" }}
          >
            در هر زمان از قهوه خود لذت ببرید.
          </Typography>
        </Box>
        </>
    )
}


export default Headershop;