/* --- BÖLÜM 1: Matrix Yağmuru (BELİRGİN & PARLAK VERSİYON) --- */
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Canvas boyutunu tam ekran yap
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Görüntülenecek İsim
const nameString = "MUSTAFA KEREM GÜÇLÜ ";

// --- DEĞİŞİKLİK 1: Font Boyutunu Büyüttük ---
const fontSize = 24; // Daha büyük ve okunaklı
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * -50);
}

function drawMatrix() {
    // Hafif iz bırakma efekti
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; // İzi biraz daha hızlı siliyoruz ki net görünsün
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- DEĞİŞİKLİK 2: Parlama Efekti ve Renk ---
    ctx.fillStyle = "#0F0"; // Parlak Yeşil
    ctx.font = "bold " + fontSize + "px monospace"; // Kalın Font

    // Neon Efekti (Performansı biraz etkileyebilir ama çok şık durur)
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#0f0";

    for (let i = 0; i < drops.length; i++) {
        let charIndex = Math.floor(Math.abs(drops[i])) % nameString.length;
        const text = nameString.charAt(charIndex);

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
        }
        drops[i]++;
    }

    // Gölgeyi sıfırla ki arka planı boyarken sorun olmasın
    ctx.shadowBlur = 0;
}

setInterval(drawMatrix, 50); // Hız ayarı


/* --- BÖLÜM 2: İletişim Formu Doğrulama --- */
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            feedback.style.color = "red";
            feedback.textContent = "HATA: Lütfen tüm alanları doldurun!";
        } else if (!email.includes('@')) {
            feedback.style.color = "red";
            feedback.textContent = "HATA: Geçersiz e-posta formatı!";
        } else {
            feedback.style.color = "#0f0";
            feedback.textContent = "BAŞARILI: Mesajınız şifrelendi ve iletildi.";
            contactForm.reset();
        }
    });
}
