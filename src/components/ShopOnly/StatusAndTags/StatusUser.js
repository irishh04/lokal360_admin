import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../../Theme";

function  StatusUser({ status }) {
  const [colorType, setColorType] = useState("");

  useEffect(() => {
    if (status === "Banned") {
      setColorType("primary");
    } else if (status === "Regular") {
      setColorType("danger");
    } else {
      setColorType("text");
    }
  }, [status]);

  const color = colorType ? theme.palette[colorType].main : "inherit";
  return (
    <Box
      sx={{
        minWidth: 100,
        p: 0.5,
        backgroundColor: color,
        borderRadius: 5,
      }}
    >
      <Typography variant="status" color="#fff">
        {status}
      </Typography>
    </Box>
  );
}

export default StatusUser;
