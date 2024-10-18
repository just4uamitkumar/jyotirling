import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./style.scss";

interface Props {
  title: string;
  path?: string;
}

const PageBanner: React.FC<Props> = ({ title, path }) => {
  return (
    <>
      <Grid size={12} className="pageBanner" justifyContent={'center'} alignItems={'center'}>
        <Stack  className={'pageHeader'}>
          <Stack className="title">{title}</Stack>
          <Stack className="breadCrumb">{path}</Stack>
        </Stack>
      </Grid>
    </>
  );
};

export default PageBanner;
