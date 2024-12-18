"use client";
import TypoGraphy from "@/components/common/Typography";
import PageBanner from "@/components/shared/pageBanner";
import { Box, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import CodeSidebar from "../sidebar";

const NumberProblem1: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  useEffect(() => {
    const myNum: number = 1234;
    setNum1(reverseNum(myNum));

    const myArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    setNum2(addAllNum(myArr));
    console.log(addAllNum(myArr));
  }, []);

  //Reverse a number
  const reverseNum = (num: number): number => {
    let rev = 0;
    while (num > 0) {
      const rem: number = num % 10;
      rev = rev * 10 + rem;
      num = Math.floor(num / 10);
    }
    return rev;
  };

  //Add All numbers
  const addAllNum = (arr: number[]): number => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  };

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
                  {"Number Problem 1"}
                </TypoGraphy>
              </Box>
              <Divider />
              <Box className="p-3">
                <Grid size={12} className={"pb-3"}>
                  <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
                    {"Show Reverse Number"}
                  </TypoGraphy>
                  <Stack>{num1}</Stack>
                </Grid>
                <Grid size={12} className={"pb-3"}>
                  <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
                    {"Add all numbers in array"}
                  </TypoGraphy>
                  <Stack>{num2}</Stack>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default NumberProblem1;
