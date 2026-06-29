// ==========================
// Loading Screen
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.remove();
        }, 600);

    }, 1200);

});

// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==========================
// Navbar Shadow
// ==========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.15)";

    } else {

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.08)";

    }

});

// ==========================
// Back To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// Smooth Button Hover Effect
// ==========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");

    });

});
