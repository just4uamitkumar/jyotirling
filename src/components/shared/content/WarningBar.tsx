import CustomBtn from "@/components/common/Button";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface Props {
  firstText?: string;
  secondText?: string;
  lastText?: string;
  isBtn?: boolean;
  btnClick?:(event: React.KeyboardEvent | React.MouseEvent) => void;
  btnText?:string
  btnClass?:string
  variant?: "text" | "outlined" | "contained";
}

const WarningBar: React.FC<Props> = ({
  firstText,
  secondText,
  lastText,
  isBtn,
  btnClick,
  btnText,
  btnClass,
  variant
}) => {
  return (
    <Grid size={12} className="warningBar">
      <Stack className="container py-5">
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"row"}
        >
          <Stack>{firstText}</Stack>
          <Stack>{secondText}</Stack>
          <Stack className="text-right">
            {!isBtn ? (
              lastText
            ) : (
              <CustomBtn
                variant={variant}
                text={btnText}
                btnClass={btnClass}
                onClick={btnClick}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default WarningBar;
