
import Grid from "@mui/material/Grid2";
import './style.scss'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container">
          <Grid container spacing={2}>
            <Grid size={3}>
              <h4>About Our Research</h4>
              <p>We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</p>
              <p>E : info@yoursite.com</p>
              <p>L : Google Map</p>
            </Grid>
            <Grid size={3}>
              <h4>Latest Sermons</h4>
              <p>We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</p>
              <p>E : info@yoursite.com</p>
              <p>L : Google Map</p>
            </Grid>
            <Grid size={3}>
              <h4>Instagram</h4>
              <p>We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</p>
              <p>E : info@yoursite.com</p>
              <p>L : Google Map</p>
            </Grid>
            <Grid size={3}>
              <h4>Recent Comments</h4>
              <p>We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</p>
              <p>E : info@yoursite.com</p>
              <p>L : Google Map</p>
            </Grid>
          </Grid>
        </div>
      </footer>
    </>
  );
};

export default Footer;
