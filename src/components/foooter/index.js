import {
  Box,
  Grid,
  List,
  ListItemText,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: "12px",
        pb: "12px",
        fontSize: { xs: "12px", md: "16px" },
      }}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body">rreth nesh</FooterTitle>
          <br></br>
          <Typography variant="caption2">
            Prej më shumë se 15 vitesh, ne jemi të përkushtuar në sjelljen e
            stilit, cilësisë dhe përzgjedhjes më të mirë të aksesorëve për të
            gjithë ata që duan të duken dhe të ndihen mirë. Me dy dyqane fizikë
            në zemër të Durrësit, ne jemi bërë një pikë referimi për çanta
            moderne, syze trendi, shapka komode dhe shumë më tepër. Çdo produkt
            që ofrojmë është zgjedhur me kujdes për të kombinuar stilin
            bashkëkohor me çmimet e përballueshme.
          </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <FacebookOutlinedIcon sx={{ mr: 1 }}></FacebookOutlinedIcon>
            <TwitterIcon sx={{ mr: 1 }}></TwitterIcon>
            <InstagramIcon sx={{ mr: 1 }}></InstagramIcon>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">informacion</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {" "}
                rreth nesh
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {" "}
                na kontaktoni
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {" "}
                Privatësia &amp; politika
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {" "}
                Kushtet &amp; termat
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">llogaria ime</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {" "}
                Hyrje
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {" "}
                Karroca ime
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {" "}
                Llogaria ime
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                {" "}
                Lista e dëshirave
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">buletini</FooterTitle>
          <Stack>
            <SubscribeTf
              sx={{ color: Colors.white }}
              variant="standard"
              label="Shkruani email-in"
            ></SubscribeTf>
            <Button
              variant="contained"
              sx={{ mt: 4, mb: 4 }}
              startIcon={<SendIcon sx={{ color: Colors.white }}></SendIcon>}
            >
              abono
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          mt: 6,
          fontSize: { xs: "12px", md: "14px" },
          color: Colors.dove_gray,
        }}
      >
        <Typography variant="caption2">
          Bërë nga{" "}
          <a
            href="https://www.instagram.com/aura.brand.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: Colors.white, textDecoration: "underline" }}
          >
            AuraBrand
          </a>{" "}
          me dashuri &mdash; Të gjitha të drejtat e rezervuara &copy;{" "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
