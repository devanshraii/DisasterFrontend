import React, { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText, Chip } from "@mui/material";

export default function SocialFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/disasters/1/social-media`)
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>Social Media Feed</Typography>
      <List>
        {posts.map((p, i) => (
          <ListItem key={i} divider>
            <ListItemText
              primary={p.user}
              secondary={p.post}
            />
            {p.priority === "urgent" && <Chip label="URGENT" color="error" size="small" />}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
