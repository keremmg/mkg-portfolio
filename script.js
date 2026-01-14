const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


const nameString = "MUSTAFA KEREM GÜÇLÜ ";


const fontSize = 24; 
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * -50);
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0"; 
    ctx.font = "bold " + fontSize + "px monospace"; 
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

    ctx.shadowBlur = 0;
}

setInterval(drawMatrix, 50); 


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

