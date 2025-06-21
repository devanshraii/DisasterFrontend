import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Stack } from "@mui/material";

export default function ReportForm() {
  const [content, setContent] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API_URL}/reports`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-user": "citizen1" },
      body: JSON.stringify({
        disaster_id: 1,
        user_id: "citizen1",
        content,
        image_url,
        verification_status: "pending"
      })
    });
    setContent("");
    setImageUrl("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h6" gutterBottom>Submit Report</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Content" value={content} onChange={e => setContent(e.target.value)} required multiline minRows={2} />
          <TextField label="Image URL" value={image_url} onChange={e => setImageUrl(e.target.value)} />
          <Button type="submit" variant="contained">Submit</Button>
          {success && <Typography color="success.main">Report submitted!</Typography>}
        </Stack>
      </form>
    </Paper>
  );
}
