// src/controllers/post.controller.ts
import { Request, Response, NextFunction } from "express";
import { getAllPosts, createPost } from "../services/post.service";

// Si usas algún schema de validación (por ejemplo, Joi), puedes importarlo aquí.
// import { createPostSchema, getPostByIdSchema } from '../schemas/post.schema';

/**
 * Obtener todos los posts (y su autor, si corresponde)
 */
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await getAllPosts();
    if (posts && posts.length > 0) {
      res.json({ posts });
    } else {
      res.status(404).json({ message: "No hay posts." });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Crear un nuevo post
 */
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Ejemplo de validación con Joi (opcional):
    // const { error } = createPostSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({ message: error.message });
    // }

    const { title, content, userId } = req.body;

    try {
      const newPost = await createPost(title, content, userId);
      res.status(201).json({ post: newPost });
    } catch (err) {
      if (err instanceof Error && err.message.includes("User not found")) {
        res.status(404).json({ error: err.message });
      } else {
        throw err;
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Exportar un objeto con nuestros métodos (CRUD)
 */
export const PostController = {
  getAll,
  create,
};
