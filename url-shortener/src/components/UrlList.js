import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function UrlList({ urls }) {
  return (
    <div>
      {urls.map((url, index) => (
        <Card key={index} sx={{ margin: "10px", padding: "10px" }}>
          <CardContent>
            <Typography>Original: {url.longUrl}</Typography>
            <Typography>Short: http://localhost:3000/{url.shortCode}</Typography>
            <Typography>
              Expiry: {new Date(url.expiry).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
