hererequire("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Page d'accueil
app.get("/", (req, res) => {
    res.send("👑 DARK KING BOT est en ligne !");
});

// Vérification du serveur
app.get("/health", (req, res) => {
    res.json({
        bot: "DARK KING BOT",
        status: "online"
    });
});

// Test
app.post("/test", (req, res) => {
    res.json({
        success: true,
        message: "DARK KING BOT fonctionne !"
    });
});

// Démarrage
app.listen(PORT, () => {
    console.log("👑 DARK KING BOT démarré !");
    console.log(`Port : ${PORT}`);
});
