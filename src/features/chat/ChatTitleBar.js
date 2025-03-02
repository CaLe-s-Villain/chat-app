import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const chatTitleBatStyles = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "primary.dark",
  mt: 0,
};

const ChatTitleBar = ({ toggleChat }) => {
  return (
    <Box sx={chatTitleBatStyles}>
      <Typography sx={{ p: 2 }}>Wealth Advisor</Typography>
      <CloseIcon onClick={toggleChat} sx={{ mr: 2, mt: 2 }} />
    </Box>
  );
};

export default ChatTitleBar;
