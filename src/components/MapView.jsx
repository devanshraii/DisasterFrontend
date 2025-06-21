import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Paper, Typography } from "@mui/material";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapView() {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/disasters`)
      .then(res => res.json())
      .then(setDisasters);
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Disaster Map</Typography>
      <MapContainer center={[40.7128, -74.006]} zoom={10} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {disasters
  .filter(
    d =>
      d.location &&
      Array.isArray(d.location.coordinates) &&
      d.location.coordinates.length >= 2
  )
  .map(d => (
    <Marker
      key={d.id}
      position={[d.location.coordinates[1], d.location.coordinates[0]]}
      icon={markerIcon}
    >
      <Popup>
        <strong>{d.title}</strong><br />
        {d.location_name}
      </Popup>
    </Marker>
  ))}

      </MapContainer>
    </Paper>
  );
}
