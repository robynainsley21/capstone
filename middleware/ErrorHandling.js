const errorHandling = (error, req, res, next) => {
  if (error || res.statusCode >= 400) {
    res.json({
      status: res.statusCode || 500,
      error: `An error ocurred: ${error.message}`,
    });
  }

  next();
};

export { errorHandling };
