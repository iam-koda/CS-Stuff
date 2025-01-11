// Conservez uniquement les fonctionnalités liées aux filtres
document.addEventListener('DOMContentLoaded', () => {
    const teamButtons = document.querySelectorAll('.team-filters .filter-btn');
    const grenadeButtons = document.querySelectorAll('.grenade-filters .filter-btn');
    const videoItems = document.querySelectorAll('.video-item');

    function filterVideos() {
        const selectedTeam = document.querySelector('.team-filters .active').dataset.team;
        const selectedGrenade = document.querySelector('.grenade-filters .active').dataset.grenade;

        videoItems.forEach(video => {
            const videoTeam = video.dataset.team;
            const videoGrenade = video.dataset.grenade;

            const teamMatch = selectedTeam === 'All' || videoTeam === selectedTeam;
            const grenadeMatch = selectedGrenade === 'All' || videoGrenade === selectedGrenade;

            video.style.display = teamMatch && grenadeMatch ? 'block' : 'none';
        });
    }

    teamButtons.forEach(button => {
        button.addEventListener('click', () => {
            teamButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterVideos();
        });
    });

    grenadeButtons.forEach(button => {
        button.addEventListener('click', () => {
            grenadeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterVideos();
        });
    });

    filterVideos(); // Initial filter
});
