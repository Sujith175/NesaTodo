const notFound = (req, res) => {
  res.status(404).send("sorry requested route not found ");
};
module.exports = notFound;
