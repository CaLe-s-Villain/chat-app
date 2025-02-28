import React from "react";
import { Stack, Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const MessageItemBot = ({ message }) => {
  return (
    <Stack direction={"row"} spacing={1}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>WA</Avatar>
      <Box>
        <Box
          sx={{
            color: "primary.contrastText",
            borderRadius: 1,
            bgcolor: "primary.dark",
            p: 1,
          }}
        >
          <Typography variant="body2">{message}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default MessageItemBot;
