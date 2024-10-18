"use client";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const CodeSidebar: React.FC = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/code/StringProblem1">
            <ListItemText primary="String Problems 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/code/StringProblem2">
            <ListItemText primary="String Problems 2" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/code/NumberProblem1">
            <ListItemText primary="Number Problems 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/code/NumberProblem2">
            <ListItemText primary="Number Problems 2" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/code/ArrayProblem1">
            <ListItemText primary="Array Problem 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/code/ArrayProblem2">
            <ListItemText primary="Array Problem 2" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default CodeSidebar;
