// src/index.ts
import express from "express";
import { sequelize } from "./config/sequelize";
import userRoutes from "./routes/user.route";
import postRoutes from "./routes/post.route";

const app = express();
const PORT = 3000;

app.use(express.json());

// Montar rutas
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

const main = async () => {
  try {
    // Sincronizar con la BD
    await sequelize.sync({ force: true });
    console.log("Database connected");

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
