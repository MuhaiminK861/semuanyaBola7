document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk butang Home
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', (e) => {
        console.log("Navigasi ke Home...");
    });

    // Kesan interaktif pada logo pasukan
    const teamLogo = document.querySelector('.team-logo');
    teamLogo.addEventListener('click', () => {
        console.log("Membuka laman web Selangor FC...");
    });

    // Logik tambahan jika perlu
});