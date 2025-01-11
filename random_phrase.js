document.addEventListener('DOMContentLoaded', () => {
    // Logique pour afficher des phrases aléatoires
    const phrases = [
        "Bande de noobzz",
        "C'est bon ! Je joue scout TOUTE la game!",
        "Stop push guys.",
        "Si tu prend pas de kevlar casque je te fume!",
        "OHHH noooooooo, c'est bon sa cheat en face."
    ];

    const randomPhraseElement = document.querySelector('.random-phrase');

    if (randomPhraseElement) {
        function setRandomPhrase() {
            const randomPhraseElement = document.querySelector('.random-phrase');
            
            // Vérifiez si l'élément est trouvé
            if (!randomPhraseElement) {
                console.error('Erreur : L\'élément .random-phrase n\'existe pas dans le DOM.');
                return;
            }
            
            const randomIndex = Math.floor(Math.random() * phrases.length);
            randomPhraseElement.textContent = phrases[randomIndex];
        }

        setRandomPhrase(); // Définit une phrase au chargement
        setInterval(setRandomPhrase, 5000); // Change la phrase toutes les 5 secondes
    } else {
        console.error('L\'élément <p> avec la classe "random-phrase" est introuvable.');
    }
});