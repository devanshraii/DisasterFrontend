import React, { useState } from "react";
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

export default function ResourceLocator() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [resources, setResources] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/disasters/1/resources?lat=${lat}&lon=${lon}`);
    setResources(await res.json());
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>Resource Locator</Typography>
      <form onSubmit={handleSearch} style={{ marginBottom: 16 }}>
        <TextField label="Latitude" value={lat} onChange={e => setLat(e.target.value)} required sx={{ mr: 2 }} />
        <TextField label="Longitude" value={lon} onChange={e => setLon(e.target.value)} required sx={{ mr: 2 }} />
        <Button type="submit" variant="contained">Find</Button>
      </form>
      <List>
        {resources.map((r, i) => (
          <ListItem key={i}>
            <ListItemText primary={r.name} secondary={r.type} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
