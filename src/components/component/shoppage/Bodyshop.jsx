import { Box } from "@mui/material";
import Headershop from "./Headershop";
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
      </Box>
      <Box
        sx={{
          width: "440px",
          height: "20%",
          bgcolor: "rgba(75, 143, 91, 1)",
          position: "fixed",
          bottom: "0",
          zIndex: "-4",
        }}
      ></Box>
    </>
  );
};

export default Bodyshop;
