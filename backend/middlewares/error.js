

// process or format errors if needed
const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  const response = {
    code: statusCode,
    message,
  };
  res.status(statusCode).send(response);
};

module.exports = {
  errorHandler,
};
