const User = require("../models/user");

async function handleRegisterUser(req, res) {
  const body = req.body;
  if (!body || !body.username || !body.email || !body.password) {
    return res.status(400).json({ msg: "All fields are required!!!" });
  }

  const usernameExists = await User.findOne({ username: body.username })
  const emailExists = await User.findOne({ email: body.email })
  if (usernameExists) {
    return res.status(400).json({ msg: "Username already exists" });
  }
  if (emailExists) {
    return res.status(400).json({ msg: "Email already exists" });
  }

  await User.create({
    username: body.username,
    email: body.email,
    user_type: body.user_type,
    password: body.password,
  });

  return res.status(201).json({ msg: "User created successfully" });
}

module.exports = {
  handleRegisterUser,
};
