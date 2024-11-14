import { Router } from "express";

const desenvolvedorRoutes = Router();

let desenvolvedores = [
    {
        id: Math.floor(Math.random() * 1000000),
    nome: "Maria Parma",
    idade: 16,
    caracteristica: ["Morena", "Alta", "Olho Castanho"],
    anos_experiencia: 2,
    habilidade: true,
    objetivo: "Achar suspeito"
    }
]
