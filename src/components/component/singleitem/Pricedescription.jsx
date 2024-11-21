import { Box, Typography } from "@mui/material";
import toman from "../../../assets/toman.svg";
const Pricedescription = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          width: "95%",
          marginTop: "20px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
            آیس کارامل ماکیاتو
          </Typography>
        </Box>
        <Box
          sx={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "700",
              color: "rgba(0, 119, 85, 1)",
            }}
          >
            90,000
          </Typography>
          <Box
            component="img"
            src={toman}
            sx={{ position: "relative", top: "-4px" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          marginTop: "14px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            color: "rgba(214, 214, 214, 1)",
          }}
        >
          توضیحات:
        </Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "500", lineHeight: "23px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
        </Typography>
      </Box>
    </>
  );
};

export default Pricedescription;
