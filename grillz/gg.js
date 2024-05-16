var users = [
    { Email: "test@gmail.com", password: "123456", username: "testUser", age: 25 }
];
function login() {
    const email = document.getElementById('mail').value;
    const password = document.getElementById('psswrd').value;

    // Basic email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // Dummy check for example purpose
    for (let i = 0; i< users.length; i++) { 
        if (email === users[i].Email && password === users[i].password) {
            alert('Login successful!');
            return true; // Allow form submission
        } else {
            alert('Invalid email or password.');
            return false; // Prevent form submission
        }   
    }

}
document.getElementById("submit").addEventListener("click",login);
function signup() {
    var PS = document.getElementById("password").value;
    var Mail = document.getElementById("email").value;
    var USR = document.getElementById("user").value;
    var age = document.getElementById("age").value;

    if (PS.length < 8) {
        alert("Mot de passe doit contenir au moins 8 caractères");
        return false;
    } else {
        var newUser = {
            Email: Mail,
            password: PS,
            username: USR,
            age: age
        };
        users.push(newUser);
        alert("Signup successful");
    }
    return true;
}