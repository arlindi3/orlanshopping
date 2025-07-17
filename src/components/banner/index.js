import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import { Colors } from "../../styles/theme";

export default function Banner() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage
        src="/images/banner/banner.jpeg"
        style={{
          width: matches ? "100%" : "50%",
          maxHeight: matches ? "350px" : "500px",
          objectFit: "cover",
        }}
      ></BannerImage>
      <BannerContent>
        <Typography variant="h6">Koleksion</Typography>
        <BannerTitle variant="h2">Çanta të reja</BannerTitle>
        <BannerDescription variant="subtitle">
          “Një çantë, një palë syze apo shapka – nuk janë thjesht aksesorë. Janë
          pjesë e stilit tënd, që tregojnë personalitetin dhe të bëjnë të
          ndihesh unik çdo ditë.”
        </BannerDescription>
        <BannerShopButton background="" color="primary">
          BLEJ TANI
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
