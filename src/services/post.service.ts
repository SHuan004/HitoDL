// src/services/post.service.ts
import { Post } from "../schemas/post.model";
import { User } from "../schemas/user.model";

export const getAllPosts = async () => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["uid", "name", "email"], // Campos que quieras mostrar
      },
    ],
  });
  return posts;
};

export const createPost = async (
  title: string,
  content: string,
  userId: string
) => {
  // Verificar si el usuario existe
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Crear el post
  const post = await Post.create({ title, content, userId });
  return post;
};
