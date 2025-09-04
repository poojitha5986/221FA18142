const loggerMiddleware = (message, data = {}) => {
  console.log(`[LOG] ${message}`, data);
};

export default loggerMiddleware;
