require("dotenv").config();

const express = require("express");
const { executeCommand } = require("./commandes");

const app = express();

const PORT = process.env.PORT || 3000;

// Autoriser les données JSON
app.use(express.json());

// PAGE D'ACCUEIL
app.get("/", (req, res) => {
    res.send(`
        <h1>👑 DARK KING BOT</h1>
        <p>Le serveur est en ligne !</p>
    `);
});

// ÉTAT DU BOT
app.get("/health", (req, res) => {
    res.json({
        bot: "DARK KING BOT",
        status: "online",
        message: "Le serveur fonctionne correctement."
    });
});

// EXÉCUTER UNE COMMANDE
app.post("/command", (req, res) => {
    try {
        const message = req.body.message;

        if (typeof message !== "string" || !message.trim()) {
            return res.status(400).json({
                success: false,
                response: "Message invalide."
            });
        }

        const response = executeCommand(message);

        return res.json({
            success: true,
            bot: "DARK KING BOT",
            response: response
        });

    } catch (error) {
        console.error("Erreur :", error);

        return res.status(500).json({
            success: false,
            response: "Une erreur est survenue."
        });
    }
});

// ROUTE INCONNUE
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Page introuvable."
    });
});

// DÉMARRAGE DU SERVEUR
app.listen(PORT, () => {
    console.log("================================");
    console.log("👑 DARK KING BOT");
    console.log("✅ Serveur démarré !");
    console.log("🌐 Port : " + PORT);
    console.log("================================");
});￼Enter
