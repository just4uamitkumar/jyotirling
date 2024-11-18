"use client";

import PageBanner from "@/components/shared/pageBanner";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { Alert, Snackbar, Stack } from "@mui/material";
import Create from "./Create";
import { Warning, CheckCircle } from "@mui/icons-material";
import TypoGraphy from "@/components/common/Typography";
import { jyotirlingType } from "./type";
import InfoTile from "@/components/shared/content/InfoTile";
import WarningBar from "@/components/shared/content/WarningBar";

const Jyotirlinga: React.FC = () => {
  const [shivData, setShivData] = useState<jyotirlingType[]>([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [errorSnack, setErrorSnack] = useState<boolean>(false);
  const [errorVal, setErrorVal] = useState<string>("");

  useEffect(() => {
    getData();
  }, []);

  const handleSnackClose = () => {
    setOpenSnack(false);
  };

  const handleSnackErrorClose = () => {
    setErrorSnack(false);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(open);
    };

  const getData = async () => {
    const response = await fetch("/api/jyotirling");
    const data = await response.json();
    setShivData(data.data);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch("/api/jyotirling", {
        method: "Delete",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id
        }),
      });

      console.log("response", response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = (id: string) => {
    console.log(id);
  };

  return (
    <>
      <Grid size={12}>
        <PageBanner title={"Jyotirlinga"} />
        <WarningBar
          firstText={"Add New Jyotirling"}
          secondText={""}
          isBtn={true}
          variant={"outlined"}
          btnClass={"secondary-btn"}
          btnClick={toggleDrawer(true)}
          btnText={"Add New"}
        />

        <Grid size={12} className={"p-3"}>
          <Stack className="container">
            {shivData &&
              shivData?.map((item) => (
                <InfoTile
                  key={item?._id}
                  title={item?.name}
                  description={item?.description}
                  state={item?.state}
                  latitude={item && Number(item?.location?.split(",")[0])}
                  longitude={item && Number(item?.location?.split(",")[1])}
                  imagePath={item?.imgPath}
                  deleteHandler={() => handleDelete(item?._id)}
                  editHandler={() => handleEdit(item)}
                  imgHeight={350}
                  imgWidth={350}
                />
              ))}
          </Stack>
        </Grid>
      </Grid>
      <Create
        openDrawer={openDrawer}
        toggleDrawer={toggleDrawer}
        setOpenDrawer={setOpenDrawer}
        openSnack={openSnack}
        setOpenSnack={setOpenSnack}
        errorSnack={errorSnack}
        setErrorSnack={setErrorSnack}
        setErrorVal={setErrorVal}
      />

      {/* Snack bar for Success Message */}
      <Snackbar
        open={openSnack}
        autoHideDuration={2000}
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar success"
      >
        <Alert
          icon={<CheckCircle />}
          onClose={handleSnackClose}
          severity="success"
          variant="filled"
        >
          <TypoGraphy typeClass={"regular-font"} variant={"h4"}>
            {"Success! Data added"}
          </TypoGraphy>
        </Alert>
      </Snackbar>

      {/* Snack bar for Form Error */}
      <Snackbar
        open={errorSnack}
        autoHideDuration={2000}
        onClose={handleSnackErrorClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar error"
      >
        <Alert
          icon={<Warning />}
          onClose={handleSnackErrorClose}
          severity="error"
          variant="filled"
        >
          <TypoGraphy variant={"h4"} typeClass={"regular-font"}>
            {`Please enter the ${errorVal}.`}
          </TypoGraphy>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Jyotirlinga;
