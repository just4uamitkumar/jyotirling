"use client";

import PageBanner from "@/components/shared/pageBanner";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { data } from "./data.json";
import { Stack } from "@mui/material";
import TwoColumn from "@/components/shared/content/TwoColumn";

const Jyotirlinga: React.FC = () => {
  const [shivData, setShivData] = useState<unknown[]>([]);

  useEffect(() => {
    if (data) {
      setShivData(data);
    }
  }, []);

  return (
    <>
      <Grid size={12}>
        <PageBanner title={"Jyotirlinga"} />
        
        <Stack className="container">
          {shivData &&
            shivData?.map((item) => (
              <TwoColumn
                key={item?.id}
                title={item?.title}
                description={item?.description}
                state={item?.state}
                imagePath={item?.imgPath}
                imgHeight={350}
                imgWidth={350}
              />
            ))}
        </Stack>
       
      </Grid>
    </>
  );
};

export default Jyotirlinga;
