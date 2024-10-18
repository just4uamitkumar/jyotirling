import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";

const InfoBar: React.FC = () => {
  return (
    <Grid size={12} className="infoBar">
      <Stack className="container py-5">
        <Stack alignItems={"center"} justifyContent={"space-between"} flexDirection={'row'}>
          <Stack>Event Name</Stack>
          <Stack className="text-center">Duration</Stack>
          <Stack className="text-right">Location</Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default InfoBar;
