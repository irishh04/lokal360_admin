import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6E5FDE",
      light: "#8b7ce4",
      dark: "#4d44d7",
    },
    secondary: {
      main: "#ffbb03",
      light: "#ffd14d",
      dark: "#ffae00",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#444444",
      contrastText: "#FFFFFF",
      eighty: "#444444CC",
      sixty: "#44444499",
      forty: "#44444466",
    },
    background: {
      paper: "#FFFFFF",
      default: "#F8F7FD",
    },
    divider: "#9D9D9D",
    buttonHover: "#757575",
    success: { main: "#198754" },
    warning: { main: "#ffc107" },
    danger: { main: "#dc3545", delete: "#AB3130" },

    //? Colors for promo type
    promo: { peso: "#F7B801", percent: "#F18701", freeShipping: "#6E5FDE" },

    //? Colors for status
    status: {
      pending: "#F35B04",
      preparing: "#F18701",
      pickUp: "#F7B801",
      delivery: "#7678ED",
      complete: "#7A9163",
      cancel: "#AB3130",
      refund: "#231F20",
    },

  
  },

  typography: {
    sectionTitle: {
      fontSize: "24px",
      fontWeight: 600,
      color: "#444",
      letterSpacing: -0.3,
    },
    sectionTitleSmall: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#444",
      lineHeight: "20px",
      letterSpacing: -0.3,
      textTransform: "none",
    },
    sectionSubtitle: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#444444CC",
    },
    seeAll: {
      fontSize: "16px",
      color: "#44444499",
      textTransform: "none",
    },
    bigBadge: {
      fontSize: 30,
    },
    status: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#444",
      lineHeight: "16px",
      letterSpacing: -0.3,
      textTransform: "none",
    },

    //for Vouchers
    voucherTitle: {
      fontSize: "26px",
      fontWeight: 600,
      letterSpacing: -0.3,
    },
    voucherTitleSmall: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: -0.3,
      textTransform: "none",
    },
    minSpend: {
      fontSize: "14px",
      textTransform: "none",
    },
    shopName: {
      fontSize: "14px",
      fontWeight: 600,
      textTransform: "none",
    },
  },

  components: {
    //? all box component sx
    box: {
      //? for Parent Box (Container) of every Page
      //* sx={{...theme.components.box.pageContainer}}
      pageContainer: {
        backgroundColor: "transparent",
        maxWidth: 2250,
        alignItems: "center",
        justifyContent: "center",
        pb: 5,
      },

      //? for the Box wrapper of the page's Main Content
      //* sx={{...theme.components.box.mainContent}}
      mainContent: {
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
      },

      //? for Box wrappers inside the Main Content
      //? sample usage: (left and right side boxes)
      //? contentRow & contentColumn (flex direction)
      //* sx={{...theme.components.box.contentRow}}
      //* sx={{...theme.components.box.contentColumn}}
      contentRow: {
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        flexWrap: "wrap",
      },
      contentColumn: {
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        flexWrap: "wrap",
      },

      //? for Boxes that wrap sections of the Main Contnet
      //? this includes the hover effects
      //* sx={{...theme.components.box.sectionContainer}}
      sectionContainer: {
        borderRadius: "10px",
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: "0px 2px 5px 0px rgba(110, 95, 222, 0.25)",
        transition: "background-color 0.3s, opacity 0.3s",
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        flexWrap: "wrap",
        padding: "20px",

        transform: "perspective(1px) translateZ(0)",
        transitionDuration: "0.3s",
        transitionProperty: "box-shadow",

        "&:hover, &:focus, &:active": {
          boxShadow: "0px 2px 5px 3px rgba(110, 95, 222, 0.25)",
        },
      },

      //? for Boxes that wrap section name
      //? withButton
      //* sx={{...theme.components.box.sectionName}}
      sectionName: {
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "baseline",
        justifyContent: "flex-start",
        "@media (max-width: 500px)": {
          gap: "8px",
        },
      },

      //? for Boxes that wrap graphs
      //* sx={{...theme.components.box.graphContainer}}
      graphContainer: {
        minWidth: "750px",
        "@media (max-width: 1516px)": {
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100%",
        },

        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: "0px 2px 5px 0px rgba(110, 95, 222, 0.25)",
        transition: "background-color 0.3s, opacity 0.3s",
        gap: "32px",
        flexWrap: "wrap",
        padding: "20px",
        transform: "perspective(1px) translateZ(0)",
        transitionDuration: "0.3s",
        transitionProperty: "box-shadow",

        "&:hover, &:focus, &:active": {
          boxShadow: "0px 2px 5px 3px rgba(110, 95, 222, 0.25)",
        },
      },

      //? for Boxes that wrap icons inside dataGrid
      //* sx={{...theme.components.box.iconContainer}}
      iconContainer: {
        borderRadius: 10,
        height: 35,
        width: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },

    dialog: {
      //? for all dialogTitles
      //* sx={{...theme.components.dialog.dialogTitle}}
      dialogTitle: {
        minHeight: 70,
        position: "sticky",
        borderBottom: `1px solid`,
        borderColor: (theme) => theme.palette.text.forty,
      },

      //? for proper spacing of dialog title content
      //* sx={{...theme.components.dialog.dialogTitleContent}}
      dialogTitleContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },

      //? for all dialogContents
      //* sx={{...theme.components.dialog.dialogContent}}
      dialogContent: {
        height: "75vh",
        backgroundColor: (theme) => theme.palette.background.paper,
        display: "flex",
        justifyContent: "center",
        "@media (max-width: 600px)": {
          height: "90vh",
        },
      },

      //? styles for buttom saveButton on sm screens
      //* sx={{...theme.components.dialog.saveButtonSmall}}
      saveButtonSmall: {
        position: "sticky",
        bottom: 0,
        backgroundColor: (theme) => theme.palette.background.paper,
        zIndex: 1,
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      },
    },
  },
});

export default theme;
