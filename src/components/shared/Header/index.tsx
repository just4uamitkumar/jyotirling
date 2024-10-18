import Grid from "@mui/material/Grid2";
import  "./style.scss";
import Image from "next/image";
import logo from "../../../styles/assets/images/web/shivShakti.png";
import { Stack } from "@mui/material";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className="container">
          <Grid container spacing={2} justifyContent={'space-between'} alignItems={'center'}>
            <Grid size={3}>
              <Stack>
                <Image src={logo} alt="my logo image" width={150} height={68} />
              </Stack>
            </Grid>
            <Grid size={9}   textAlign={"right"}>
             <Nav/>
            </Grid>
          </Grid>
        </div>
      </header>
    </>
  );
};

export default Header;
