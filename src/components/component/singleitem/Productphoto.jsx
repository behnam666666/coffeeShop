
import iceIcone from "../../../assets/iceIcone.png";
import { Box } from "@mui/material";

const Productphoto = () =>{
    return(
        <>
        <Box component="div" sx={{ marginTop: "30px" }}>
          <Box
            component="div"
            sx={{
              width: "300px",
              height: "430px",
              overflowY: "hidden",
              borderBottomRightRadius: "150px",
              borderBottomLeftRadius: "150px",
              position: "relative",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "300px",
                height: "300px",
                borderRadius: "100%",
                bgcolor: "rgba(0, 119, 85, 1)",
                position: "absolute",
                bottom: "0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={iceIcone}
                sx={{ position: "absolute", bottom: "0" }}
              />
            </Box>
          </Box>
        </Box>
        </>
    )
}

export default Productphoto;