import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from "./components/Dashboard";
import DisasterForm from "./components/DisasterForm";
import DisasterList from "./components/DisasterList";
import MapView from "./components/MapView";
import SocialFeed from "./components/SocialFeed";
import ResourceLocator from "./components/ResourceLocator";
import ReportForm from "./components/ReportForm";
import OfficialUpdates from "./components/OfficialUpdates";
import VerificationStatus from "./components/VerificationStatus";
import NotificationBar from "./components/NotificationBar";
import { SocketProvider } from "./context/SocketContext";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Dashboard', to: '/' },
    { label: 'Disasters', to: '/disasters' },
    { label: 'Report Disaster', to: '/disasters/new' },
    { label: 'Map', to: '/map' },
    { label: 'Social Feed', to: '/social' },
    { label: 'Resources', to: '/resources' },
    { label: 'Report Form', to: '/reports' },
    { label: 'Official Updates', to: '/updates' },
    { label: 'Image Verification', to: '/verify' },
  ];

  return (
    <SocketProvider>
      <BrowserRouter>
        <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}>
              Disaster Response
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.to}
                      component={Link}
                      to={item.to}
                      onClick={handleMenuClose}
                      sx={{ fontWeight: 'medium' }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.to}
                    color="inherit"
                    component={Link}
                    to={item.to}
                    sx={{
                      fontWeight: 'medium',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 1,
                      },
                      textTransform: 'none',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <NotificationBar />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/disasters" element={<DisasterList />} />
            <Route path="/disasters/new" element={<DisasterForm />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/social" element={<SocialFeed />} />
            <Route path="/resources" element={<ResourceLocator />} />
            <Route path="/reports" element={<ReportForm />} />
            <Route path="/updates" element={<OfficialUpdates />} />
            <Route path="/verify" element={<VerificationStatus />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </SocketProvider>
  );
}
