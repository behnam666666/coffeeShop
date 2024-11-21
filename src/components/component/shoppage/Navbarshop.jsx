import { Box, Typography } from "@mui/material";

import iceIcone from "../../../assets/iceIcone.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { EffectCoverflow, Pagination } from "swiper/modules";

const Navbarshop =()=>{
    return(
        <>
        <Box
          component="div"
          sx={{
            width: "710px",
            height: "800px",
            bgcolor: "rgba(75, 143, 90, 1)",
            position: "absolute",
            bottom: "-360px",
            borderRadius: "100%",
            margin: "auto",
          }}
        >
          <Swiper
            spaceBetween={20}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"2"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: -50,
              depth: 100,
              modifier: 0,
              slideShadows: false,
            }}
            // pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box
                component="div"
                sx={{
                  height: "330px",
                  overflowY: "hidden",
                  borderBottomRightRadius: "175px",
                  borderBottomLeftRadius: "175px",
                  position: "relative",
                  display:"flex",
                  justifyContent:"center"
                }}
              >
                <Box
                  component="div"
                  sx={{
                    margin:"auto",
                    width: "85%",
                    aspectRatio: " 1 / 1",
                    borderRadius: "100%",
                    bgcolor: "rgba(85, 161, 102, 1)",
                    position: "absolute",
                    bottom: "0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={iceIcone}
                    sx={{
                      position: "absolute",
                      bottom: "0px",
                      width: "135px !important",
                      aspectRatio: " 9 / 16",
                      objectPosition: "top",
                    }}
                  />
                </Box>
              </Box>
              <Typography sx={{fontSize:"20px", fontWeight:"700" , color:"white" , textAlign:"center"}}>آیس کارامل
              ماکیاتو</Typography>
              <Typography sx={{fontSize:"20px", fontWeight:"700" , color:"white" , textAlign:"center"}}>90,000 
              </Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="div"
                sx={{
                  height: "330px",
                  overflowY: "hidden",
                  borderBottomRightRadius: "175px",
                  borderBottomLeftRadius: "175px",
                  position: "relative",
                  display:"flex",
                  justifyContent:"center"
                }}
              >
                <Box
                  component="div"
                  sx={{
                    margin:"auto",
                    width: "85%",
                    aspectRatio: " 1 / 1",
                    borderRadius: "100%",
                    bgcolor: "rgba(85, 161, 102, 1)",
                    position: "absolute",
                    bottom: "0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={iceIcone}
                    sx={{
                      position: "absolute",
                      bottom: "0px",
                      width: "135px !important",
                      aspectRatio: " 9 / 16",
                      objectPosition: "top",
                    }}
                  />
                </Box>
              </Box>
              <Typography sx={{fontSize:"20px", fontWeight:"700" , color:"white" , textAlign:"center"}}>آیس کارامل
              ماکیاتو</Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="div"
                sx={{
                  height: "330px",
                  overflowY: "hidden",
                  borderBottomRightRadius: "175px",
                  borderBottomLeftRadius: "175px",
                  position: "relative",
                  display:"flex",
                  justifyContent:"center"
                }}
              >
                <Box
                  component="div"
                  sx={{
                    margin:"auto",
                    width: "85%",
                    aspectRatio: " 1 / 1",
                    borderRadius: "100%",
                    bgcolor: "rgba(85, 161, 102, 1)",
                    position: "absolute",
                    bottom: "0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={iceIcone}
                    sx={{
                      position: "absolute",
                      bottom: "0px",
                      width: "135px !important",
                      aspectRatio: " 9 / 16",
                      objectPosition: "top",
                    }}
                  />
                </Box>
              </Box>
              <Typography sx={{fontSize:"20px", fontWeight:"700" , color:"white" , textAlign:"center"}}>آیس کارامل
              ماکیاتو</Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="div"
                sx={{
                  height: "330px",
                  overflowY: "hidden",
                  borderBottomRightRadius: "175px",
                  borderBottomLeftRadius: "175px",
                  position: "relative",
                  display:"flex",
                  justifyContent:"center"
                }}
              >
                <Box
                  component="div"
                  sx={{
                    margin:"auto",
                    width: "85%",
                    aspectRatio: " 1 / 1",
                    borderRadius: "100%",
                    bgcolor: "rgba(85, 161, 102, 1)",
                    position: "absolute",
                    bottom: "0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={iceIcone}
                    sx={{
                      position: "absolute",
                      bottom: "0px",
                      width: "135px !important",
                      aspectRatio: " 9 / 16",
                      objectPosition: "top",
                    }}
                  />
                </Box>
              </Box>
              <Typography sx={{fontSize:"20px", fontWeight:"700" , color:"white" , textAlign:"center"}}>آیس کارامل
              ماکیاتو</Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="div"
                sx={{
                  height: "330px",
                  overflowY: "hidden",
                  borderBottomRightRadius: "175px",
                  borderBottomLeftRadius: "175px",
                  position: "relative",
                  display:"flex",
                  justifyContent:"center"
                }}
              >
                <Box
                  component="div"
                  sx={{
                    margin:"auto",
                    width: "85%",
                    aspectRatio: " 1 / 1",
                    borderRadius: "100%",
                    bgcolor: "rgba(85, 161, 102, 1)",
                    position: "absolute",
                    bottom: "0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={iceIcone}
                    sx={{
                      position: "absolute",
                      bottom: "0px",
                      width: "135px !important",
                      aspectRatio: " 9 / 16",
                      objectPosition: "top",
                    }}
                  />
                </Box>
              </Box>
              <Typography sx={{fontSize:"20px", fontWeight:"700" , color:"white" , textAlign:"center"}}>آیس کارامل
              ماکیاتو</Typography>
            </SwiperSlide>
          </Swiper>
        </Box>
        </>
    )
}

export default Navbarshop;