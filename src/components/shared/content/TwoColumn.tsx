import TypoGraphy from "@/components/common/Typography";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

interface Props {
  imagePath: string;
  imgWidth?: number;
  imgHeight?: number;
  title: string;
  description?: string;
  location?: string;
  state: string;
}

const TwoColumn: React.FC<Props> = ({
  imagePath,
  imgWidth,
  imgHeight,
  title,
  description,
  state,
  location,
}) => {
  return (
    <Grid
      size={12}
      flexBasis={"row"}
      justifyContent={"space-between"}
      container
      className={"py-2"}
    >
      <Grid size={4}>
        <Image
          src={imagePath}
          alt={state}
          width={imgWidth}
          height={imgHeight}
        />
      </Grid>
      <Grid size={8} flexDirection={"column"}>
        <Stack>
          <TypoGraphy variant="h1" typeClass={"semi-bold-font"}>
            {title}
          </TypoGraphy>
          <TypoGraphy variant="body1" typeClass={"regular-font"}>
            {description}
          </TypoGraphy>
        </Stack>
        <Stack>
          <TypoGraphy variant="h4" typeClass={"semi-bold-font"}>
            {state}
          </TypoGraphy>
          <TypoGraphy variant="body1" typeClass={"regular-font"}>
            {location}
          </TypoGraphy>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TwoColumn;
