import Grid from "@mui/material/Grid2";
import Banner from "./home/banner";
import './home/style.scss'
import InfoBar from "@/components/shared/InfoBar";


const Home: React.FC = () => {
  return (
   <Grid size={12}>
      <Banner/>
      <InfoBar/>
   </Grid>
  );
}

export default Home
