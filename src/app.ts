import express from "express";
import userRoutes from "./routes/user.route";
import postRoutes from "./routes/post.route";

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

export default app;
