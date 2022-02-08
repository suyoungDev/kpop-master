const successResponse = (response) => (result) =>
  response.status(200).json({ success: true, result });

const failResponse = (response, error) =>
  response.status(400).json({ success: false, error });

module.exports = { successResponse, failResponse };
