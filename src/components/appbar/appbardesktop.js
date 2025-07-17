import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, Appheader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
// import { Colors } from "../../styles/theme";
import { ContexUi } from "../../context/contexUI";

export default function AppBarDesktop({ matches }) {
  const { setSearchBox } = ContexUi();
  return (
    <AppbarContainer
      style={{ position: "sticky", top: 0, zIndex: 1100, background: "#fff" }}
    >
      <Appheader color={"#d1adcc"}>Orlan Shopping</Appheader>
      <MyList type="row">
        <ListItemText primary="Home"></ListItemText>
        <ListItemText primary="Kategoritë"></ListItemText>
        <ListItemText primary="Produktet"></ListItemText>
        <ListItemText primary="Rreth Nesh"></ListItemText>
        <ListItemButton
          component="a"
          href="https://wa.me/355673152486"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText primary="+355 67 315 2486"></ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon onClick={() => setSearchBox(true)}>
            <SearchIcon></SearchIcon>
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches}></Actions>
    </AppbarContainer>
  );
}
