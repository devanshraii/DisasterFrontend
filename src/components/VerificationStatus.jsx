import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";

export default function VerificationStatus() {
  const [image_url, setImageUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/disasters/1/verify-image`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url })
    });
    const data = await res.json();
    setStatus(data.status);
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h6" gutterBottom>Image Verification</Typography>
      <form onSubmit={handleVerify}>
        <TextField label="Image URL" value={image_url} onChange={e => setImageUrl(e.target.value)} required sx={{ mr: 2 }} />
        <Button type="submit" variant="contained">Verify</Button>
      </form>
      {status && <Typography sx={{ mt: 2 }}>Verification Status: <strong>{status}</strong></Typography>}
    </Paper>
  );
}
