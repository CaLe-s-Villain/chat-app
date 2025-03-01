import React from "react";
import { Stack, Avatar, Box } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ResponseText from "./ResponseText";

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
          <ResponseText message={message} />
        </Box>
      </Box>
    </Stack>
  );
};

export default MessageItemBot;
