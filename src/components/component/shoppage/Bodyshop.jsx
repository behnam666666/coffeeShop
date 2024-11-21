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
    </>
  );
};

export default Bodyshop;
