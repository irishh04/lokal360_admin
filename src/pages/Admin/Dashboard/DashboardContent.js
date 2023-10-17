import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import StatisticsBoxes from "./AnalyticsComponents/StatisticsBoxes";
import theme from "../../../Theme";
import userData from "../../../data/userData";
import { Avatar, IconButton, Typography } from "@mui/material";
import DataGridCustomers from '../Reports/CustomersShopComponents/DataGridCustomers'
import MyCustomers from '../Reports/CustomersShopComponents/MyCustomers'
import ShopGrid from '../ShopsManagement/ShopsManagementComponent/ShopGrid'
import MyPromos from '../Category/PromosShopComponents/MyPromos'
import { CenterFocusStrong } from "@mui/icons-material";

function DashboardContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent PageName={"Admin"} Subtitle={"Welcome, Admin 1"} />

      {/* Page Content */}
      <Box sx={{ ...theme.components.box.mainContent, justifyContent: "start" }}>
        {/* Statistics Boxes Section */}
        <StatisticsBoxes />
        {/* Include the DataGridCustomers component here */}
        <Box direction={"row"} sx={{ ...classes.sectionName }}>
        </Box>

          <Box sx={{ ...classes.customersContainer }}>
            <Box direction={"row"} sx={{ ...classes.sectionName }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'justify',
                gap: '12rem'
            }}>
                <Typography variant="sectionTitle">Shop Approval Requests
                </Typography>
                <Typography variant="h5">See All</Typography>
              </Box>
              {/*TODO: Add onClick for Button */}
            </Box>
          </Box>
          
          <Box sx={{ ...classes.customersContainer }}>
            <Box direction={"row"} sx={{ ...classes.sectionName }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'justify',
                gap: '13.3rem',
            }}>
                <Typography variant="sectionTitle">Pending User Reports
                </Typography>
                <Typography variant="h5">See All</Typography>
              </Box>
              {/*TODO: Add onClick for Button */}
            </Box>
          </Box>

          <Box sx={{ ...classes.customersContainer }}>
            <Box direction={"row"} sx={{ ...classes.sectionName }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'justify',
                gap: '18.8rem'
            }}>
                <Typography variant="sectionTitle">Top Categories
                </Typography>
                <Typography variant="h5">See All</Typography>
              </Box>
              {/*TODO: Add onClick for Button */}
            </Box>
          </Box>
          
          <Box sx={{ ...classes.customersContainer }}>
            <Box direction={"row"} sx={{ ...classes.sectionName }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'justify',
                gap: '8rem'
            }}>
                <Typography variant="sectionTitle">Lokal Ads Approval Requests
                </Typography>
                <Typography variant="h5">See All</Typography>
              </Box>
              {/*TODO: Add onClick for Button */}
            </Box>
          </Box>
                        
      </Box>
    </Box>
  );
}


const classes = {
  leftContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  customersContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "600px",
    "@media (max-width: 912px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};

export default DashboardContent;
