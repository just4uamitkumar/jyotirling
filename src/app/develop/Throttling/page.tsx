"use client";
import TypoGraphy from "@/components/common/Typography";
import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DevSidebar from "../devSidebar";
import PageBanner from "@/components/shared/pageBanner";
import useThrottle from "@/customHook/useThrottle";
import CustomBtn from "@/components/common/Button";
import { Add } from "@mui/icons-material";

const Throttling: React.FC = () => {
  const fetchData = async () => {
    const resp = await fetch("http://localhost:8000/data");
    return resp.json();
  };
  const handleClick = () => {
    fetchData().then((data) => {
      console.log(data);
    });
  };

  const handleClickThrottled = useThrottle(handleClick, 1000);

  return (
    <>
      <Grid size={12}>
        <PageBanner title={"Develop"} />
        <Stack className="container">
          <Grid
            size={12}
            flexBasis={"row"}
            justifyContent={"space-between"}
            container
          >
            <Grid size={3} className="codeColumn">
              <DevSidebar />
            </Grid>
            <Grid size={9} flexDirection={"column"}>
              <Box className="p-3">
                <TypoGraphy variant="h1" component={"h1"}>
                  {"Throttling"}
                </TypoGraphy>

                <Grid size={6}>
                  <CustomBtn
                    startIcon={<Add />}
                    text={"Check Throttling"}
                    btnClass={"primary-btn"}
                    onClick={handleClickThrottled}
                  />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default Throttling;
