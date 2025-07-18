import User from "../models/userModel.js"

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
};

export {getAllUsers, createUser};