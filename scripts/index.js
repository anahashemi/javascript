/**
 * Check user data
 */
function checkCredintials() {
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");

    if (
        emailInput.value.toLowerCase() == "john@doe.com" &&
        passwordInput.value == "john123"
    ) {
        alert("Welcome John");
    } else {
        alert("Invalid email/password");
    }
}

document
    .getElementById("loginButton")
    .addEventListener("click", checkCredintials);
