document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fungsi Butang Home
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Kembali ke atas dengan kesan smooth scroll
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log("Navigasi ke Home berjaya.");
    });

    // 2. Animasi Muncul untuk Jadual Statistik
    const statsTable = document.querySelector('.overlay-stats');
    
    // Fungsi untuk mengesan skrol
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const tableTop = statsTable.getBoundingClientRect().top;

        if (tableTop < triggerBottom) {
            statsTable.style.opacity = "1";
            statsTable.style.transform = "translate(-50%, -50%) scale(1)";
        }
    };

    // Tetapan awal untuk animasi (CSS inline)
    statsTable.style.opacity = "0";
    statsTable.style.transform = "translate(-50%, -50%) scale(0.8)";
    statsTable.style.transition = "all 0.8s ease-out";

    window.addEventListener('scroll', revealOnScroll);

    // 3. Logik Klik Logo Media Sosial (Opsional - untuk tracking)
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.getAttribute('href').includes('tiktok') ? 'TikTok' : 'Instagram';
            alert('Anda sedang dialihkan ke ' + platform + ' Faisal Halim');
        });
    });
});