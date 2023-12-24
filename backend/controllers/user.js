const { userData } = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // check if email and password are correct
  if (!(email === userData.email && password === userData.password)) {
    return res.status(400).send({
      message: "Email or password is incorrect",
    });
  }

  // generate jwt token
  const token = jwt.sign(userData, "verySecretKey", {
    expiresIn: "1d",
  });

  // return the success response
  return res.status(200).send({
    message: "Login successful",
    token,
  });
};
