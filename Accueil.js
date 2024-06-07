document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startGameBtn').addEventListener('click', function() {
        alert('Sélectionnez un jeu pour commencer !');
    });



    document.querySelectorAll('.startGameBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            const hero = this.getAttribute('data-game');
            if (hero === 'link_games') {
                window.location.href = 'Jeux.html';
            }
        });
    });
});
