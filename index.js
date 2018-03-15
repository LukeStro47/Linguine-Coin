//xp;VW%7A'EGUHFHN
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
var duoy;
var checkTwso;
var duoyTwo;
var competitors;
var userTwoOld;
var ncaaUser;
var overallUser;
var betUser;
var newBetUser;
var newBetUserTwo;
//var onlineUser = firebase.auth().currentUser.uid;
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
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
firebase.database().ref('NCAA').once('value').then(function(snapshot) {
    ncaaUser = snapshot.val().pot || 'Anonymous';
    document.getElementById('currentPot').innerHTML = 'Current Pot: ' + ncaaUser.toString() + ' Linguine Coins';
});
function checkNCAA() {
    firebase.database().ref('Competition/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
        competitors = snapshot.val() || 'Anonymous';
        if(competitors.signedUp == true) {
            document.getElementById('joinNCAA').style.display = "none";
            document.getElementById('joinNCAAR').style.display = "block";
        }
    });
}
firebase.database().ref().once('value').then(function(snapshot) {
    overallUser = snapshot.val() || 'Anonymous';
    if(overallUser.Pot != null) {
        if(overallUser.Pot.password == null) {
            document.getElementById('pot').style.display = "none";
            document.getElementById('potTwo').style.display = "block";
            document.getElementById('pot-name-two').innerHTML = overallUser.Pot.potName;
            document.getElementById('pot-total').innerHTML = 'Current Pot: ' + overallUser.PotCoins.pot.toString() + ' Linguine Coins';
        } else {
            document.getElementById('pot').style.display = "none";
            document.getElementById('potThree').style.display = "block";
            document.getElementById('pot-name-three').innerHTML = "Join Private Pot With Password";
        }
    } else {
        document.getElementById('pot').style.display = "block";
        document.getElementById('potThree').style.display = "none";
    }
});
firebase.database().ref('Users').once('value').then(function(snapshot) {
    oldUser = snapshot.val() || 'Anonymous';
});
firebase.database().ref().once('value').then(function(snapshot) {
    betUser = snapshot.val() || 'Anonymous';
    if(betUser.BetGame != null) {
        document.getElementById('pOne').innerHTML = betUser.BetGame.OverallBetOne.bet + ' Linguine Coins Bet';
        document.getElementById('pTwo').innerHTML = betUser.BetGame.OverallBetTwo.bet + ' Linguine Coins Bet';
        firebase.database().ref('BetGame/' + 'Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var saveBetCheck = snapshot.val() || 'Anonymous';
            document.getElementById('pOneOne').innerHTML = 'You\'re Bet: ' + saveBetCheck.teamOne.bet + ' Linguine Coins';
            document.getElementById('pTwoTwo').innerHTML = 'You\'re Bet: ' + saveBetCheck.teamTwo.bet + ' Linguine Coins';
        });
        if(firebase.auth().currentUser.uid == "Nv7UcjC551hX9cXLJ0aXhoINAKL2" || firebase.auth().currentUser.uid == "Y6Gda6VmfmXewW2IWg7r4KXVE4M2" || firebase.auth().currentUser.uid == "Nu3BMirKtKUziXS3nhDLtJraxOz1") {
            document.getElementById('portalThree').style.display = "block";
            document.getElementById('portalTwo').style.display = "block";
        }
    } else {
        if(firebase.auth().currentUser.uid == "Nv7UcjC551hX9cXLJ0aXhoINAKL2" || firebase.auth().currentUser.uid == "Y6Gda6VmfmXewW2IWg7r4KXVE4M2" || firebase.auth().currentUser.uid == "Nu3BMirKtKUziXS3nhDLtJraxOz1") {
            document.getElementById('portal').style.display = "block";
            document.getElementById('portalTwo').style.display = "none";
            document.getElementById('portalThree').style.display = "none";
        }
    }
});
firebase.database().ref('Users').once('value').then(function(snapshot) {
    userTwoOld = snapshot.val() || 'Anonymous';
    document.getElementById('luke-coins').innerHTML = userTwoOld.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins.toString() + ' Linguine Coins';
    document.getElementById('eamon-coins').innerHTML = userTwoOld.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.coins.toString() + ' Linguine Coins';
    document.getElementById('nathan-coins').innerHTML = userTwoOld.V9dkluL27TXX2xeAYKRAmULEWvS2.coins.toString() + ' Linguine Coins';
    document.getElementById('paul-coins').innerHTML = userTwoOld.Sfe4CqdALEZq2oqgyEHb3KousEJ2.coins.toString() + ' Linguine Coins';
    document.getElementById('jason-coins').innerHTML = userTwoOld.Nu3BMirKtKUziXS3nhDLtJraxOz1.coins.toString() + ' Linguine Coins';
    document.getElementById('gavin-coins').innerHTML = userTwoOld.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.coins.toString() + ' Linguine Coins';
    document.getElementById('chance-coins').innerHTML = userTwoOld.X91iiHJqAucY1cAGhoCTo3Tq1ch1.coins.toString() + ' Linguine Coins';
    document.getElementById('carson-coins').innerHTML = userTwoOld.L9oJ18itmrOXOAi4vhf6ahDHhHw1.coins.toString() + ' Linguine Coins';
    document.getElementById('luke-V-coins').innerHTML = userTwoOld.C1Scy9IyO5On0iVmzBkcoiyFDlb2.coins.toString() + ' Linguine Coins';
    document.getElementById('gavin-R-coins').innerHTML = userTwoOld.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.coins.toString() + ' Linguine Coins';
    document.getElementById('tyler-coins').innerHTML = userTwoOld.j8h8tvQktlPmx4VioSplYmdpPmI2.coins.toString() + ' Linguine Coins';
    document.getElementById('liam-coins').innerHTML = userTwoOld.gnqvhAXj6YgCwmOlErvwEMtLAHX2.coins.toString() + ' Linguine Coins';
    document.getElementById('niko-coins').innerHTML = userTwoOld.DC2R4iIL67fkA6MrWubB3OOG0lS2.coins.toString() + ' Linguine Coins';
    document.getElementById('jacob-coins').innerHTML = userTwoOld.wzRqMSjNwqOtfk49jP849GCIYn63.coins.toString() + ' Linguine Coins';
    document.getElementById('jackie-coins').innerHTML = userTwoOld.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.coins.toString() + ' Linguine Coins';
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
        startPotCheck();
        checkNCAA();
        checkBetUser();
	} else {
		// User is signed out.
	}
});
function checkBetUser() {
    document.getElementById('portalThree').style.display = "block";
    firebase.database().ref().once('value').then(function(snapshot) {
        newBetUser = snapshot.val() || 'Anonymous';
        console.log(newBetUser.BetGame.allOne);
        if(newBetUser.BetGame != null) {
            document.getElementById('currentGame').innerHTML = newBetUser.BetGame.gameName + ' - ' + newBetUser.BetGame.date + ' ' + '(' + newBetUser.BetGame.time + ')';
            document.getElementById('teamOneH').innerHTML = newBetUser.BetGame.allOne;
            document.getElementById('teamTwoH').innerHTML = newBetUser.BetGame.allTwo;
            if(newBetUser.BetGame.Able.accepting == false) {
                document.getElementById('teamOneBet').style.display = "none";
                document.getElementById('teamTwoBet').style.display = "none";
                document.getElementById('oneButton').style.display = "none";
                document.getElementById('twoButton').style.display = "none";
            }
        }
    });
}
function startPotCheck() {
    firebase.database().ref().once('value').then(function(snapshot) {
        duoyTwo = snapshot.val() || 'Anonymous';
        checkTwo();
        checkThree();
    });
}
function checkTwo() {
    firebase.database().ref('PotPlayers/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
        checkTwso = snapshot.val() || 'Anonymous';
        if(checkTwso.joined == true) {
            document.getElementById('pot').style.display = "none";
            document.getElementById('potThree').style.display = "none";
            document.getElementById('potTwo').style.display = "block";
            document.getElementById('pot-name-two').innerHTML = duoyTwo.Pot.potName;
            document.getElementById('pot-total').innerHTML = 'Current Pot: ' + duoyTwo.PotCoins.pot.toString() + ' Linguine Coins';
        }
    });
}
function checkThree() {
    if(duoyTwo.Pot.creator == firebase.auth().currentUser.uid) {
        document.getElementById('pot').style.display = "none";
        document.getElementById('potThree').style.display = "none";
        document.getElementById('potTwo').style.display = "block";
        document.getElementById('hide-input').style.display = "block";
        document.getElementById('hide-button').style.display = "block";
        document.getElementById('pot-name-two').innerHTML = duoyTwo.Pot.potName;
        document.getElementById('pot-total').innerHTML = 'Current Pot: ' + duoyTwo.PotCoins.pot.toString() + ' Linguine Coins';
    }
}
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
    } else if(currentUserId == 'Qjn14k2LUYaYYrIxAQlZkRVa6fC3') {
        document.getElementById('jackie-div').style.display = 'none';
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
function toJackie() {
	var currentUserId = firebase.auth().currentUser.uid;
    var lukesCoins = oldUser.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.coins;
    var forDescription = document.getElementById('jackie-for').value;
	var newAmount = parseInt(document.getElementById('jackie-number').value);
	var setUserTo = lukesCoins + newAmount;
	var setUserFrom;
	var currentUserCoins;
    var updates;
	if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            setUserFrom = snapshot.val().coins || 'Anonymous';
        });
		//Add to Luke
		firebase.database().ref('Users/' + 'Qjn14k2LUYaYYrIxAQlZkRVa6fC3').set({
			coins: setUserTo
		});
        firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
            currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
            var currentCoins = currentUserCoins - newAmount;
            firebase.database().ref('Users/' + currentUserId).set({
                coins: currentCoins
            });
        });
        var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Jackie for " + forDescription + ".";
        firebase.database().ref('Recents/').once('value').then(function(snapshot) {
            updates = snapshot.val() || 'Anonymous';
            firebase.database().ref('Recents/').set({
                update: stringForDescription
            });
        });
        location.reload();
    }
}
function toDatabase() {
    firebase.database().ref('Price is Right/' + firebase.auth().currentUser.uid).set({
        guess: document.getElementById('modalInput').value
    });
    modal.style.display = "none";
}
function runJoinNCAA() {
    var goat;
    var goatCoins;
    var save;
    var saveDis;
    firebase.database().ref('Competition/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
        saveDis = snapshot.val() || 'Anonymous';
        console.log(saveDis);
        if(saveDis.signedUp == null) {
            firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
                goat = snapshot.val() || 'Anonymous';
                firebase.database().ref('NCAA/').once('value').then(function(snapshot) {
                    goatCoins = snapshot.val();
                    var remember = goatCoins.pot;
                    var final = remember + 20;
                    firebase.database().ref('NCAA').set({
                        pot: final
                    });
                });
                firebase.database().ref('Competition/' + firebase.auth().currentUser.uid).set({
                    signedUp: true
                });
                firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
                    coins: goat.coins - 20
                });
                location.replace("https://bracketchallenge.ncaa.com/picks/group/735352?iid=bcg_share_web_other_group_copy");
            });
        }/* else {
            alert("You have already signed up. Redirecting you to the bracket page now.");
            location.replace("https://bracketchallenge.ncaa.com/picks/group/735352?iid=bcg_share_web_other_group_copy");
        }*/
    });
}
function createPot() {
    var potPassword;
    var potName = document.getElementById('pot-name').value;
    var check = false;
    if(document.getElementById('pot-password').value != "" || document.getElementById('pot-password').value != null) {
        potPassword = document.getElementById('pot-password').value;
        if(potPassword == "") {
            check = true;
        }
    }
    var potCoins = parseInt(document.getElementById('pot-coins').value);
    var goAt;
    var goAtCoins;
    firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
        goAt = snapshot.val() || 'Anonymous';
        //firebase.database().ref('Pot/' + 'Coins').once('value').then(function(snapshot) {
            //goAtCoins = snapshot.val();
            //var remember = goAtCoins.pot;
            //var final = remember + potCoins.parseInt();
        //});
        if(potCoins > 0 && check == true) {
            firebase.database().ref('Pot/').set({
                creator: firebase.auth().currentUser.uid,
                potName: potName,
                coinsEntry: potCoins
            });
        } else if(potCoins > 0 && check != true) {
            firebase.database().ref('Pot/').set({
                creator: firebase.auth().currentUser.uid,
                potName: potName,
                coinsEntry: potCoins,
                password: potPassword
            });
        }
        firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
            coins: goAt.coins - potCoins
        });
    });
    firebase.database().ref('Pot' + 'Coins').set({
        pot: potCoins
    });
    firebase.database().ref('PotPlayers/' + firebase.auth().currentUser.uid).set({
        joined: true
    });
}
function potPassword() {
    var inputPass = document.getElementById('pot-pass').value;
    var save;
    var saveInput;
    firebase.database().ref().once('value').then(function(snapshot) {
        save = snapshot.val();
        var saveEntry = save.PotCoins.pot + save.Pot.coinsEntry;
        if(inputPass == save.Pot.password) {
            document.getElementById('pot').style.display = "none";
            document.getElementById('potThree').style.display = "none";
            document.getElementById('potTwo').style.display = "block";
            document.getElementById('pot-name-two').innerHTML = save.Pot.potName;
            document.getElementById('pot-total').innerHTML = 'Current Pot: ' + save.PotCoins.pot.toString() + ' Linguine Coins';
            firebase.database().ref('PotPlayers/' + firebase.auth().currentUser.uid).set({
                joined: true
            });
            firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
                saveInput = snapshot.val();
                firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
                    coins: saveInput.coins - save.Pot.coinsEntry
                });
            });
            firebase.database().ref('PotCoins').set({
                pot: saveEntry
            });
        } else {
            alert("Wrong Password");
        }
    });
}
function endPot() {
    var endAddress = document.getElementById('hide-input').value;
    var coinsValue;
    var newCoinsValue;
    firebase.database().ref('Users/' + endAddress).once('value').then(function(snapshot) {
        coinsValue = snapshot.val();
        firebase.database().ref().once('value').then(function(snapshot) {
            newCoinsValue = snapshot.val();
            var holdValue = newCoinsValue.PotCoins.pot + coinsValue.coins;
            firebase.database().ref('Users/' + endAddress).set({
                coins: holdValue
            });
            finalizeRemove();
        });
    });
}
function finalizeRemove() {
    firebase.database().ref('Pot').remove();
    firebase.database().ref('PotCoins').remove();
    firebase.database().ref('PotPlayers').remove();
    location.reload();
}
function openNCAA() {
    location.replace("https://bracketchallenge.ncaa.com/picks/group/735352?iid=bcg_share_web_other_group_copy");
}
function submitStartBet() {
    var teamOne = document.getElementById('teamOneCity').value + ' ' + document.getElementById('teamOne').value;
    var teamTwo = document.getElementById('teamTwoCity').value + ' ' + document.getElementById('teamTwo').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    firebase.database().ref('BetGame').set({
        allOne: teamOne,
        allTwo: teamTwo,
        gameName: teamOne + ' ' + 'vs.' + ' ' + teamTwo,
        date: date,
        time: time
    });
    firebase.database().ref('BetGame/' + 'Able').set({
        accepting: true
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Nv7UcjC551hX9cXLJ0aXhoINAKL2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Nv7UcjC551hX9cXLJ0aXhoINAKL2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'V9dkluL27TXX2xeAYKRAmULEWvS2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'V9dkluL27TXX2xeAYKRAmULEWvS2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Sfe4CqdALEZq2oqgyEHb3KousEJ2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Sfe4CqdALEZq2oqgyEHb3KousEJ2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Nu3BMirKtKUziXS3nhDLtJraxOz1/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Nu3BMirKtKUziXS3nhDLtJraxOz1/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Y6Gda6VmfmXewW2IWg7r4KXVE4M2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Y6Gda6VmfmXewW2IWg7r4KXVE4M2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'X91iiHJqAucY1cAGhoCTo3Tq1ch1/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'X91iiHJqAucY1cAGhoCTo3Tq1ch1/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'L9oJ18itmrOXOAi4vhf6ahDHhHw1/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'L9oJ18itmrOXOAi4vhf6ahDHhHw1/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Qjn14k2LUYaYYrIxAQlZkRVa6fC3/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Qjn14k2LUYaYYrIxAQlZkRVa6fC3/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'C1Scy9IyO5On0iVmzBkcoiyFDlb2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'C1Scy9IyO5On0iVmzBkcoiyFDlb2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'fvztzfsKtgRnDCqrtrwbqv1uDJZ2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'fvztzfsKtgRnDCqrtrwbqv1uDJZ2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'j8h8tvQktlPmx4VioSplYmdpPmI2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'j8h8tvQktlPmx4VioSplYmdpPmI2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'gnqvhAXj6YgCwmOlErvwEMtLAHX2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'gnqvhAXj6YgCwmOlErvwEMtLAHX2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'DC2R4iIL67fkA6MrWubB3OOG0lS2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'DC2R4iIL67fkA6MrWubB3OOG0lS2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'wzRqMSjNwqOtfk49jP849GCIYn63/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'wzRqMSjNwqOtfk49jP849GCIYn63/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'OverallBetOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'OverallBetTwo').set({
        bet: 0
    });
    location.reload();
}
function openBets() {
    firebase.database().ref('BetGame/' + 'Able').set({
        accepting: true
    });
    location.reload();
}
function closeBets() {
    firebase.database().ref('BetGame/' + 'Able').set({
        accepting: false
    });
    location.reload();
}
function deleteBets() {
    firebase.database().ref('BetGame').remove();
    location.reload();
}
function teamOneBet() {
    var saveNewBet;
    var bet = parseInt(document.getElementById('teamOneBet').value);
    if(bet > 0){
        firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var userCoinsNow = snapshot.val() || 'Anonymous';
            saveNewBet = userCoinsNow.coins - bet;
            if(saveNewBet > 0) {
                firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
                    coins: saveNewBet
                });
                firebase.database().ref('BetGame/' + 'Users/' + firebase.auth().currentUser.uid + '/' + 'teamOne').once('value').then(function(snapshot) {
                    var currrentBetOwn = snapshot.val() || 'Anonymous';
                    var saveThisValue = currrentBetOwn.bet + bet;
                    firebase.database().ref('BetGame/' + 'Users/' + firebase.auth().currentUser.uid + '/' + 'teamOne').set({
                        bet: saveThisValue
                    });
                });
                firebase.database().ref().once('value').then(function(snapshot) {
                    var saveForGameCheck = snapshot.val() || 'Anonymous';
                    firebase.database().ref('BetGame/' + 'OverallBetOne').once('value').then(function(snapshot) {
                        var intervalTest = snapshot.val() || 'Anonymous';
                        var setThisBetTo = intervalTest.bet + bet;
                        firebase.database().ref('BetGame/' + 'OverallBetOne').set({
                            bet: setThisBetTo
                        });
                    });
                });
            } else {
                alert("Insufficient Funds");
            }
        });
    } else {
        alert("Input must be a positive, whole number.");
    }
}
function teamTwoBet() {
    var saveNewBet;
    var bet = parseInt(document.getElementById('teamTwoBet').value);
    if(bet > 0){
        firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var userCoinsNow = snapshot.val() || 'Anonymous';
            saveNewBet = userCoinsNow.coins - bet;
            if(saveNewBet > 0) {
                firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
                    coins: saveNewBet
                });
                firebase.database().ref('BetGame/' + 'Users/' + firebase.auth().currentUser.uid + '/' + 'teamTwo').once('value').then(function(snapshot) {
                    var currrentBetOwn = snapshot.val() || 'Anonymous';
                    var saveThisValue = currrentBetOwn.bet + bet;
                    firebase.database().ref('BetGame/' + 'Users/' + firebase.auth().currentUser.uid + '/' + 'teamTwo').set({
                        bet: saveThisValue
                    });
                });
                firebase.database().ref().once('value').then(function(snapshot) {
                    var saveForGameCheck = snapshot.val() || 'Anonymous';
                    firebase.database().ref('BetGame/' + 'OverallBetTwo').once('value').then(function(snapshot) {
                        var intervalTest = snapshot.val() || 'Anonymous';
                        var setThisBetTo = intervalTest.bet + bet;
                        firebase.database().ref('BetGame/' + 'OverallBetTwo').set({
                            bet: setThisBetTo
                        });
                    });
                });
            } else {
                alert("Insufficient Funds");
            }
        });
    } else {
        alert("Input must be a positive, whole number.");
    }
}