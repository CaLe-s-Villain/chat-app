import React from "react";
import { Stack, Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

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

const TextMessageItem = ({ message, isUser, key }) => {
  return (
    <Box
      key={key}
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "10px",
      }}
    >
      <Stack direction={"row"} spacing={1}>
        {!isUser && <Avatar sx={botAvatarStyles}>WA</Avatar>}
        <Box>
          {isUser ? (
            <Typography sx={{ textAlign: "right" }}>You</Typography>
          ) : (
            ""
          )}
          <Box sx={isUser ? userBubbleStyles : botBubbleStyles}>
            <Typography variant="body2">{message}</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default TextMessageItem;
