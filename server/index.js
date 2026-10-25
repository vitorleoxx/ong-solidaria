import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API funcionando corretamente",
  });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
