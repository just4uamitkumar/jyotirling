import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const DevSidebar: React.FC = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/develop/DateObjectPage1">
            <ListItemText primary="Date Object Problem 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/develop/DateObjectPage2">
            <ListItemText primary="Date Object Problem 2" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/develop/DateObjectPage3">
            <ListItemText primary="Date Object Problem 3" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/develop/DateObjectPage4">
            <ListItemText primary="Date Object Problem 4" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/develop/DateObjectPage5">
            <ListItemText primary="Date Object Problem 5" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/develop/Debouncing">
            <ListItemText primary="Debouncing" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/develop/Throttling">
            <ListItemText primary="Throttling" />
          </ListItemButton>
        </ListItem>
        
      </List>
    </>
  );
};

export default DevSidebar;
