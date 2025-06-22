import React from "react";
import {
  Typography, Paper, Box, Stack, Fade, Chip, Grid, Table, TableBody, TableCell, TableHead, TableRow, useTheme, useMediaQuery, List, ListItem, ListItemText, Card, CardContent
} from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Mock analytics and update data
const analytics_data = {
  total_disasters: 42,
  active_disasters: 7,
  resolved_disasters: 35,
  disaster_types: [
    { name: "Flood", value: 15 },
    { name: "Earthquake", value: 10 },
    { name: "Cyclone", value: 8 },
    { name: "Fire", value: 9 }
  ],
  recent_reports: [
    { title: "Flood in Mumbai", date: "2025-06-20", status: "Active" },
    { title: "Earthquake in Kathmandu", date: "2025-06-18", status: "Resolved" },
    { title: "Cyclone in Odisha", date: "2025-06-15", status: "Active" }
  ],
  social_media_summary: { urgent: 12, normal: 30, high: 8 }
};

const topOfficialUpdates = [
  { title: "Flood Relief Operations Intensified in Mumbai", agency: "NDRF", date: "2025-06-20" },
  { title: "FEMA Declares Emergency for New York Flooding", agency: "FEMA", date: "2025-06-18" },
  { title: "Red Cross Sets Up Shelters in Kathmandu", agency: "Red Cross", date: "2025-06-15" }
];

// Multiple top tweets
const topTweets = [
  {
    user: "Amit Patel",
    post: "SOS: Trapped in apartment, water rising fast! #floodrelief",
    priority: "urgent",
    time: "2025-06-20 09:14"
  },
  {
    user: "Emily Johnson",
    post: "Evacuation ongoing in Brooklyn, stay safe everyone!",
    priority: "high",
    time: "2025-06-21 14:30"
  },
  {
    user: "Rahul Sinha",
    post: "Medical supplies needed urgently at relief camp.",
    priority: "urgent",
    time: "2025-06-21 16:45"
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          minHeight: 500,
          p: { xs: 1, md: 4 },
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
            p: { xs: 2, md: 4 },
            background: "rgba(255,255,255,0.97)",
            borderRadius: 4,
            maxWidth: 1200,
            margin: 'auto',
            color: '#000'
          }}
        >
          <Stack spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Box>
              <EmojiObjectsIcon sx={{ fontSize: 44, color: "#43cea2" }} />
              <PublicIcon sx={{ fontSize: 44, color: "#185a9d", ml: -2 }} />
              <VerifiedUserIcon sx={{ fontSize: 44, color: "#ffd700", ml: -2 }} />
            </Box>
            <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
              Disaster Response Coordination Platform
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center">
              Real-time analytics, resource tracking, and social signal monitoring for disaster management.
            </Typography>
          </Stack>

          {/* Summary Cards Row */}
          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e0f7fa', borderRadius: 2 }}>
                <Typography variant="subtitle2" color="#00796b">Total Disasters</Typography>
                <Typography variant="h4" fontWeight={700} color="#004d40">{analytics_data.total_disasters}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#fff3e0', borderRadius: 2 }}>
                <Typography variant="subtitle2" color="#ef6c00">Active</Typography>
                <Typography variant="h4" fontWeight={700} color="#e65100">{analytics_data.active_disasters}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e8f5e9', borderRadius: 2 }}>
                <Typography variant="subtitle2" color="#2e7d32">Resolved</Typography>
                <Typography variant="h4" fontWeight={700} color="#1b5e20">{analytics_data.resolved_disasters}</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Main Analytics Row */}
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {/* Pie Chart */}
            <Grid item xs={12} md={4}>
              <Box sx={{ width: '100%', height: isMobile ? 220 : 280 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Disaster Types Distribution
                </Typography>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analytics_data.disaster_types}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={isMobile ? 70 : 100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {analytics_data.disaster_types.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Grid>
            {/* Recent Reports Table */}
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" gutterBottom>
                Recent Disaster Reports
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {analytics_data.recent_reports.map((report, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{report.title}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={report.status}
                          color={report.status === "Active" ? "warning" : "success"}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
            {/* Official Updates */}
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" gutterBottom>
                Top Official Updates
              </Typography>
              <List dense>
                {topOfficialUpdates.map((u, i) => (
                  <ListItem key={i} sx={{ px: 0 }}>
                    <ListItemText
                      primary={u.title}
                      secondary={`${u.agency} • ${u.date}`}
                      primaryTypographyProps={{ fontWeight: 500, fontSize: 15 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          {/* Social Media & Top Tweets Row */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={8}>
              <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2
              }}>
                <Chip
                  label={`Urgent: ${analytics_data.social_media_summary.urgent}`}
                  color="error"
                  sx={{ fontWeight: 600, fontSize: 15, px: 2, py: 1 }}
                />
                <Chip
                  label={`High: ${analytics_data.social_media_summary.high}`}
                  color="warning"
                  sx={{ fontWeight: 600, fontSize: 15, px: 2, py: 1 }}
                />
                <Chip
                  label={`Normal: ${analytics_data.social_media_summary.normal}`}
                  color="info"
                  sx={{ fontWeight: 600, fontSize: 15, px: 2, py: 1 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" gutterBottom>
                Top User Tweets
              </Typography>
              <Stack spacing={2}>
                {topTweets.map((tweet, idx) => (
                  <Card
                    key={idx}
                    sx={{
                      background: "linear-gradient(90deg, #fceabb 0%, #f8b500 100%)",
                      color: "#333",
                      boxShadow: 3,
                    }}
                  >
                    <CardContent>
                      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                        "{tweet.post}"
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip
                          label={tweet.user}
                          color="primary"
                          size="small"
                          sx={{ fontWeight: 600 }}
                        />
                        <Chip
                          label={tweet.priority}
                          color={tweet.priority === "urgent" ? "error" : tweet.priority === "high" ? "warning" : "info"}
                          size="small"
                        />
                        <Typography variant="caption" sx={{ ml: 1 }}>
                          {tweet.time}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Chip
              label="Made by Devansh Rai"
              color="success"
              sx={{
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
