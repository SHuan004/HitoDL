import app from "./app";
import { sequelize } from "./config/sequelize";

const PORT = 3000;

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
