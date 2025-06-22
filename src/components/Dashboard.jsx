import React from "react";
import { Typography, Paper, Box, Stack, Fade, Chip, Grid } from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
  { name: 'Flood', value: 10 },
  { name: 'Earthquake', value: 5 },
  { name: 'Cyclone', value: 7 },
  { name: 'Fire', value: 3 },
];

export default function Dashboard() {
  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          minHeight: 400,
          p: { xs: 2, md: 4 },
          background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
          borderRadius: 4,
          mb: 5,
          boxShadow: 6,
          color: '#fff'
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            background: "rgba(255,255,255,0.95)",
            borderRadius: 4,
            maxWidth: 900,
            margin: 'auto',
            color: '#000'
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Box>
              <EmojiObjectsIcon sx={{ fontSize: 48, color: "#43cea2" }} />
              <PublicIcon sx={{ fontSize: 48, color: "#185a9d", ml: -2 }} />
              <VerifiedUserIcon sx={{ fontSize: 48, color: "#ffd700", ml: -2 }} />
            </Box>
            <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
              Disaster Response Coordination Platform
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center">
              Use the navigation bar to manage disasters, submit reports, view resources, monitor real-time updates, and verify images.
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2, width: '100%' }}>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e0f7fa', borderRadius: 2 }}>
                  <Typography variant="h6" color="#00796b">Total Disasters</Typography>
                  <Typography variant="h3" fontWeight={700} color="#004d40">25</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#fff3e0', borderRadius: 2 }}>
                  <Typography variant="h6" color="#ef6c00">Active Disasters</Typography>
                  <Typography variant="h3" fontWeight={700} color="#e65100">5</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e8f5e9', borderRadius: 2 }}>
                  <Typography variant="h6" color="#2e7d32">Resolved Disasters</Typography>
                  <Typography variant="h3" fontWeight={700} color="#1b5e20">20</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ width: '100%', height: 300, mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Disaster Types Distribution
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
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
