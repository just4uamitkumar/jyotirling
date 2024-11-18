import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import { CloseRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import TypoGraphy from "../Typography";
import "./style.scss";

interface Props {
  anchor: "top" | "left" | "bottom" | "right";
  openDrawer?: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  drawerClass?: string;
  closeBtnClass?: string;
  drawerTitle?: React.ReactNode;
  titleClass?: string;
  children?: React.ReactNode;
}

const CustomDrawer: React.FC<Props> = ({
  anchor,
  openDrawer,
  toggleDrawer,
  drawerClass,
  closeBtnClass,
  drawerTitle,
  titleClass,
  children,
}) => {
   
  return (
    <Drawer
      anchor={anchor}
      open={openDrawer}
      onClose={toggleDrawer(false)}
      className={drawerClass}
    >
      <Box role="presentation">
        <>
          <Grid container size={12} justifyContent={"flex-end"}>
            <IconButton onClick={toggleDrawer(false)} className={closeBtnClass}>
              <CloseRounded />
            </IconButton>
          </Grid>
          <Grid size={12}>
            <TypoGraphy variant="h1" component={"h1"} typeClass={titleClass}>
              {drawerTitle}
            </TypoGraphy>
          </Grid>
          <Grid container size={12}>
            {children}
          </Grid>
        </>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
