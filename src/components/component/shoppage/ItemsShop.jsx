import { Box , Typography } from "@mui/material";

import nIcon from "../../../assets/n.png"
import logolightIcon from "../../../assets/logolight.svg";
import tomanIcon from "../../../assets/toman.svg"

const ItemsShop =()=>{
    return(
        <>
        <Box sx={{width:"100%" , display:"flex" , flexDirection:"column", gap:"28px" , marginTop:"24px"}}>
            <Box sx={{height:"200px", width:"100%" , backgroundColor:"rgba(69, 131, 83, 1)" , borderRadius:"16px" , overflow:"hidden" , position:"relative" }}>
                <Box sx={{width:"175px" , height:"175px" , background:`url(${nIcon})` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , borderRadius:"100%" , border:"4px solid rgba(0, 119, 85, 1)", position:"absolute" , top:"-20px",right:"-28px"}}></Box>

                <Box sx={{width:"calc(100% - 173px)",height:"100%" , display:"flex" , flexDirection:"column" , marginLeft:"16px"}}>
                    <Typography sx={{fontSize:"20px" , fontWeight:"700" , color:"white", marginTop:"32px" }}>اسپرسو دابل</Typography>
                    <Box sx={{display:"flex" , alignItems:"center" , marginTop:"18px"}} ><Typography sx={{fontSize:"20px" , fontWeight:"700" , color:"white" , marginTop:"3px" }} >250,000</Typography> <Box component="img"  src={tomanIcon} sx={{filter:"brightness(0) saturate(100%) invert(100%)" , width:"28px" , height:"28px" , marginLeft:"4px"}} /> </Box>
                    <Box component="img" src={logolightIcon} sx={{marginTop:"20px" , width:"40px" , height:"40px"}}  />
                </Box>
                
            </Box>





            


        </Box>
        </>
    )
}

export default ItemsShop;