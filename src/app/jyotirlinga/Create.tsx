"use client";

import CustomBtn from "@/components/common/Button";
import CustomDrawer from "@/components/common/Drawer";
import { Add } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import CreateModal from "./CreateModal";

interface Props {
  openDrawer?: boolean;
  setOpenDrawer: (openDrawer: boolean) => void;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  openSnack?: boolean;
  setOpenSnack: (openSnack: boolean) => void;
  errorSnack?: boolean;
  setErrorSnack: (openSnack: boolean) => void;
  setErrorVal: (errorVal: string) => void;
}

const Create: React.FC<Props> = ({
  openDrawer,
  setOpenDrawer,
  toggleDrawer,
  openSnack,
  setOpenSnack,
  errorSnack,
  setErrorSnack,
  setErrorVal,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    description: "",
    imgPath: "",
    location:""
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleChange = (e: React.KeyboardEvent | React.MouseEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    if (!formData.name) {
      setErrorSnack(!errorSnack);
      setErrorVal("Name");

      return;
    }
    if (!formData.state) {
      setErrorVal("State");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.description) {
      setErrorVal("Description");
      setErrorSnack(!errorSnack);
      return;
    }

    if (!formData.imgPath) {
      setErrorVal("Image Path");
      setErrorSnack(!errorSnack);
      return;
    }
    setOpenModal(true);
  };

  const handleCreate = async (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/jyotirling", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          state: formData.state,
          imgPath: formData.imgPath,
          description: formData.description,
          location:formData.location
        }),
      });

      if (response.status === 201) {
        setFormData({
          name: "",
          state: "",
          imgPath: "",
          description: "",
          location:""
        });
        setOpenDrawer(false);
        closeModal();
        setOpenSnack(!openSnack)
      }
    } catch (e) {
      closeModal();
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CustomDrawer
        openDrawer={openDrawer}
        anchor={"right"}
        toggleDrawer={toggleDrawer}
        drawerClass={"drawer right"}
        closeBtnClass={"close"}
        drawerTitle={"Add Jyotirling"}
        titleClass={"drawer-title"}
      >
        <Box className={"p-3"}>
          <Grid size={12} flexDirection={"column"}>
            <TextField
              fullWidth
              label="Jyotirling Name"
              variant="outlined"
              value={formData.name}
              onChange={(el: string) => handleChange(el)}
              name="name"
              className={"pb-2"}
            />
            <TextField
              fullWidth
              label="State"
              variant="outlined"
              value={formData.state}
              onChange={(el: string) => handleChange(el)}
              name="state"
              className={"pb-2"}
            />
            <TextField
              fullWidth
              label="Image"
              variant="outlined"
              value={formData.imgPath}
              onChange={(el: string) => handleChange(el)}
              name="imgPath"
              className={"pb-2"}
            />
            <TextField
              fullWidth
              label="Latitude, Longitude"
              variant="outlined"
              value={formData.location}
              onChange={(el: string) => handleChange(el)}
              name="location"
              className={"pb-2"}
            />
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              value={formData.description}
              onChange={(el: string) => handleChange(el)}
              name="description"
              multiline
              rows={5}
              className={"pb-2"}
            />
          </Grid>
          <Grid
            size={12}
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <CustomBtn
              startIcon={<Add />}
              text={"Submit"}
              btnClass={"primary-btn"}
              onClick={submitHandler}
            />
          </Grid>
        </Box>
      </CustomDrawer>
      <CreateModal
        openModal={openModal}
        handleCreate={handleCreate}
        closeModal={closeModal}
      />
    </>
  );
};

export default Create;
