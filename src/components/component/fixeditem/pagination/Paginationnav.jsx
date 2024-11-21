import { Tabs } from "@mui/material";
import { useState } from "react";
import homeIcon from "../../../../assets/home.svg";
import shopIcon from "../../../../assets/shop.svg";
import Paginationitem from "./Paginationitem";
const Paginationnav = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Tabs
        centered
        value={value}
        sx={{
          bgcolor: "rgba(255, 255, 255, 1)",
          boxShadow: "0 2px 13px 2px rgba(0, 0, 0, 0.25)",
          height: "66px",
          width: "155px",
          display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          overflow: "hidden",
          position: "fixed",
          zIndex:"5",
          left: "50%",
          transform: "translate(-50%,0%)",
          bottom: "12px",
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "rgba(0, 119, 85, 1)",
            width: "54px",
            height: "54px",
            borderRadius: "12px",
            marginRight: "7px",
            marginBottom: "3px",
            boxShadow: "0 2px 7px 4px rgba(0, 0, 0, 0.25)",
            zIndex: "1",
          },
        }}
      >
        <Paginationitem
          icon={shopIcon}
          valuetab={value}
          index={0}
          setValue={setValue}
        />
        <Paginationitem
          icon={homeIcon}
          valuetab={value}
          index={1}
          setValue={setValue}
        />
      </Tabs>
    </>
  );
};

export default Paginationnav;
