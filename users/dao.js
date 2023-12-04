import model from "./model.js";
export const createUser = async (user) => {
  try {
    // we want to remove this field for a new user being created,
    // mongo will create it
    delete user._id;
    const newUser = await model.create(user);
    return newUser
  } catch {
    return {};
  }

};
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });