import React, { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function OfficialUpdates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/disasters/1/official-updates`)
      .then(res => res.json())
      .then(setUpdates);
  }, []);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>Official Updates</Typography>
      <List>
        {updates.map((u, i) => (
          <ListItem key={i}>
            <ListItemText primary={u.title} secondary={u.date} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
