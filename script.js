const photos = [
  {
    src: "imagens/foto-familia-1.jpeg",
    caption: "Um momento em família ❤️"
  },
  {
    src: "imagens/foto-familia-2.jpeg",
    caption: "Momentos que ficam para sempre"
  },
  {
    src: "imagens/foto-familia-3.jpeg",
    caption: "Juntos, sempre ❤️"
  }
];

const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
let currentPhoto = 0;

function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;
  modalImage.src = photos[currentPhoto].src;
  modalImage.alt = photos[currentPhoto].caption;
  modalCaption.textContent = photos[currentPhoto].caption;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

document.querySelectorAll(".photo-card").forEach(card => {
  card.addEventListener("click", () => showPhoto(Number(card.dataset.index)));
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("prevPhoto").addEventListener("click", () => showPhoto(currentPhoto - 1));
document.getElementById("nextPhoto").addEventListener("click", () => showPhoto(currentPhoto + 1));

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") showPhoto(currentPhoto - 1);
  if (e.key === "ArrowRight") showPhoto(currentPhoto + 1);
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// Confetes
function confetti(amount = 90) {
  const container = document.getElementById("confetti");
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = (2.5 + Math.random() * 3) + "s";
    piece.style.animationDelay = Math.random() * .7 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.background = ["#c8102e", "#fff", "#111", "#d9b56b"][Math.floor(Math.random() * 4)];
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 6000);
  }
}

document.getElementById("celebrateBtn").addEventListener("click", () => {
  confetti(140);
  document.getElementById("celebrateBtn").textContent = "🎉 Parabéns, Robson!";
});

window.addEventListener("load", () => {
  setTimeout(() => confetti(45), 500);
});

// Botão de música: sem arquivo externo, apenas uma indicação visual.
// Para colocar uma música real, adicione um MP3 na pasta e use o bloco indicado abaixo.
const musicBtn = document.getElementById("musicBtn");
let musicOn = false;

musicBtn.addEventListener("click", () => {
  musicOn = !musicOn;
  musicBtn.innerHTML = musicOn ? "🔊 <span>Música ON</span>" : "♫ <span>Música</span>";
});
