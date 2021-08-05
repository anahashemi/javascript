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

function login() {
    let myEmail = document.getElementById("emailInput");
    let myPass = document.getElementById("passwordInput");
    let enter = myEmail.value.toLowerCase() + myPass.value;

    if (enter == "amir@gmail.com112233") {
        alert("welcome amir");
    } else {
        alert("Invalid Email or Password");
    }
}
