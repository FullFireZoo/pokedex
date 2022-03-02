const email = document.querySelector('#email')
const password = document.querySelector('#password')
const connexionBtn = document.querySelector('button')
const errorMsgEmail = document.querySelector('#emailError')
const errorMsgPassword = document.querySelector('#passwordError')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePassword(password) {
    if (password.value.length >= 8) {
        return true
    } else {
        return false
    }
}
function singIn (email, password) {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        // Signed in
        document.location.href = "http://127.0.0.1:5500/Pok%C3%A9dex/index.html"
        var user = userCredential.user;
        console.log(user);
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}
connexionBtn.addEventListener('click', () => {
    if(validateEmail(email.value) && validatePassword(password)){
        singIn(email,password)
    } else {
        errorMsgEmail.textContent = "Email ou mot de passe invalide.";
        errorMsgPassword.textContent = "Email ou mot de passe invalide.";
    }
})

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var uid = user.uid;
//       console.log(uid)
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
