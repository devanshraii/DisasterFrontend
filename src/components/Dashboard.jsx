import React from "react";
import { Typography, Paper, Box, Stack, Fade, Chip } from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function Dashboard() {
  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          minHeight: 340,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
          borderRadius: 4,
          mb: 5,
          boxShadow: 6,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            background: "rgba(255,255,255,0.90)",
            borderRadius: 4,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Box>
              <EmojiObjectsIcon sx={{ fontSize: 48, color: "#43cea2" }} />
              <PublicIcon sx={{ fontSize: 48, color: "#185a9d", ml: -2 }} />
              <VerifiedUserIcon sx={{ fontSize: 48, color: "#ffd700", ml: -2 }} />
            </Box>
            <Typography variant="h3" fontWeight={700} color="primary" gutterBottom>
              Disaster Response Coordination Platform
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Use the navigation bar to manage disasters, submit reports, view resources, monitor real-time updates, and verify images.
            </Typography>
            <Chip
              label="Made by Devansh Rai"
              color="success"
              sx={{
                mt: 2,
                fontWeight: 600,
                fontSize: 16,
                px: 2,
                py: 1,
                background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                color: "#fff",
                boxShadow: 2,
                letterSpacing: 1,
              }}
            />
          </Stack>
        </Paper>
      </Box>
    </Fade>
  );
}
