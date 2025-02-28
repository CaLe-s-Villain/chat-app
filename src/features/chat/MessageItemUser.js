import React from "react";
import { Box, Typography } from "@mui/material";

const MessageItemUser = ({ message }) => {
  return (
    <Box>
      <Typography
        variant="caption"
        sx={{ display: "block", textAlign: "right", pr: 1 }}
      >
        You
      </Typography>
      <Box
        sx={{
          color: "secondary.contrastText",
          borderRadius: 1,
          bgcolor: "secondary.main",
          p: 1,
        }}
      >
        <Typography variant="body2">{message}</Typography>
      </Box>
    </Box>
  );
};

export default MessageItemUser;
