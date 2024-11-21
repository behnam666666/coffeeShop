import { Box , Typography } from "@mui/material";

import logo from "../../../assets/logo.svg"

const Logo = ()=>{
    return(
        <>
        <Box component="div" sx={{display:"flex", position:"absolute" ,top:"10px" , left:"16px"  }}>
            <Box component="img" src={logo}  />
            <Box component="div" sx={{position:"relative",top:"9px" , marginLeft:"2px"}} >
            <Typography variant="subtitle1" sx={{fontWeight:"700" ,}}>کافه صبر</Typography>
            <Typography variant="caption" sx={{fontWeight:"700" , color:"rgba(192, 192, 192, 1)",position:"relative", top:"-10px" }}>تهران،گرگان</Typography>
            </Box>
        </Box>
        </>
    )
}

export default Logo;