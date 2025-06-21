import React, { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText, Chip, Stack } from "@mui/material";

export default function DisasterList() {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/disasters`)
      .then(res => res.json())
      .then(setDisasters);
  }, []);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>All Disasters</Typography>
      <List>
        {disasters.map(d => (
          <ListItem key={d.id} divider>
            <ListItemText
              primary={d.title}
              secondary={
                <>
                  {d.description}
                  <br />
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    {d.tags?.map(tag => <Chip key={tag} label={tag} size="small" />)}
                  </Stack>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
