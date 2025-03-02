import React from "react";
import { Box, Typography } from "@mui/material";

const chatBubbleStyles = {
  color: "secondary.contrastText",
  borderRadius: 1,
  bgcolor: "secondary.main",
  p: 1,
};

const userTextStyles = { display: "block", textAlign: "right", pr: 1 };

const MessageItemUser = ({ message }) => {
  return (
    <Box>
      <Typography variant="caption" sx={userTextStyles}>
        You
      </Typography>
      <Box sx={chatBubbleStyles}>
        <Typography variant="body2">{message}</Typography>
      </Box>
    </Box>
  );
};

export default MessageItemUser;
