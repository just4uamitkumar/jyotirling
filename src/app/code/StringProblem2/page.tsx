"use client";
import TypoGraphy from "@/components/common/Typography";
import PageBanner from "@/components/shared/pageBanner";
import { Box, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CodeSidebar from "../sidebar";

const StringProblem2: React.FC = () => {

  return (
    <>
      <Grid size={12}>
        <PageBanner title={"Code"} />
        <Stack className="container">
          <Grid
            size={12}
            flexBasis={"row"}
            justifyContent={"space-between"}
            container
          >
            <Grid size={3} className="codeColumn">
              <CodeSidebar />
            </Grid>
            <Grid size={9} flexDirection={"column"}>
              <Box className="p-3">
                <TypoGraphy variant="h1" component={"h1"}>
                  {"String Problem 2"}
                </TypoGraphy>
              </Box>
              <Divider />
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default StringProblem2;
