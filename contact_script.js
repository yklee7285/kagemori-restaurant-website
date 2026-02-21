//Validate Form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const contactError = document.getElementById("contact-error");
    const topicError = document.getElementById("topic-error");
    const messageError = document.getElementById("message-error");

    //Remove Error Message
    nameError.textContent = "";
    emailError.textContent = "";
    contactError.textContent = "";
    topicError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name.trim() === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address following format someone@example.com.";
        isValid = false;
    }

    const contactRegex = /^01\d{1}-\d{7,8}$/;
    if (!contactRegex.test(contact)) {
        contactError.textContent = "Please enter a valid contact number following format 012-3456789.";
        isValid = false;
    }

    if (topic === "") {
        topicError.textContent = "Please select a topic.";
        isValid = false;
    }

    if (message.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }
    if (isValid) {
        clearForm();
        alert("Submision successfully received!");
    }
    return isValid;
}

//Clear Form
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("topic").value = "";
    document.getElementById("message").value = "";

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("contact-error").textContent = "";
    document.getElementById("topic-error").textContent = "";
    document.getElementById("message-error").textContent = "";
}
