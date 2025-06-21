import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
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
  return (
    <SocketProvider>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Dashboard</Button>
            <Button color="inherit" component={Link} to="/disasters">Disasters</Button>
            <Button color="inherit" component={Link} to="/disasters/new">Report Disaster</Button>
            <Button color="inherit" component={Link} to="/map">Map</Button>
            <Button color="inherit" component={Link} to="/social">Social Feed</Button>
            <Button color="inherit" component={Link} to="/resources">Resources</Button>
            <Button color="inherit" component={Link} to="/reports">Report Form</Button>
            <Button color="inherit" component={Link} to="/updates">Official Updates</Button>
            <Button color="inherit" component={Link} to="/verify">Image Verification</Button>
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
