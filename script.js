const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");

// Make the NO button playfully move away.

noBtn.addEventListener("mouseenter", function () {
    const maxX = Math.max(0, window.innerWidth - noBtn.offsetWidth);
    const maxY = Math.max(0, window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed";

    noBtn.style.left =
        Math.random() * maxX + "px";

    noBtn.style.top =
        Math.random() * maxY + "px";
});

// Also handle taps on mobile.

noBtn.addEventListener("touchstart", function (event) {
    event.preventDefault();

    const maxX = Math.max(0, window.innerWidth - noBtn.offsetWidth);
    const maxY = Math.max(0, window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed";

    noBtn.style.left =
        Math.random() * maxX + "px";

    noBtn.style.top =
        Math.random() * maxY + "px";
});

// YES button celebration.

yesBtn.addEventListener("click", function () {
    celebration.classList.remove("hidden");

    yesBtn.textContent = "YES FOREVER ❤️";

    noBtn.style.display = "none";

    document.querySelector(".hint").textContent =
        "Someone is smiling right now! 🥰";

    // Create a burst of hearts.

    for (let i = 0; i < 40; i++) {
        createHeart();
    }
});

// Create floating hearts.

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis = ["❤️", "💖", "💕", "💗", "💘"];

    heart.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        3 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 7000);
}

// Continuously create background hearts.

setInterval(createHeart, 500);
