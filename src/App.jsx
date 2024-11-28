import MainLayout from "./components/layouts/MainLayout";
import { Box, Pagination } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Bodyshop from "./components/component/shoppage/Bodyshop";
import SingleItem from "./components/component/singleitem/SingleItembody";
import Logo from "./components/component/fixeditem/Logo";
import Paginationnav from "./components/component/fixeditem/pagination/Paginationnav";
import Frame from "./assets/Frame.svg";
import 'swiper/css';

function App() {
  return (
    <MainLayout>
      
      <Box
      component="div"
        sx={{
          width: "100%",
          // minHeight:"200vh",
          // height:"850px",
          background:`url(${Frame})`,
          backgroundSize:"100% auto " ,
          position:"absolute",
          top:"0",
          overflow:"hidden",
          zIndex:"1",
          display:"flex",
          justifyContent:"center"
          
        }}
      >
        <Logo></Logo>
        <Bodyshop />
        {/* <SingleItem /> */}
        <Paginationnav />
      </Box>

      <Routes></Routes>
    </MainLayout>
  );
}

export default App;
