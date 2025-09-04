import React, { useState } from "react";
import { shortenUrl, getUrls } from "../utils/api";
import { Button, TextField, Container, Typography } from "@mui/material";
import UrlList from "../components/UrlList";
import logger from "../utils/loggerMiddleware";

export default function ShortenerPage() {
  const [longUrl, setLongUrl] = useState("");
  const [validity, setValidity] = useState(30);
  const [customCode, setCustomCode] = useState("");
  const [urls, setUrls] = useState(getUrls());

  const handleSubmit = () => {
    if (!longUrl.startsWith("http")) {
      alert("Enter a valid URL (must start with http/https)");
      return;
    }
    const newUrl = shortenUrl(longUrl, validity, customCode || null);
    setUrls([...urls, newUrl]);
    logger("URL shortened successfully", newUrl);
    setLongUrl("");
    setCustomCode("");
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 2 }}>
        URL Shortener
      </Typography>
      <TextField
        label="Enter Long URL"
        fullWidth
        margin="normal"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <TextField
        label="Validity (minutes)"
        type="number"
        margin="normal"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <TextField
        label="Custom Shortcode (optional)"
        margin="normal"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <Button variant="contained" sx={{ marginTop: 2 }} onClick={handleSubmit}>
        Shorten
      </Button>
      <UrlList urls={urls} />
    </Container>
  );
}
