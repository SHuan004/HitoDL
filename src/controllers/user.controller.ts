import { Request, Response, NextFunction } from "express";
import {
  getAllUsers,
  getUserWithPosts,
  createUser,
} from "../services/user.service";

/**
 * Obtener todos los usuarios (resumen)
 */
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Si tuvieras validación de query params o body, hazlo aquí

    const users = await getAllUsers();
    if (users && users.length > 0) {
      res.json({ users });
    } else {
      res.status(404).json({ message: "No hay usuarios." });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Obtener un usuario por UID (con sus posts)
 */
const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await getUserWithPosts(id);

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "Usuario no encontrado." });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Crear un nuevo usuario
 */
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    try {
      const newUser = await createUser(name, email, password);
      res.status(201).json({ user: newUser });
    } catch (err) {
      // Manejar errores de unicidad o específicos del servicio
      if (err instanceof Error && err.message.includes("unique constraint")) {
        // Ejemplo: error de correo en uso
        res.status(409).json({ error: err.message });
      } else {
        throw err; // Dejar que lo maneje el middleware global de errores
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Exportar un objeto con nuestros métodos (CRUD)
 */
export const UserController = {
  getAll,
  getById,
  create,
};
