import { Router } from "express";

const suspeitoRoutes = Router();

let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Dev",
    idade: 32,
    caracteristica: ["Casado", "Usa Oculos", "Olho Castanho"],
    }
]
