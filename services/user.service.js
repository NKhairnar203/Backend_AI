import UserModel from "../models/user.model.js";

export const createUser = async ({ email, password, name }) => {

  
    if (!email || !password || !name) {
      
      throw new Error("Please fill all fields!");
    }

  const hashedPassword = await UserModel.hashPassword(password);

  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};
