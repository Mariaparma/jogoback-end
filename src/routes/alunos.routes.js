import { Router } from "express";

const alunoRoutes = Router();

let alunos = [
    {
        id: Math.floor(Math.random() * 1000000),
    nome: "Giovanna Alba",
    idade: 16,
    caracteristica: ["Morena", "Alta", "Olho Castanho"]
    }
]
