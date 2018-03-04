var config = {
    apiKey: 'AIzaSyBJlRXW9O6aAGBcZOvTMpiJUU6aOSc8STc',
	authDomain: 'linguine-coin.firebaseapp.com',
	databaseURL: 'https://linguine-coin.firebaseio.com',
	projectId: 'linguine-coin',
	storageBucket: 'linguine-coin.appspot.com',
	messagingSenderId: '244166940420',
};
firebase.initializeApp(config);
var oldUser;
var newUser;
var currentUserId;
var inputs;
var updatesList;
function signMeIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        alert(error);
    }).then(function() {
        console.log(firebase.auth().currentUser.uid);
        document.getElementById('hide').style.display = 'none';
    });
}
firebase.database().ref().once('value').then(function(snapshot) {
    updatesList = snapshot.val() || 'Anonymous';
    document.getElementById('li1').innerHTML = updatesList.Recents.update;
});
firebase.database().ref('Users').once('value').then(function(snapshot) {
    oldUser = snapshot.val() || 'Anonymous';
    document.getElementById('luke-coins').innerHTML = oldUser.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins.toString() + ' Linguine Coins';
    document.getElementById('eamon-coins').innerHTML = oldUser.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.coins.toString() + ' Linguine Coins';
    document.getElementById('nathan-coins').innerHTML = oldUser.V9dkluL27TXX2xeAYKRAmULEWvS2.coins.toString() + ' Linguine Coins';
    document.getElementById('paul-coins').innerHTML = oldUser.Sfe4CqdALEZq2oqgyEHb3KousEJ2.coins.toString() + ' Linguine Coins';
    document.getElementById('jason-coins').innerHTML = oldUser.Nu3BMirKtKUziXS3nhDLtJraxOz1.coins.toString() + ' Linguine Coins';
    document.getElementById('gavin-coins').innerHTML = oldUser.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.coins.toString() + ' Linguine Coins';
    document.getElementById('chance-coins').innerHTML = oldUser.X91iiHJqAucY1cAGhoCTo3Tq1ch1.coins.toString() + ' Linguine Coins';
    document.getElementById('carson-coins').innerHTML = oldUser.L9oJ18itmrOXOAi4vhf6ahDHhHw1.coins.toString() + ' Linguine Coins';
    document.getElementById('luke-V-coins').innerHTML = oldUser.C1Scy9IyO5On0iVmzBkcoiyFDlb2.coins.toString() + ' Linguine Coins';
    document.getElementById('gavin-R-coins').innerHTML = oldUser.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.coins.toString() + ' Linguine Coins';
    document.getElementById('tyler-coins').innerHTML = oldUser.j8h8tvQktlPmx4VioSplYmdpPmI2.coins.toString() + ' Linguine Coins';
    document.getElementById('liam-coins').innerHTML = oldUser.gnqvhAXj6YgCwmOlErvwEMtLAHX2.coins.toString() + ' Linguine Coins';
    document.getElementById('niko-coins').innerHTML = oldUser.DC2R4iIL67fkA6MrWubB3OOG0lS2.coins.toString() + ' Linguine Coins';
    document.getElementById('jacob-coins').innerHTML = oldUser.wzRqMSjNwqOtfk49jP849GCIYn63.coins.toString() + ' Linguine Coins';
});
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		console.log(firebase.auth().currentUser.uid);
		document.getElementById('hide').style.display = 'none';
        document.getElementById('hidden').style.display = 'block';
        firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            newUser = snapshot.val() || 'Anonymous';
            document.getElementById('linguine-coins-my').innerHTML = newUser.coins.toString() + ' Linguine Coins';
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
	if (currentUserId == 'Nv7UcjC551hX9cXLJ0aXhoINAKL2') {
        document.getElementById('luke-div').style.display = 'none';
    } else if (currentUserId == 'gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2') {
		document.getElementById('eamon-div').style.display = 'none';
	} else if (currentUserId == 'V9dkluL27TXX2xeAYKRAmULEWvS2') {
		document.getElementById('nathan-div').style.display = 'none';
	} else if (currentUserId == 'Sfe4CqdALEZq2oqgyEHb3KousEJ2') {
		document.getElementById('paul-div').style.display = 'none';
	} else if (currentUserId == 'Nu3BMirKtKUziXS3nhDLtJraxOz1') {
		document.getElementById('jason-div').style.display = 'none';
	} else if (currentUserId == 'Y6Gda6VmfmXewW2IWg7r4KXVE4M2') {
		document.getElementById('gavin-div').style.display = 'none';
	} else if (currentUserId == 'X91iiHJqAucY1cAGhoCTo3Tq1ch1') {
		document.getElementById('chance-div').style.display = 'none';
	} else if (currentUserId == 'L9oJ18itmrOXOAi4vhf6ahDHhHw1') {
		document.getElementById('carson-div').style.display = 'none';
	} else if (currentUserId == 'C1Scy9IyO5On0iVmzBkcoiyFDlb2') {
		document.getElementById('luke-V-div').style.display = 'none';
	} else if (currentUserId == 'fvztzfsKtgRnDCqrtrwbqv1uDJZ2') {
  		document.getElementById('gavin-R-div').style.display = 'none';
	} else if (currentUserId == 'j8h8tvQktlPmx4VioSplYmdpPmI2') {
  		document.getElementById('tyler-div').style.display = 'none';
	} else if (currentUserId == 'gnqvhAXj6YgCwmOlErvwEMtLAHX2') {
  		document.getElementById('liam-div').style.display = 'none';
	} else if (currentUserId == 'DC2R4iIL67fkA6MrWubB3OOG0lS2') {
        document.getElementById('niko-div').style.display = 'none';
	} else if(currentUserId == 'wzRqMSjNwqOtfk49jP849GCIYn63') {
        document.getElementById('jacob-div').style.display = 'none';
    }
}
function toLuke() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins;
    var forDescription = document.getElementById('luke-for').value;
	var newAmount = parseInt(document.getElementById('luke-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'Nv7UcjC551hX9cXLJ0aXhoINAKL2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Luke S for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toEamon() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.coins;
    var forDescription = document.getElementById('eamon-for').value;
	var newAmount = parseInt(document.getElementById('eamon-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Eamon for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toNathan() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.V9dkluL27TXX2xeAYKRAmULEWvS2.coins;
    var forDescription = document.getElementById('nathan-for').value;
	var newAmount = parseInt(document.getElementById('nathan-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'V9dkluL27TXX2xeAYKRAmULEWvS2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Nathan for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toPaul() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.Sfe4CqdALEZq2oqgyEHb3KousEJ2.coins;
    var forDescription = document.getElementById('paul-for').value;
	var newAmount = parseInt(document.getElementById('paul-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'Sfe4CqdALEZq2oqgyEHb3KousEJ2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Paul for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toJason() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.Nu3BMirKtKUziXS3nhDLtJraxOz1.coins;
    var forDescription = document.getElementById('jason-for').value;
	var newAmount = parseInt(document.getElementById('jason-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'Nu3BMirKtKUziXS3nhDLtJraxOz1').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Jason for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toGavin() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.coins;
    var forDescription = document.getElementById('gavin-for').value;
	var newAmount = parseInt(document.getElementById('gavin-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'Y6Gda6VmfmXewW2IWg7r4KXVE4M2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Gavin Z for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toChance() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.X91iiHJqAucY1cAGhoCTo3Tq1ch1.coins;
    var forDescription = document.getElementById('chance-for').value;
	var newAmount = parseInt(document.getElementById('chance-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'X91iiHJqAucY1cAGhoCTo3Tq1ch1').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Chance for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toCarson() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.L9oJ18itmrOXOAi4vhf6ahDHhHw1.coins;
    var forDescription = document.getElementById('carson-for').value;
	var newAmount = parseInt(document.getElementById('carson-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'L9oJ18itmrOXOAi4vhf6ahDHhHw1').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Carson for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toLukeV() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.C1Scy9IyO5On0iVmzBkcoiyFDlb2.coins;
    var forDescription = document.getElementById('luke-V-for').value;
	var newAmount = parseInt(document.getElementById('luke-V-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'C1Scy9IyO5On0iVmzBkcoiyFDlb2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Luke V for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toGavinR() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.coins;
    var forDescription = document.getElementById('gavin-R-for').value;
	var newAmount = parseInt(document.getElementById('gavin-R-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'fvztzfsKtgRnDCqrtrwbqv1uDJZ2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Gavin R for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toTyler() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.j8h8tvQktlPmx4VioSplYmdpPmI2.coins;
    var forDescription = document.getElementById('tyler-for').value;
	var newAmount = parseInt(document.getElementById('tyler-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'j8h8tvQktlPmx4VioSplYmdpPmI2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Tyler for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toLiam() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.gnqvhAXj6YgCwmOlErvwEMtLAHX2.coins;
    var forDescription = document.getElementById('liam-for').value;
	var newAmount = parseInt(document.getElementById('liam-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'gnqvhAXj6YgCwmOlErvwEMtLAHX2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Liam for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toNiko() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.DC2R4iIL67fkA6MrWubB3OOG0lS2.coins;
    var forDescription = document.getElementById('niko-for').value;
	var newAmount = parseInt(document.getElementById('niko-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'DC2R4iIL67fkA6MrWubB3OOG0lS2').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Niko for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toJacob() {
	var currentUserId = firebase.auth().currentUser.uid;
	var lukesCoins = oldUser.wzRqMSjNwqOtfk49jP849GCIYn63.coins;
    var forDescription = document.getElementById('jacob-for').value;
	var newAmount = parseInt(document.getElementById('jacob-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'wzRqMSjNwqOtfk49jP849GCIYn63').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Jacob for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}