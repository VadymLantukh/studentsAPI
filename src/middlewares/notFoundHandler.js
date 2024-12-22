export const errorNotFound = (req, res, next) => {
  res.status(404).json({
    message: `Not found page ${req.url}`,
  });
};
