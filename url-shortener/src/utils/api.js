import logger from "./loggerMiddleware";

const generateShortCode = () => Math.random().toString(36).substring(2, 8);

export const shortenUrl = (longUrl, validity = 30, customCode = null) => {
  const shortCode = customCode || generateShortCode();
  const expiry = Date.now() + validity * 60000; 

  const urlData = {
    longUrl,
    shortCode,
    expiry,
    clicks: []
  };

  let urls = JSON.parse(localStorage.getItem("urls")) || [];
  urls.push(urlData);
  localStorage.setItem("urls", JSON.stringify(urls));

  logger("Shortened URL created", urlData);

  return urlData;
};

export const getUrls = () => {
  return JSON.parse(localStorage.getItem("urls")) || [];
};

export const addClick = (shortCode, source = "direct") => {
  let urls = JSON.parse(localStorage.getItem("urls")) || [];
  urls = urls.map(url => {
    if (url.shortCode === shortCode) {
      url.clicks.push({
        timestamp: new Date().toISOString(),
        source,
        location: "Unknown"
      });
    }
    return url;
  });
  localStorage.setItem("urls", JSON.stringify(urls));
};
