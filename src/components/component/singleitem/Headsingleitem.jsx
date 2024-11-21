import { Box, Typography } from "@mui/material";
import backarrow from "../../../assets/backarrow.svg";



const Headsingleitem =()=>{
    return(
        <>
        <Box
          component="div"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            top: "25px",
          }}
        >
          <Box component="div" width={"40px"}></Box>
          <Box component="div">
            <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
              جزئیات
            </Typography>
          </Box>
          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <Box component="img" src={backarrow} />
          </Box>
        </Box>
        </>
    )
}

export default Headsingleitem;