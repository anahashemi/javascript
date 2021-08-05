// console.log("Hello from console");

// /* Find element by its id */
// const emailInput = document.getElementById("emailInput");

// /* Print current value of element */
// console.log("Email value is :", emailInput.value);

// /* Set new value to the element */
// emailInput.value = "Jane@Doe.com";

// /* Print element's value */

// /* PASSWORD */
// const passwordInput = document.getElementById("passwordInput");
// console.log("password value is: ", passwordInput.value);
// passwordInput.value = "123";
// // passwordInput.type = "text";
// console.log(passwordInput.value);

/* Task: 
    By cilcking on login button :
    check email and password with
    email: amir@gmail.com
    password: 112233

        true => alert('Welcome amir')
        false => alert('Invalid email : ' + email.value)
*/

document
    .getElementById("loginButton")
    .addEventListener("click", function (event) {
        event.preventDefault();

        let myEmail = document.getElementById("emailInput");
        let myPass = document.getElementById("passwordInput");

        if (
            myEmail.value.toLowerCase() == "amir@gmail.com" &&
            myPass.value == "112233"
        ) {
            alert("welcome amir");
        } else {
            alert("Invalid Email or Password");
        }

        return false;
    });

document.getElementById("button1").addEventListener("click", function (event) {
    event.preventDefault();
    alert("alert1");
});

document.getElementById("button2").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Alert 2");
    return false;
});
