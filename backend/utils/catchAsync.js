const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.error(err.stack); // Log the error stack
    next(err);
  });
};

module.exports = catchAsync;
