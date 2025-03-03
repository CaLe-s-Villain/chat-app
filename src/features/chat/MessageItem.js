import React from "react";
import { Stack, Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ResponseText from "./ResponseText";

const botBubbleStyles = {
  color: "primary.contrastText",
  borderRadius: 1,
  bgcolor: "primary.dark",
  p: 1,
};

const userBubbleStyles = {
  color: "secondary.contrastText",
  borderRadius: 1,
  bgcolor: "secondary.main",
  p: 1,
};

const botAvatarStyles = { bgcolor: deepOrange[500] };

const MessageItem = ({ message, isUser }) => {
  return (
    <Stack direction={"row"} spacing={1}>
      {!isUser && <Avatar sx={botAvatarStyles}>WA</Avatar>}
      <Box>
        <Box sx={isUser ? userBubbleStyles : botBubbleStyles}>
          <ResponseText message={message} />
        </Box>
      </Box>
    </Stack>
  );
};

export default MessageItem;
