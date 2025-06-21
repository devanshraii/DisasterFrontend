import React, { useEffect, useState, useContext } from "react";
import { Slide, Snackbar, Box, Typography } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { SocketContext } from "../context/SocketContext"; // adjust import path as needed

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

const notificationStyles = {
  background: "linear-gradient(90deg, #0f2027 0%, #2c5364 100%)",
  color: "#fff",
  boxShadow: "0 4px 24px rgba(44,83,100,0.2)",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  gap: 1,
  px: 2,
  py: 1.5,
};

export default function NotificationBar() {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!socket) return;
    const onDisaster = () => {
      setMessage("🌊 Disaster data updated!");
      setOpen(true);
    };
    const onSocial = () => {
      setMessage("🔔 New social media reports!");
      setOpen(true);
    };
    const onResources = () => {
      setMessage("🗺️ Resource data updated!");
      setOpen(true);
    };
    socket.on("disaster_updated", onDisaster);
    socket.on("social_media_updated", onSocial);
    socket.on("resources_updated", onResources);
    return () => {
      socket.off("disaster_updated", onDisaster);
      socket.off("social_media_updated", onSocial);
      socket.off("resources_updated", onResources);
    };
  }, [socket]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={() => setOpen(false)}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Box sx={notificationStyles}>
        <NotificationsActiveIcon sx={{ mr: 1, color: "#ffd700", animation: "ring 0.7s 2" }} />
        <Typography variant="subtitle1" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
          {message}
        </Typography>
        <style>
          {`
            @keyframes ring {
              0% { transform: rotate(0); }
              15% { transform: rotate(15deg); }
              30% { transform: rotate(-10deg); }
              45% { transform: rotate(5deg); }
              60% { transform: rotate(-5deg); }
              75% { transform: rotate(3deg); }
              100% { transform: rotate(0); }
            }
          `}
        </style>
      </Box>
    </Snackbar>
  );
}
