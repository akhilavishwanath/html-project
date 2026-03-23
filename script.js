function showTip() {
    alert("💡 Go eco-friendly!");
    alert("💡 Carry a reusable bottle to reduce plastic waste!");
}
function scrollToSection() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}
 document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

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

    // 🔥 SEND DATA TO SERVER
    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.json())
    .then(data => {
        alert("Form submitted successfully! Thank you 🤝");
        document.getElementById("contactForm").reset();
    })
    .catch(err => console.error(err));
});