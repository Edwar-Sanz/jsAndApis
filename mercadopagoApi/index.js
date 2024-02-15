import express from "express";
import { config } from "dotenv"; config();
import router from "./src/mercadopagoRoutes.js";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.use(router);
app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en http://localhost:${PORT}`);
});
