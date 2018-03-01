var config = {
    apiKey: "AIzaSyBJlRXW9O6aAGBcZOvTMpiJUU6aOSc8STc",
    authDomain: "linguine-coin.firebaseapp.com",
    databaseURL: "https://linguine-coin.firebaseio.com",
    projectId: "linguine-coin",
    storageBucket: "linguine-coin.appspot.com",
    messagingSenderId: "244166940420"
};
firebase.initializeApp(config);
function signMeIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        alert(error);
    }).then(function() {
        console.log(firebase.auth().currentUser.uid);
        email.value = "";
        password.value = "";
        document.getElementById('heada').innerHTML = "You're Signed Up!"
    });
}