import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Stack } from "@mui/material";

export default function DisasterForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API_URL}/disasters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-user": "netrunnerX"
      },
      body: JSON.stringify({ title, description, tags: tags.split(",") })
    });
    setTitle("");
    setDescription("");
    setTags("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>Report Disaster</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} required />
          <TextField label="Description" value={description} onChange={e => setDescription(e.target.value)} required multiline minRows={3} />
          <TextField label="Tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} />
          <Button type="submit" variant="contained">Submit</Button>
          {success && <Typography color="success.main">Disaster reported!</Typography>}
        </Stack>
      </form>
    </Paper>
  );
}
