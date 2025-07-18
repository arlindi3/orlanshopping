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
import { Appheader } from "../../styles/appbar";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        px: { xs: 2, md: 6 }, // reduced horizontal padding on desktop
        py: { xs: 3, md: 4 }, // reduced vertical padding on desktop
        fontSize: { xs: "12px", md: "15px" }, // slightly smaller font on desktop
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 4 }} // reduced grid spacing on desktop
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6} lg={4}>
          <Appheader
            variant="h4"
            textAlign={{ xs: "center", md: "left" }}
            color="#d1adcc"
            sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }} // smaller header font
          >
            Orlan Shopping
          </Appheader>
          <Typography
            variant="caption2"
            sx={{
              display: "block",
              mt: 2,
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "0.9rem", md: "1rem" }, // smaller text
              color: Colors.dove_gray,
            }}
          >
            Prej më shumë se 15 vitesh, ne jemi të përkushtuar në sjelljen e
            stilit, cilësisë dhe përzgjedhjes më të mirë të aksesorëve për të
            gjithë ata që duan të duken dhe të ndihen mirë. Me dy dyqane fizikë
            në zemër të Durrësit, ne jemi bërë një pikë referimi për çanta
            moderne, syze trendi, shapka komode dhe shumë më tepër. Çdo produkt
            që ofrojmë është zgjedhur me kujdes për të kombinuar stilin
            bashkëkohor me çmimet e përballueshme.
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 1.5, // reduced gap
            }}
          >
            <Button
              sx={{ minWidth: 0, p: 1, color: Colors.white }}
              href="#"
              aria-label="Facebook"
            >
              <FacebookOutlinedIcon />
            </Button>
            <Button
              sx={{ minWidth: 0, p: 1, color: Colors.white }}
              href="#"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </Button>
            <Button
              sx={{ minWidth: 0, p: 1, color: Colors.white }}
              href="https://www.instagram.com/orlanshopping/"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <FooterTitle
            variant="body1"
            sx={{
              mb: 1.5, // reduced margin
              textAlign: { xs: "center", md: "left" },
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.1rem" }, // smaller title
            }}
          >
            Informacion
          </FooterTitle>
          <List sx={{ p: 0 }}>
            {[
              "Rreth nesh",
              "Na kontaktoni",
              "Privatësia & politika",
              "Kushtet & termat",
            ].map((text, idx) => (
              <ListItemText
                key={idx}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  mb: 0.5, // reduced margin
                }}
              >
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" }, // smaller text
                    color: Colors.dove_gray,
                  }}
                >
                  {text}
                </Typography>
              </ListItemText>
            ))}
          </List>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 3, md: 4 }, // reduced margin top
          fontSize: { xs: "12px", md: "13px" }, // smaller font
          color: Colors.dove_gray,
        }}
      >
        <Typography variant="caption2">
          Bërë nga{" "}
          <a
            href="https://www.instagram.com/aura.brand.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: Colors.white,
              textDecoration: "underline",
              fontWeight: 500,
            }}
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
