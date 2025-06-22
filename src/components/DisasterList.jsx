import React, { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText, Chip, Stack, Box, Divider } from "@mui/material";

export default function DisasterList() {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/disasters`)
      .then(res => res.json())
      .then(setDisasters);
  }, []);

  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: 900,
        margin: 'auto',
        mt: 4,
        mb: 4,
        background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",
        borderRadius: 4,
        boxShadow: 4,
      }}
      elevation={3}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 3,
          color: "#1976d2",
          letterSpacing: 1,
        }}
      >
        All Disasters
      </Typography>
      <List>
        {disasters.map(d => (
          <Box
            key={d.id}
            sx={{
              mb: 2,
              borderRadius: 3,
              boxShadow: 1,
              p: { xs: 1.5, sm: 2 },
              backgroundColor: '#fafcff',
              transition: 'box-shadow 0.2s',
              '&:hover': {
                boxShadow: 6,
                backgroundColor: '#e3f2fd',
              },
            }}
          >
            <ListItem alignItems="flex-start" disableGutters>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#1565c0",
                      mb: 0.5,
                      wordBreak: "break-word",
                    }}
                  >
                    {d.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ whiteSpace: 'pre-line', mb: 1 }}
                    >
                      {d.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                      {d.tags?.map(tag => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          color="primary"
                          sx={{ mb: 0.5, fontWeight: 500, letterSpacing: 0.5 }}
                        />
                      ))}
                    </Stack>
                  </>
                }
              />
            </ListItem>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Paper>
  );
}
