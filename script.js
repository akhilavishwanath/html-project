function showTip() {
    alert("💡 Go eco-friendly!");
    alert("💡 Carry a reusable bottle to reduce plastic waste!");
}
function scrollToSection() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}
 
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let nameError = document.getElementById("nameError");

    nameError.textContent = "";

    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        nameError.textContent = "Please enter a valid name (no numbers allowed)";
        return;
    }
    document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        alert("Please enter valid name");
        return;
    }

    // 🔥 CHECK ENVIRONMENT
    const isLocal = window.location.hostname === "localhost";

    if (isLocal) {
        // ✅ LOCAL → SAVE TO DATABASE
        fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(res => res.json())
        .then(data => {
            alert("Saved to database! Thank you 🤝");
            document.getElementById("contactForm").reset();
        });
    } else {
        // 🌐 GITHUB → SEND TO FORMSPREE
        fetch("https://formspree.io/f/mlgpyqdv", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(() => {
            alert("Form submitted successfully! Thank you 🤝");
            document.getElementById("contactForm").reset();
        });
    }
});