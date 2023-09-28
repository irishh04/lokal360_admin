import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import StatisticsBoxes from "./AnalyticsComponents/StatisticsBoxes";
import theme from "../../../Theme";


function DashboardContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Admin"}
        Subtitle={"Welcome, Admin 1"}
      />

      {/*Page Content */}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*Statistics Boxes Section*/}
        <Box sx={{ ...classes.statisticsBoxContainer }}>
          <StatisticsBoxes />
        </Box>

      </Box>
    </Box>
  );
}

const classes = {
  statisticsBoxContainer: {
    minWidth: "1120px",
    order: 1,
    "@media (max-width: 1516px)": {
      order: 1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  leftContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  rightContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1516px)": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  dateTimeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexWrap: "wrap",
    "@media (max-width: 1189px)": {
      flexDirection: "row",
      gap: "16px",
      minWidth: "30%",
    },
  },

  topProducts: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "60%",
    },
    "@media (max-width: 1020px)": {
      minWidth: "100%",
    },
  },

  soldPerCategory: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default DashboardContent;
