import React from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Divider,
} from "@mui/material";
import ButtonSave from "../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../components/Buttons/ButtonCloseDialog";
import theme from "../../../../../Theme";
import { useForm } from "react-hook-form";
import BasicShopInfoD from "./BasicShopInfoD";
import ShopAddressD from "./ShopAddressD";
import ContactInfoD from "./ContactInfoD";
import OperatingHoursD from "./OperatingHoursD";
import LogoAndHeaderD from "./LogoAndHeaderD";
import SelectColorD from "./SelectColorD";
import { useMediaQuery } from "@mui/material";

function EditShopInfoDialog({ open, handleClose, handleSave, shopData }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  //destructure shopData
  const {
    shopID,
    shopOwnerID,
    name,
    type,
    description,
    categoryID,
    shipping_deliver_enabled,
    shipping_pickup_enabled,
    address_city,
    address_country,
    address_district,
    address_iso_country_code,
    address_postal_code,
    address_region,
    address_street,
    address_street_no,
    phone_number,
    website_link,
    is_open_mon,
    is_open_tues,
    is_open_wed,
    is_open_thurs,
    is_open_fri,
    is_open_sat,
    is_open_sun,
    time_close,
    time_open,
    logo_img_link,
    header_img_link,
    custom_color_hex,
    custom_low_stock_lvl,
    sells_raw_mats,
    total_sales,
    no_of_products,
    no_of_followers,
    is_360_partner,
    createdAt,
    modifiedAt,
  } = shopData;

  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    trigger,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Form data
    handleSave();
    reset();
  };

  return (
    <div>
      <Dialog
        fullScreen={isSmScreen}
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        hideBackdrop={true}
        sx={{ backgroundColor: "#ECECEC80" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Dialog Title/ Buttons */}
          <DialogTitle
            minHeight={70}
            sx={{ ...theme.components.dialog.dialogTitle }}
          >
            <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
              {/* Dialog Title*/}
              <Typography variant="sectionTitle">
                Edit Shop Information
              </Typography>

              {/*  Buttons */}
              <DialogActions sx={{ gap: "16px" }}>
                <ButtonSave
                  type="submit"
                  isDirty={isDirty}
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                />
                <ButtonCloseDialog handleClose={handleClose} />
              </DialogActions>
            </Box>
          </DialogTitle>

          {/* Dialog Content */}
          <DialogContent sx={{ ...theme.components.dialog.dialogContent }}>
            {/*Main*/}
            <Stack spacing={2} sx={{ width: "600px" }}>
              {/*Basic Shop Info */}
              <Box sx={{ py: 5 }}>
                <BasicShopInfoD
                  control={control}
                  shopName={name}
                  category={categoryID}
                  type={type}
                  description={description}
                  deliver={shipping_deliver_enabled}
                  pickup={shipping_pickup_enabled}
                />
              </Box>

              <Divider />

              {/*Shop Address */}
              <Box sx={{ py: 5 }}>
                <ShopAddressD />
              </Box>

              <Divider />

              {/*Contact Information */}
              <Box sx={{ py: 5 }}>
                <ContactInfoD
                  control={control}
                  trigger={trigger}
                  phoneNum={phone_number}
                  website={website_link}
                />
              </Box>

              <Divider />

              {/*Operating Hours */}
              <Box sx={{ py: 5 }}>
                <OperatingHoursD
                  control={control}
                  mon={is_open_mon}
                  tues={is_open_tues}
                  wed={is_open_wed}
                  thurs={is_open_thurs}
                  fri={is_open_fri}
                  sat={is_open_sat}
                  sun={is_open_sun}
                  timeOpen={time_open}
                  timeClose={time_close}
                />
              </Box>

              <Divider />

              {/*Logo and Header */}
              <Box sx={{ py: 5 }}>
                <LogoAndHeaderD
                  control={control}
                  logo={logo_img_link}
                  header={header_img_link}
                />
              </Box>

              <Divider />

              {/*Select Color */}
              <Box sx={{ py: 5 }}>
                <SelectColorD
                  control={control}
                  color={custom_color_hex}
                  isPartner={is_360_partner}
                />
              </Box>
            </Stack>
          </DialogContent>

          {/* Show Save Button at Bottom for small screens */}
          <Box sx={{ ...theme.components.dialog.saveButtonSmall }}>
            <DialogActions sx={{ py: 2, display: "flex" }}>
              <ButtonSave type="submit" isDirty={isDirty} />
            </DialogActions>
          </Box>
        </form>
      </Dialog>
    </div>
  );
}

export default EditShopInfoDialog;
