
const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req, { abortEarly: false });
    return next();
  } catch (err) {
    console.log('Request validation error', err.message);
    return res.status(400).json({ type: err.name, message: err.errors });
  }
};

module.exports = validate;
