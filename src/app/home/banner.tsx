import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
const Banner: React.FC = () => {
  return (
    <>
      <Grid size={12}>
        <Stack className="homeBanner"  justifyContent={'center'} alignItems={'center'}>
          <Stack className={"pageHeader"}>
            <Stack className="title">{"Welcome to Shiv Gyan"}</Stack>
          </Stack>
        </Stack>
      </Grid>
    </>
  );
};

export default Banner;
