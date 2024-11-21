"use client";
import TypoGraphy from "@/components/common/Typography";
import { Box, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DevSidebar from "../devSidebar";
import PageBanner from "@/components/shared/pageBanner";
import { useEffect, useState } from "react";

const Debouncing: React.FC = () => {
  const [pinCode, setPinCode] = useState<number>();

  useEffect(() => {
    const getData = setTimeout(() => {
      fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
      .then((response) =>  response.json()).
      then((data) => console.log(data));
    }, 2000)

    return () => clearTimeout(getData)
  }, [pinCode]);



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
                  {"Debouncing"}
                </TypoGraphy>

                <Grid size={6}>
                  <TextField
                    fullWidth
                    label="Type Here...."
                    variant="outlined"
                    value={pinCode}
                    onChange={(event: React.KeyboardEvent | React.MouseEvent) =>
                      setPinCode(event?.target?.value)
                    }
                    name="debounce"
                    className={"pb-2"}
                  />
                </Grid>
                <Stack className="search-data">{pinCode}</Stack>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default Debouncing;
