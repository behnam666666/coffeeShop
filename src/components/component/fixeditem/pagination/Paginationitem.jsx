import {
    Box,
    Tab,
  } from "@mui/material";

const Paginationitem = ({icon ,valuetab , index ,setValue}) => {
    console.log(valuetab , index)
  return (
    <Tab
    onClick={()=>{console.log(valuetab) ; setValue(index)}}   
      value={index}
      sx={{ zIndex: "2", minWidth: "54px",color:"#000" }} 
      icon={
        <Box
          component="img"
          src={icon}
          sx={{
            width: "35px",
            height: "35px",
            filter: valuetab == index ? "invert(100%)" : "invert(0)",
            transition: ".3s",
          }}
        />
      }
    />
  );
};

export default Paginationitem;
