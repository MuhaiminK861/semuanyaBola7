// Fungsi untuk membuka link video YouTube
function playVideo(url) {
    if (url && url !== "") {
        window.open(url, '_blank');
    } else {
        alert("Pautan video belum dimasukkan!");
    }
}

// Logik tambahan jika butang Home ditekan
document.querySelector('.home-icon').addEventListener('click', function(e) {
    console.log("Kembali ke laman utama...");
});