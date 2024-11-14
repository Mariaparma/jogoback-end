import { Router } from "express";


import alunoRoutes from "./alunos.routes.js";
import desenvolvedorRoutes from "./desenvolvedores.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Sou linda!" });
});

// Lista de uso das rotas do projeto
routes.use("/alunos", alunoRoutes);
routes.use("/desenvolvedores", desenvolvedorRoutes);

export default routes;