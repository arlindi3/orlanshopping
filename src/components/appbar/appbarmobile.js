import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { AppbarContainer, Appheader, MyList } from "../../styles/appbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Actions from "./actions";
import { ContexUi } from "../../context/contexUI";

export default function AppBarMobile({ matches }) {
  const { setdrawer, setSearchBox } = ContexUi();
  return (
    <AppbarContainer
      style={{ position: "sticky", top: 0, zIndex: 1100, background: "#fff" }}
    >
      <IconButton onClick={() => setdrawer(true)}>
        <MenuOutlinedIcon></MenuOutlinedIcon>
      </IconButton>
      <Appheader variant="h4" textAlign={"center"} color={"#d1adcc"}>
        Orlan Shopping
      </Appheader>
      <IconButton onClick={() => setSearchBox(true)}>
        <SearchOutlinedIcon></SearchOutlinedIcon>
      </IconButton>
      <Actions matches={matches}></Actions>
    </AppbarContainer>
  );
}
