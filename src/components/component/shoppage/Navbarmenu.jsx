import { Box, Typography } from "@mui/material";


import cakeicon from "../../../assets/cake.svg";
import tesicon from "../../../assets/tea.svg";
import drink from "../../../assets/drink.svg"
import coffee from "../../../assets/coffee.svg"


const Navbarmenu =()=>{
    return(
        <>
        <Box
          component="div"
          sx={{
            width: "730px",
            height: "730px",
            bgcolor: "rgba(69, 131, 83, 1)",
            position: "absolute",
            bottom: "-169px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >

            <Box component="div" sx={{position:"relative" , width:"74px" , height:"74px", bgcolor:"white", borderRadius:"100%", transform:"translate(-40px , 49px)" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <Box component="img" src={cakeicon} sx={{width:"38px", height:"49px"}} />
                <Typography sx={{position:"absolute" , bottom:"-20px" , fontSize:"12px", color:"white"}}>کیک و شیرینی</Typography>
            </Box>
            <Box component="div" sx={{width:"74px" , height:"74px", bgcolor:"white", borderRadius:"100%" ,transform:"translate(-17px , 17px)" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <Box component="img" src={tesicon} sx={{width:"57px", height:"57px"}} />
                <Typography sx={{position:"absolute" , bottom:"-20px" , fontSize:"12px", color:"white"}}>چای</Typography>

            </Box>
            <Box component="div" sx={{width:"74px" , height:"74px", bgcolor:"white", borderRadius:"100%",transform:"translate(17px , 17px)" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <Box component="img" src={drink} sx={{width:"32px", height:"45px"}} />
            <Typography sx={{position:"absolute" , bottom:"-20px" , fontSize:"12px", color:"white"}}>نوشیدنی ها</Typography>

                </Box>
            <Box component="div" sx={{width:"74px" , height:"74px", bgcolor:"white", borderRadius:"100%",transform:"translate(40px , 49px)" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <Box component="img" src={coffee} sx={{width:"38px", height:"49px"}} />
                <Typography sx={{position:"absolute" , bottom:"-20px" , fontSize:"12px", color:"white"}}>بر پایه قهوه</Typography>

            </Box>
        </Box>
        </>
    )
}
export default Navbarmenu;