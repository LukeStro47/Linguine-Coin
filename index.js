var config = {
    apiKey: "AIzaSyBJlRXW9O6aAGBcZOvTMpiJUU6aOSc8STc",
    authDomain: "linguine-coin.firebaseapp.com",
    databaseURL: "https://linguine-coin.firebaseio.com",
    projectId: "linguine-coin",
    storageBucket: "linguine-coin.appspot.com",
    messagingSenderId: "244166940420"
};
firebase.initializeApp(config);
var oldUser;
var currentUserId;
var inputs;
function signMeIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        alert(error);
    }).then(function() {
        console.log(firebase.auth().currentUser.uid);
        document.getElementById('hide').style.display = "none";
    });
}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(firebase.auth().currentUser.uid);
        document.getElementById('hide').style.display = "none";
        firebase.database().ref('Users').once('value').then(function(snapshot) {
            oldUser = snapshot.val() || 'Anonymous';
            document.getElementById('luke-coins').innerHTML = oldUser.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins.toString() + " Linguine Coins";
            document.getElementById('eamon-coins').innerHTML = oldUser.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.coins.toString() + " Linguine Coins";
            document.getElementById('nathan-coins').innerHTML = oldUser.V9dkluL27TXX2xeAYKRAmULEWvS2.coins.toString() + " Linguine Coins";
            document.getElementById('paul-coins').innerHTML = oldUser.Sfe4CqdALEZq2oqgyEHb3KousEJ2.coins.toString() + " Linguine Coins";
            document.getElementById('jason-coins').innerHTML = oldUser.Nu3BMirKtKUziXS3nhDLtJraxOz1.coins.toString() + " Linguine Coins";
            document.getElementById('gavin-coins').innerHTML = oldUser.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.coins.toString() + " Linguine Coins";
            document.getElementById('chance-coins').innerHTML = oldUser.X91iiHJqAucY1cAGhoCTo3Tq1ch1.coins.toString() + " Linguine Coins";
            document.getElementById('carson-coins').innerHTML = oldUser.L9oJ18itmrOXOAi4vhf6ahDHhHw1.coins.toString() + " Linguine Coins";
            document.getElementById('luke-V-coins').innerHTML = oldUser.C1Scy9IyO5On0iVmzBkcoiyFDlb2.coins.toString() + " Linguine Coins";
            document.getElementById('gavin-R-coins').innerHTML = oldUser.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.coins.toString() + " Linguine Coins";
            document.getElementById('tyler-coins').innerHTML = oldUser.j8h8tvQktlPmx4VioSplYmdpPmI2.coins.toString() + " Linguine Coins";
            document.getElementById('liam-coins').innerHTML = oldUser.gnqvhAXj6YgCwmOlErvwEMtLAHX2.coins.toString() + " Linguine Coins";
        });
        checkForUser();
    } else {
        // User is signed out.
    }
});
/*firebase.database().ref('').set({
        
});*/
/*firebase.database().ref('').once('value').then(function(snapshot) {
    interval = (snapshot.val() && snapshot.val().) || 'Anonymous';
});*/
function checkForUser() {
    currentUserId = firebase.auth().currentUser.uid;
    if(currentUserId == "Nv7UcjC551hX9cXLJ0aXhoINAKL2") {
        document.getElementById('luke-div').style.display = "none";
    } else if(currentUserId == "gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2") {
        document.getElementById('eamon-div').style.display = "none";
    } else if(currentUserId == "V9dkluL27TXX2xeAYKRAmULEWvS2") {
        document.getElementById('nathan-div').style.display = "none";
    } else if(currentUserId == "Sfe4CqdALEZq2oqgyEHb3KousEJ2") {
        document.getElementById('paul-div').style.display = "none";
    } else if(currentUserId == "Nu3BMirKtKUziXS3nhDLtJraxOz1") {
        document.getElementById('jason-div').style.display = "none";
    } else if(currentUserId == "Y6Gda6VmfmXewW2IWg7r4KXVE4M2") {
        document.getElementById('gavin-div').style.display = "none";
    } else if(currentUserId == "X91iiHJqAucY1cAGhoCTo3Tq1ch1") {
        document.getElementById('chance-div').style.display = "none";
    } else if(currentUserId == "L9oJ18itmrOXOAi4vhf6ahDHhHw1") {
        document.getElementById('carson-div').style.display = "none";
    } else if(currentUserId == "C1Scy9IyO5On0iVmzBkcoiyFDlb2") {
        document.getElementById('luke-V-div').style.display = "none";
    } else if(currentUserId == "fvztzfsKtgRnDCqrtrwbqv1uDJZ2") {
        document.getElementById('gavin-R-div').style.display = "none";
    } else if(currentUserId == "j8h8tvQktlPmx4VioSplYmdpPmI2") {
        document.getElementById('tyler-div').style.display = "none";
    } else if(currentUserId == "gnqvhAXj6YgCwmOlErvwEMtLAHX2") {
        document.getElementById('liam-div').style.display = "none";
    }
}
function toLuke() {
    var currentUserId = firebase.auth().currentUser.uid;
    var lukesCoins = oldUser.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins;
    var newAmount = document.getElementById('luke-number').value;
    var setLukeTo = lukesCoins + newAmount;
    var setLukeFrom;
    console.log(currentUserId);
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setLukeFrom = snapshot.val().coins || 'Anonymous';
        console.log(setLukeFrom);
    });
    //Add to Luke
    firebase.database().ref('Users/' + 'Nv7UcjC551hX9cXLJ0aXhoINAKL2').once('value').then(function(snapshot) {
        coins: setLukeTo
    });
    /*Subtract from Person
    firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
        coins: setTo
    });*/
}