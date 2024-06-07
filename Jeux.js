document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startGameBtn').addEventListener('click', function() {
        alert('Sélectionnez un jeu pour commencer !');
    });

    document.querySelectorAll('.playBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            const game = this.getAttribute('data-game');
            if (game === 'differences') {
                window.location.href = 'Sevendiff.html';
            } else if (game === 'words') {
                window.location.href = 'JDMots.html';
            }
        });
    });
});
