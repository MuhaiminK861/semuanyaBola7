/**
 * FUNGSI UTAMA: Hubungan Antara HTML & Java
 * Kod ini menggunakan 'async/await' untuk mengambil data link daripada Java Backend
 */

// 1. URL Server Java anda (Ganti localhost:8080 dengan alamat server anda nanti)
const JAVA_API_URL = "http://localhost:8080/api/bola/links";

// 2. Fungsi untuk menguruskan navigasi melalui Java
async function handleNavigation(key) {
    console.log(`Mencuba untuk menyambung ke Java untuk pautan: ${key}`);
    
    try {
        // Mengambil data link secara dinamik daripada Java
        const response = await fetch(JAVA_API_URL);
        
        if (!response.ok) {
            throw new Error('Gagal mengambil data daripada Java Server');
        }

        const links = await response.json();
        
        // Jika Java memulangkan link, buka dalam tab baru
        if (links[key]) {
            window.open(links[key], "_blank");
        } else {
            console.error("Link tidak dijumpai dalam database Java.");
        }

    } catch (error) {
        console.warn("Java Backend tidak dikesan. Menggunakan link sandaran (fallback).");
        fallbackNavigation(key);
    }
}

// 3. Fungsi Sandaran (Jika Java Backend belum dihidupkan)
function fallbackNavigation(key) {
    const backupLinks = {
        'career': 'https://ms.wikipedia.org/wiki/Faisal_Halim',
        'profile': 'https://www.instagram.com/faisalhalim.7',
        'moment': 'https://www.youtube.com/results?search_query=faisal+halim+goal',
        'ortus': 'https://www.ortuseight.com',
        'ig_ortus': '