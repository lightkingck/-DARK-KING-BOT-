const commandes = {
    menu: `👑 DARK KING BOT

🤖 INTELLIGENCE ARTIFICIELLE
.ai
.ask
.translate

📸 PHOTOS ET STICKERS
.sticker
.toimg
.blur

📚 MANGA ET ANIME
.manga
.anime
.mangainfo

🎵 MUSIQUE
.play
.lyrics

👥 GROUPES
.tag
.tagall
.groupinfo

🎮 JEUX
.quiz
.riddle
.dice

⚙️ OUTILS
.calc
.time
.date
.weather

👑 ADMINISTRATION
.help
.ping
.stats`,

    ping: "👑 DARK KING BOT fonctionne !",

    help: "Tape .menu pour afficher les commandes.",

    time: () => new Date().toLocaleTimeString("fr-FR"),

    date: () => new Date().toLocaleDateString("fr-FR")
};

function executeCommand(message) {
    const commande = message.trim().toLowerCase().replace(/^\./, "");

    if (commandes[commande]) {
        return typeof commandes[commande] === "function"
            ? commandes[commande]()
            : commandes[commande];
    }

    return "❌ Commande inconnue. Tape .menu";
}

module.exports = { executeCommand };￼Enter
