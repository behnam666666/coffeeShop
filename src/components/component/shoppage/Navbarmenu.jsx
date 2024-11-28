import cakeIcon from "../../../assets/cake.svg";
import drinkIcon from "../../../assets/drink.svg";
import coffeeIcon from "../../../assets/coffee.svg";
import teaIcon from "../../../assets/tea.svg";

import { Box , Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

const Navbarmenu = () => {
  return (
    <>
    <Box sx={{width:"100%" , marginTop:"22px" ,}}>
        <Swiper slidesPerView={4} spaceBetween={10}  loop={true} style={{overflow:"visible !important"}}>
            <SwiperSlide style={{height:"100px"}}><Box sx={{width:"74px" , height:"74px" , backgroundColor:"rgba(169, 213, 179, 1)", borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center" , position:"relative"}}> <Box component="img" src={cakeIcon} /> <Typography sx={{fontSize:"12px", fontWeight:"700" , color:"black" , position:"absolute" , bottom:"-22px"}}>کیک و شیرینی</Typography> </Box></SwiperSlide>
            
            <SwiperSlide style={{height:"100px"}}><Box sx={{width:"74px" , height:"74px" , backgroundColor:"rgba(75, 143, 90, 1)", borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center", position:"relative"}}> <Box component="img" src={teaIcon} /><Typography sx={{fontSize:"12px", fontWeight:"700" , color:"black" , position:"absolute" , bottom:"-22px"}}>چای</Typography></Box></SwiperSlide>

            <SwiperSlide style={{height:"100px"}}><Box sx={{width:"74px" , height:"74px" , backgroundColor:"rgba(169, 213, 179, 1)", borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center", position:"relative"}}> <Box component="img" src={drinkIcon} /><Typography sx={{fontSize:"12px", fontWeight:"700" , color:"black" , position:"absolute" , bottom:"-22px"}}>نوشیدنی سرد</Typography></Box></SwiperSlide>

            <SwiperSlide style={{height:"100px"}}><Box sx={{width:"74px" , height:"74px" , backgroundColor:"rgba(169, 213, 179, 1)", borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center", position:"relative"}}> <Box component="img" src={coffeeIcon} /><Typography sx={{fontSize:"12px", fontWeight:"700" , color:"black" , position:"absolute" , bottom:"-22px"}}>نوشیدنی گرم</Typography></Box></SwiperSlide>      
        
            <SwiperSlide style={{height:"100px"}}><Box sx={{width:"74px" , height:"74px" , backgroundColor:"rgba(169, 213, 179, 1)", borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center" , position:"relative"}}> <Box component="img" src={cakeIcon} /> <Typography sx={{fontSize:"12px", fontWeight:"700" , color:"black" , position:"absolute" , bottom:"-22px"}}>کیک و شیرینی</Typography> </Box></SwiperSlide>
            
            <SwiperSlide style={{height:"100px"}}><Box sx={{width:"74px" , height:"74px" , backgroundColor:"rgba(75, 143, 90, 1)", borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center", position:"relative"}}> <Box component="img" src={teaIcon} /><Typography sx={{fontSize:"12px", fontWeight:"700" , color:"black" , position:"absolute" , bottom:"-22px"}}>چای</Typography></Box></SwiperSlide>

            <SwiperSlide style={{height:"100px"}}><Box sx={{width:"74px" , height:"74px" , backgroundColor:"rgba(169, 213, 179, 1)", borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center", position:"relative"}}> <Box component="img" src={drinkIcon} /><Typography sx={{fontSize:"12px", fontWeight:"700" , color:"black" , position:"absolute" , bottom:"-22px"}}>نوشیدنی سرد</Typography></Box></SwiperSlide>

            <SwiperSlide style={{height:"100px"}}><Box sx={{width:"74px" , height:"74px" , backgroundColor:"rgba(169, 213, 179, 1)", borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center", position:"relative"}}> <Box component="img" src={coffeeIcon} /><Typography sx={{fontSize:"12px", fontWeight:"700" , color:"black" , position:"absolute" , bottom:"-22px"}}>نوشیدنی گرم</Typography></Box></SwiperSlide>      
        </Swiper>

    </Box>
      
    </>
  );
};

export default Navbarmenu;
