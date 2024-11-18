import TypoGraphy from "@/components/common/Typography";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import "./style.scss"
import CustomBtn from "@/components/common/Button";
import { Delete, Edit } from "@mui/icons-material";

interface Props {
  imagePath: string;
  imgWidth?: number;
  imgHeight?: number;
  title: string;
  description?: string;
  state: string;
  latitude?:number
  longitude?:number
  deleteHandler?:() => void;
  editHandler?:() => void;
}

const InfoTile: React.FC<Props> = ({
  imagePath,
  imgWidth,
  imgHeight,
  title,
  description,
  state,
  latitude,
  longitude,
  deleteHandler,
  editHandler
}) => {
  return (
    <Grid
      size={12}
      flexBasis={"row"}
      justifyContent={"space-between"}
      container
      className={"py-4 info-tile"}
    >
      <Grid size={4} className="imgWrapper">
          <Image
            src={imagePath}
            alt={state}
            width={imgWidth}
            height={imgHeight}
            className="img"
          />
      </Grid>
      <Grid size={8} flexDirection={"column"}>
        <Grid size={12} display={"flex"} justifyContent={"space-between"} className={'pt-1 pb-2'}>
          <Stack>
            <TypoGraphy variant="h2" typeClass={"semi-bold-font black"}>
              {title}
            </TypoGraphy>
          </Stack>
          <Stack display={'inline-block'}>
          <CustomBtn
              startIcon={<Edit />}
              text={"Edit"}
              btnClass={"warning-btn mr-1"}
              onClick={editHandler}
            />
            <CustomBtn
              startIcon={<Delete />}
              text={"Delete"}
              btnClass={"error-btn"}
              onClick={deleteHandler}
            />
          </Stack>
        </Grid>
        <Stack className="pb-2">
          <TypoGraphy variant="body1" typeClass={"regular-font"}>
            {description}
          </TypoGraphy>
        </Stack>
        <Stack>
          <TypoGraphy variant="body1" typeClass={"semi-bold-font"}>
          <strong>State </strong> : {state}
          </TypoGraphy>
          <TypoGraphy variant="body1" typeClass={"regular-font"}>
            Location : <a href={`https://www.google.com/maps?q=${latitude},${longitude}`} target="_blank">Open in Google Maps</a>
          </TypoGraphy>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default InfoTile;
