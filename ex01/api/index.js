import "dotenv/config";
import express from "express";

const app = express();

// Rota principal
app.get("/", (req, res) => {
  res.send("Bem-vindo ao Express de Maria Eduarda"); // altere para o seu nome
});

// Definir porta dinâmica para produção (Vercel) ou 3000 localmente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
