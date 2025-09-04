import React from "react";
import { getUrls } from "../utils/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
  Typography,
} from "@mui/material";

export default function StatsPage() {
  const urls = getUrls();

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 2 }}>
        URL Stats
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Click Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url, i) => (
            <TableRow key={i}>
              <TableCell>{`http://localhost:3000/${url.shortCode}`}</TableCell>
              <TableCell>{url.clicks.length}</TableCell>
              <TableCell>
                {url.clicks.map((c, j) => (
                  <div key={j}>
                    {c.timestamp} - {c.source} - {c.location}
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
