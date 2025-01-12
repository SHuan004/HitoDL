import { User } from "../schemas/user.model";
import { Post } from "../schemas/post.model";

export const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const getUserById = async (id: string) => {
  // Retorna solo el usuario sin sus posts
  const user = await User.findByPk(id);
  return user;
};

export const getUserWithPosts = async (id: string) => {
  // Retorna usuario con posts relacionados
  const user = await User.findByPk(id, {
    include: [Post],
  });
  return user;
};

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  const user = await User.create({ name, email, password });
  return user;
};
