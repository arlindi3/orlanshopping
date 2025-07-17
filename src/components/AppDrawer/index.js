import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import { ContexUi } from "../../context/contexUI";
import { DrawerButtonClose } from "../../styles/appbar";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Colors } from "../../styles/theme";
import { lighten } from "polished";

export default function AppDrawer() {
  const { drawer, setdrawer } = ContexUi();

  return (
    <>
      {drawer && (
        <DrawerButtonClose className="testing">
          <CloseOutlinedIcon
            onClick={() => setdrawer(false)}
            sx={{ fontSize: "2.5rem", color: lighten(0.09, Colors.primary) }}
          ></CloseOutlinedIcon>
        </DrawerButtonClose>
      )}
      <Drawer open={drawer}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider orientation="horizontal" variant="middle"></Divider>
          <ListItemButton>
            <ListItemText>Kategoritë</ListItemText>
          </ListItemButton>
          <Divider orientation="horizontal" variant="middle"></Divider>
          <ListItemButton>
            <ListItemText>Produktet</ListItemText>
          </ListItemButton>
          <Divider orientation="horizontal" variant="middle"></Divider>
          <ListItemButton>
            <ListItemText>Rreth Nesh</ListItemText>
          </ListItemButton>
          <Divider orientation="horizontal" variant="middle"></Divider>

          <ListItemButton
            component="a"
            href="https://wa.me/355673152486"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemText primary="+355 67 315 2486"></ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
