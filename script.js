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
    let email = form.querySelector("[name='email']").value;
    let message = form.querySelector("[name='message']").value;

    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        alert("Please enter valid name");
        return;
    }

    const isLocal = window.location.hostname === "localhost";

    if (isLocal) {
        fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(res => res.json())
        .then(() => {
            alert("Form submitted successfully! Thank you 🤝");
            form.reset();
        });
    } else {
        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
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
            }
        });
    }
}  
 