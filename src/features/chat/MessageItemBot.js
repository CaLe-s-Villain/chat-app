import React from "react";
import { Stack, Avatar, Box } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ResponseText from "./ResponseText";

const chatBubbleStyles = {
  color: "primary.contrastText",
  borderRadius: 1,
  bgcolor: "primary.dark",
  p: 1,
};

const botAvatarStyles = { bgcolor: deepOrange[500] };

const MessageItemBot = ({ message }) => {
  return (
    <Stack direction={"row"} spacing={1}>
      <Avatar sx={botAvatarStyles}>WA</Avatar>
      <Box>
        <Box sx={chatBubbleStyles}>
          <ResponseText message={message} />
        </Box>
      </Box>
    </Stack>
  );
};

export default MessageItemBot;
