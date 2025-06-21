import React from "react";
import { Typography, Paper, Box } from "@mui/material";

export default function Dashboard() {
  return (
    <Box>
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Disaster Response Coordination Platform
        </Typography>
        <Typography variant="body1">
          Use the navigation bar to manage disasters, submit reports, view resources, monitor real-time updates, and verify images.
        </Typography>
      </Paper>
    </Box>
  );
}
