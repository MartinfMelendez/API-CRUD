const errorHandler = (e, req, res, next) => {
  res.status(e.statusCode || 500).json({
    error: e.message || "Error interno del servidor",
  });
};

export default errorHandler;
