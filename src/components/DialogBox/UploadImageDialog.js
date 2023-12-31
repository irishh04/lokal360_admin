import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import ButtonCloseDialog from "../Buttons/ButtonCloseDialog";
import theme from "../../Theme";
import { Image } from "@mui/icons-material";
import ButtonSave from "../Buttons/ButtonSave";
import CustomImage from "../FormComponents/CustomImage";

function UploadImageDialog({
  open,
  handleClose,
  alt,
  name,
  label,
  isSmScreen,
}) {
  const [uploadError, setUploadError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageDirty, setIsImageDirty] = useState(false);

  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    setValue,
    reset,
    register,
  } = useForm();

  const bgColor = `${theme.palette.background.paper}`;
  const textColor = `${theme.palette.primary.main}`;

  // Handle image change
  const handleImageChange = (e) => {
    setUploadError(false);
    setSelectedImage(null);
    setIsImageDirty(false);
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 2 * 1024 * 1024) {
      // 2MB in bytes
      setSelectedImage(URL.createObjectURL(selectedFile));
    } else {
      setUploadError(true);
    }
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
    setUploadError(false);
    setIsImageDirty(false);
    handleClose();
  };

  useEffect(() => {
    if (selectedImage !== null) {
      setIsImageDirty(true);
    } else {
      setIsImageDirty(false);
    }
  }, [selectedImage]);

  const onSubmitImage = (data) => {
    data[name] = selectedImage;
    console.log(data); // Form data
    reset();
  };

  return (
    <Dialog
      fullScreen={isSmScreen}
      fullWidth={true}
      maxWidth={"sm"}
      open={open}
      onClose={handleClose}
      hideBackdrop={true}
      sx={{
        backgroundColor: "#ECECEC80",
      }}
    >
      <form onSubmit={handleSubmit(onSubmitImage)}>
        {/* Dialog Title/ Buttons */}
        <DialogTitle
          minHeight={70}
          sx={{ ...theme.components.dialog.dialogTitle }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Dialog Title*/}
            <Typography variant="sectionTitle">
              {label || "Upload Image"}
            </Typography>

            {/*  Close Button */}
            <DialogActions sx={{ gap: "16px" }}>
              <ButtonCloseDialog handleClose={handleCloseDialog} />
            </DialogActions>
          </Box>
        </DialogTitle>

        {/* Dialog Content*/}
        <DialogContent sx={{ ...theme.components.dialog.dialogContent }}>
          <Box sx={{ py: 5, width: "100%" }}>
            <Button
              variant="outlined"
              component="label"
              sx={{ ...classes.uploadImageButton }}
            >
              <input
                type="file"
                hidden
                accept="image/*"
                {...register("image")}
                onChange={handleImageChange}
              />
              <Image />
              <Typography
                variant="sectionTitleSmall"
                color="inherit" // Change text color for invalid hex
              >
                Upload Image
              </Typography>
            </Button>
            {/*Display error message */}
            {uploadError && (
              <Alert severity="warning">
                <AlertTitle>Upload Warning:</AlertTitle>
                No Image Uploaded or <strong>2mb Maximum File Size </strong>is
                Exceeded
              </Alert>
            )}
            {/*Display Uploaded Image */}
            <Stack spacing={1} sx={{ ...classes.displayUploadedImage }}>
              <Typography
                variant="sectionTitleSmall"
                color="inherit"
                sx={{ ...classes.selectedImageTypography }}
              >
                {uploadError || selectedImage === null
                  ? ""
                  : "    Image Preview"}
              </Typography>

              {selectedImage && (
                <Box sx={{ ...classes.customImageContainer }}>
                  <CustomImage
                    control={control}
                    name={name}
                    selectedImage={selectedImage}
                    alt={alt}
                  />
                </Box>
              )}
            </Stack>
            <ButtonSave
              type="submit"
              isDirty={isImageDirty}
              btnSx={{ width: "100%", height: 50, mb: 5 }}
            />
          </Box>
        </DialogContent>
      </form>
    </Dialog>
  );
}

function UploadImage({ alt, name, control, register, setValue }) {
  const [uploadError, setUploadError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageDirty, setIsImageDirty] = useState(false);

  const bgColor = `${theme.palette.background.paper}`;
  const textColor = `${theme.palette.primary.main}`;

  // Handle image change
  const handleImageChange = (e) => {
    setUploadError(false);
    setSelectedImage(null);
    setIsImageDirty(false);
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 2 * 1024 * 1024) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
      setValue("productThumbnail", imageUrl);
    } else {
      setUploadError(true);
    }
  };
  // Use useEffect to observe selectedImage changes and update the form field
  useEffect(() => {
    if (selectedImage !== null) {
      setValue("productThumbnail", selectedImage);
    }
  }, [selectedImage, setValue]);

  return (
    <Box sx={{ py: 5, width: "100%" }}>
      <Button
        variant="outlined"
        component="label"
        sx={{ ...classes.uploadImageButton }}
      >
        <input
          type="file"
          hidden
          accept="image/*"
          {...register("productThumbnail")}
          onChange={handleImageChange}
        />
        <Image />
        <Typography
          variant="sectionTitleSmall"
          color="inherit" // Change text color for invalid hex
        >
          Upload Image
        </Typography>
      </Button>
      {/*Display error message */}
      {uploadError && (
        <Alert severity="warning">
          <AlertTitle>Upload Warning:</AlertTitle>
          No Image Uploaded or <strong>2mb Maximum File Size </strong>is
          Exceeded
        </Alert>
      )}
      {/*Display Uploaded Image */}
      <Stack spacing={1} sx={{ ...classes.displayUploadedImage }}>
        <Typography
          variant="sectionTitleSmall"
          color="inherit"
          sx={{ ...classes.selectedImageTypography }}
        >
          {uploadError || selectedImage === null ? "" : "    Image Preview"}
        </Typography>

        {selectedImage && (
          <Box sx={{ ...classes.customImageContainer }}>
            <CustomImage
              control={control}
              name={name}
              selectedImage={selectedImage}
              alt={alt}
            />
          </Box>
        )}
      </Stack>
    </Box>
  );
}

const classes = {
  uploadImageButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100px",
    marginBottom: "10px",
    cursor: "pointer",
    border: "solid",
    borderStyle: "dashed",
    borderWidth: 2,
    transition: "background-color 0.3s",
  },
  displayUploadedImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: 5,
  },
  selectedImageTypography: {
    display: "flex",
    alignItems: "start",
  },
  customImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 300,
    maxWidth: "100%",
  },
};

export { UploadImageDialog, UploadImage };
