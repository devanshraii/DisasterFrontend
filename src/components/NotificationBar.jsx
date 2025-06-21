import React, { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { io } from "socket.io-client";

export default function NotificationBar() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_URL);
    socket.on("disaster_updated", () => { setMessage("Disaster data updated!"); setOpen(true); });
    socket.on("social_media_updated", () => { setMessage("New social media reports!"); setOpen(true); });
    socket.on("resources_updated", () => { setMessage("Resource data updated!"); setOpen(true); });
    return () => socket.disconnect();
  }, []);

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
      <Alert onClose={() => setOpen(false)} severity="info" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
