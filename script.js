function showTip() {
    alert("💡 Go eco-friendly!");
    alert("💡 Carry a reusable bottle to reduce plastic waste!");
}
function scrollToSection() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}
 
   function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    let name = form.querySelector("[name='name']").value.trim();

    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        alert("Please enter valid name");
        return;
    }

    const isLocal = window.location.hostname === "localhost";

    if (!isLocal) {
        // 🌐 GITHUB → FORMSPREE
        const data = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                document.getElementById("successMsg").textContent =
                    "Form submitted successfully! Thank you 🤝";
                form.reset();
            } else {
                alert("Submission failed. Try again later.");
            }
        })
        .catch(() => {
            alert("Error submitting form");
        });
    }
}