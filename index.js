
require("dotenv").config();

const express = require("express");
const { executeCommand } = require("./commandes");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Accueil
app.get("/", (req, res) => {
    res.send("👑 DARK KING BOT est en ligne !");
});

// État du bot
app.get("/health", (req, res) => {
    res.json({
        bot: "DARK KING BOT",
        status: "online"
    });
});

// Exécuter une commande
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

        res.json({
            success: true,
            response: response
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            response: "Une erreur est survenue."
        });
    }
});

// Démarrage
app.listen(PORT, () => {
    console.log("👑 DARK KING BOT démarré !");
    console.log("Port : " + PORT);
});
