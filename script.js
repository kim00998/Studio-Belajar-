// ================================
// HAKIM AI ACADEMY
// script.js
// ================================

// MENU MOBILE
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {
    menu.onclick = () => {
        nav.classList.toggle("active");
    };
}

// BUKA / TUTUP MATERI
function toggleMateri(id) {

    const semua = document.querySelectorAll(".task-content");

    semua.forEach(item => {
        if (item.id !== id) {
            item.style.display = "none";
        }
    });

    const target = document.getElementById(id);

    if (target.style.display === "block") {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }
}

// COPY PROMPT
function copyPrompt(id) {

    const text = document.getElementById(id);

    navigator.clipboard.writeText(text.value);

    alert("✅ Prompt berhasil disalin!");
}

// BACK TO TOP
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backTop.style.display = "flex";
    } else {
        backTop.style.display = "none";
    }

});

backTop.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// MENU AKTIF
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            current = section.id;
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ANIMASI CARD
const cards = document.querySelectorAll(".card,.task-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});