import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
//import Image from "next/image";
import "./style.scss";

interface Props {
 // img: string;
  title?: string;
  description?:string;
  state?:string;
  location?:string
}

const Tile: React.FC<Props> = ({  title, description, state }) => {


  return (
    <>
      <Grid size={12} className="tile py-3" justifyContent={'space-between'} alignItems={'center'}>
        {/* <Grid size={3}>
          <Stack>
            <Image src={img} alt="my logo image" width={150} height={68} />
          </Stack>
        </Grid> */}
        <Grid size={9}>
          <Stack>
            <h3>{title}</h3>
          </Stack>
          <Stack>
            <strong>{state}</strong>
          </Stack>
          <Stack>
            <p>{description}</p>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Tile;
