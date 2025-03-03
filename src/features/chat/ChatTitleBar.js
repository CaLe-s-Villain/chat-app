import React from "react";
import { Box, Typography } from "@mui/material";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const chatTitleBarStyles = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "primary.dark",
  mt: 0,
};

const chatTitleTextStyles = { p: 2, flexGrow: 1, textAlign: "center" };

const ChatTitleBar = ({ toggleChat }) => {
  return (
    <Box sx={chatTitleBarStyles}>
      <Typography sx={chatTitleTextStyles} fontSize="large">
        Wealth Advisor
      </Typography>
      <IndeterminateCheckBoxIcon onClick={toggleChat} sx={{ mr: 2, mt: 2 }} />
    </Box>
  );
};

export default ChatTitleBar;
