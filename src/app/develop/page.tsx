"use client";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/material";
import PageBanner from "@/components/shared/pageBanner";
import DevSidebar from "./devSidebar";
import TypoGraphy from "@/components/common/Typography";
import "./style.scss";

const Develop: React.FC = () => {
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
                  {"Complex Coding Problems"}
                </TypoGraphy>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default Develop;
