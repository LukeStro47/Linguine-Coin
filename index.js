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
var userTwoOld;
var ncaaUser;
var overallUser;
var betUser;
var newBetUser;
var newBetUserTwo;
var savedInput;
var newUserTwo;
var d = new Date();
var c;
var nc = d.getMinutes();
var n = d.getDate();
var ne = d.getMonth();
if(nc == 0) {
    nc = "00";
} else if(nc == 1) {
    nc = "01";
} else if(nc == 2) {
    nc = "02";
} else if(nc == 3) {
    nc = "03";
} else if(nc == 4) {
    nc = "04";
} else if(nc == 5) {
    nc = "05";
} else if(nc ==6) {
    nc = "06";
} else if(nc == 7) {
    nc = "07";
} else if(nc == 8) {
    nc = "08";
} else if(nc == 9) {
    nc = "09";
}
var bc = ne.toString() + n.toString();
var y = d.setDate(d.getDate() - 1);
var dt = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var day = dt.getDate();
var month = dt.getMonth();
var year = month.toString() + day.toString();
var newHolster;
/*firebase.database().ref().once('value').then(function(snapshot) {
    var holdValueNew = snapshot.val() || 'Anonymous';
    /*if(holdValueNew.BetGame.Check.newDate.toString() == bc) {
        c = bc;
        checkBetUser();
    } else if(holdValueNew.BetGame.Check.newDate == year) {
        c = year;
        checkBetUser();
    } else if(holdValueNew.BetGame.Check == null) {
        c = ne.toString() + n.toString();
        checkBetUser();
    }
    c = holdValueNew.Check.newDate.toString();
    console.log(holdValueNew.Check.newDate);
    checkBetUser();
});*/
//var onlineUser = firebase.auth().currentUser.uid;
function signMeIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        alert(error);
    }).then(function() {
        console.log(firebase.auth().currentUser.uid);
        document.getElementById('hide').style.display = 'none';
        checkForUser();
        startPotCheck();
        checkNCAA();
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
    ncaaUser = snapshot.val().pot;
    document.getElementById('currentPot').innerHTML = 'Current Pot: ' + ncaaUser.toString() + ' Linguine Coins';
});
function checkNCAA() {
    firebase.database().ref('Competition').once('value').then(function(snapshot) {
        var competitors = snapshot.val();
        if(competitors[firebase.auth().currentUser.uid].signedUp == true) {
            document.getElementById('joinNCAA').style.display = "none";
            document.getElementById('joinNCAAR').style.display = "block";
            console.log("elo");
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
            document.getElementById('join-pot-button').style.display = "block";
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
firebase.database().ref('Price is Right').once('value').then(function(snapshot) {
    var priceIsRight = snapshot.val() || 'Anonymous';
    document.getElementById('nameOfProduct').innerHTML = priceIsRight.name;
    document.getElementById('savePhoto').src = priceIsRight.link;
    console.log(priceIsRight.Guesses);
});
firebase.database().ref().once('value').then(function(snapshot) {
    betUser = snapshot.val() || 'Anonymous';
    document.getElementById('pOne').innerHTML = betUser.BetGame.OverallBetOne.bet + ' Linguine Coins Bet';
    document.getElementById('pTwo').innerHTML = betUser.BetGame.OverallBetTwo.bet + ' Linguine Coins Bet';
    firebase.database().ref('BetGame/' + 'Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
        var saveBetCheck = snapshot.val() || 'Anonymous';
        document.getElementById('pOneOne').innerHTML = 'You\'re Bet: ' + saveBetCheck.teamOne.bet + ' Linguine Coins';
        document.getElementById('pTwoTwo').innerHTML = 'You\'re Bet: ' + saveBetCheck.teamTwo.bet + ' Linguine Coins';
        if(firebase.auth().currentUser.uid == "Nv7UcjC551hX9cXLJ0aXhoINAKL2" || firebase.auth().currentUser.uid == "Y6Gda6VmfmXewW2IWg7r4KXVE4M2" || firebase.auth().currentUser.uid == "Nu3BMirKtKUziXS3nhDLtJraxOz1") {
            document.getElementById('portalThree').style.display = "block";
            document.getElementById('portalTwo').style.display = "block";
            firebase.database().ref('Games/' + c).once('value').then(function(snapshot) {
                var newStuff = snapshot.val() || 'Anonymous';
                document.getElementById('currentGameTwo').innerHTML = newStuff.gameName;
            });
        } else {
            if(firebase.auth().currentUser.uid == "Nv7UcjC551hX9cXLJ0aXhoINAKL2" || firebase.auth().currentUser.uid == "Y6Gda6VmfmXewW2IWg7r4KXVE4M2" || firebase.auth().currentUser.uid == "Nu3BMirKtKUziXS3nhDLtJraxOz1") {
                document.getElementById('portal').style.display = "block";
                document.getElementById('portalTwo').style.display = "none";
                document.getElementById('portalThree').style.display = "none";
            }
        }
    });
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
    document.getElementById('connor-coins').innerHTML = userTwoOld.BXjYVwQA64ZmSJLtKcdsi1IinNr2.coins.toString() + ' Linguine Coins';
    document.getElementById('heggan-coins').innerHTML = userTwoOld.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.coins.toString() + ' Linguine Coins';
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
        firebase.database().ref('BetGame/' + 'Check/').once('value').then(function(snapshot) {
            newUserTwo = snapshot.val();
            console.log(newUserTwo);
            c = newUserTwo.newDate;
            checkBetUser();
        });
        checkForUser();
        startPotCheck();
        checkNCAA();
        //checkBetUser();
        if(firebase.auth().currentUser.uid == "Nv7UcjC551hX9cXLJ0aXhoINAKL2") {
            document.getElementById('manual').style.display = "block";
            document.getElementById('PirInp').style.display = "block";
            document.getElementById('PirBut').style.display = "block";
            document.getElementById('PirName').style.display = "block";
            document.getElementById('PirBut2').style.display = "block";
            document.getElementById('PirBut3').style.display = "block";
        } else {
            document.getElementById('manual').remove();
            document.getElementById('PirInp').remove();
            document.getElementById('PirBut').remove();
            document.getElementById('PirName').remove();
            document.getElementById('PirBut2').remove();
            document.getElementById('PirBut3').remove();
        }
	} else {
		// User is signed out.
	}
});
function checkBetUser() {
    document.getElementById('portalThree').style.display = "block";
    firebase.database().ref('Games/' + c).once('value').then(function(snapshot) {
        newBetUser = snapshot.val() || 'Anonymous';
        console.log(newBetUser.fullTime);
        document.getElementById('currentGame').innerHTML = newBetUser.gameName + ' - ' + newBetUser.date + ' ' + '(' + newBetUser.time + ')';
        document.getElementById('teamOneH').innerHTML = newBetUser.allOne;
        document.getElementById('teamTwoH').innerHTML = newBetUser.allTwo;
        firebase.database().ref().once('value').then(function(snapshot) {
            var newBetUserThree = snapshot.val() || 'Anonymous';
            if(newBetUserThree.BetGame.Able.accepting == false) {
                document.getElementById('teamOneBet').style.display = "none";
                document.getElementById('teamTwoBet').style.display = "none";
                document.getElementById('oneButton').style.display = "none";
                document.getElementById('twoButton').style.display = "none";
            }
        });
        console.log(nc);
        if(newBetUser.fullTime < parseInt(d.getHours().toString() + nc.toString()) && c == bc) {
            firebase.database().ref('BetGame/' + 'Able').set({
                accepting: false
            });
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
            document.getElementById('join-pot-button').style.display = "none";
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
        document.getElementById('join-pot-button').style.display = "none";
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
    } else if(currentUserId == 'BXjYVwQA64ZmSJLtKcdsi1IinNr2') {
        document.getElementById('connor-div').style.display = 'none';
    } else if(currentUserId == 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2') {
        document.getElementById('heggan-div').style.display = 'none';
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
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
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
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
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
}
function toConnor() {
	var currentUserId = firebase.auth().currentUser.uid;
    var lukesCoins = oldUser.BXjYVwQA64ZmSJLtKcdsi1IinNr2.coins;
    var forDescription = document.getElementById('connor-for').value;
	var newAmount = parseInt(document.getElementById('connor-number').value);
	var setUserTo = lukesCoins + newAmount;
    var setUserFrom;
	var currentUserCoins;
    var updates;
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
            if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
                firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
                    setUserFrom = snapshot.val().coins || 'Anonymous';
                });
                //Add to Luke
                firebase.database().ref('Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2').set({
                    coins: setUserTo
                });
                firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
                    currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
                    var currentCoins = currentUserCoins - newAmount;
                    firebase.database().ref('Users/' + currentUserId).set({
                        coins: currentCoins
                    });
                });
                var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Connor for " + forDescription + ".";
                firebase.database().ref('Recents/').once('value').then(function(snapshot) {
                    updates = snapshot.val() || 'Anonymous';
                    firebase.database().ref('Recents/').set({
                        update: stringForDescription
                    });
                });
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
}
function toHeggan() {
	var currentUserId = firebase.auth().currentUser.uid;
    var lukesCoins = oldUser.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.coins;
    var forDescription = document.getElementById('heggan-for').value;
	var newAmount = parseInt(document.getElementById('heggan-number').value);
	var setUserTo = lukesCoins + newAmount;
    var setUserFrom;
	var currentUserCoins;
    var updates;
    var setToTest;
    firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
        setToTest = snapshot.val() || 'Anonymous';
        if(setToTest.coins - newAmount >= 0) {
            if (newAmount > 0 && firebase.auth().currentUser.uid != null) {
                firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
                    setUserFrom = snapshot.val().coins || 'Anonymous';
                });
                //Add to Luke
                firebase.database().ref('Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2').set({
                    coins: setUserTo
                });
                firebase.database().ref('Users/' + currentUserId).once('value').then(function(snapshot) {
                    currentUserCoins = (snapshot.val() && snapshot.val().coins) || 'Anonymous';
                    var currentCoins = currentUserCoins - newAmount;
                    firebase.database().ref('Users/' + currentUserId).set({
                        coins: currentCoins
                    });
                });
                var stringForDescription = currentUserId + " transferred " + newAmount.toString() + " Linguine Coins to Mr. Heggan for " + forDescription + ".";
                firebase.database().ref('Recents/').once('value').then(function(snapshot) {
                    updates = snapshot.val() || 'Anonymous';
                    firebase.database().ref('Recents/').set({
                        update: stringForDescription
                    });
                });
                setTimeout(function () {
                    location.reload();
                }, 3000);
            }
        } else {
            alert("Insufficient Funds");
        }
    });
}
function toDatabase() {
    firebase.database().ref('Price is Right/' + 'Guesses/' + firebase.auth().currentUser.uid).set({
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
                    var final = remember + 80;
                    firebase.database().ref('NCAA').set({
                        pot: final
                    });
                });
                firebase.database().ref('Competition/' + firebase.auth().currentUser.uid).set({
                    signedUp: true
                });
                firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
                    coins: goat.coins - 80
                });
                location.replace("https://nba.com/playoffs/bracketchallenge/#league/standings/12098?code=DXHMCYHZ");
            });
        } else {
            alert("You have already signed up. Redirecting you to the bracket page now.");
            location.replace("https://nba.com/playoffs/bracketchallenge/#league/standings/12098?code=DXHMCYHZ");
        }
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
        if(goAt.coins - potCoins >= 0) {
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
            firebase.database().ref('Pot' + 'Coins').set({
                pot: potCoins
            });
            firebase.database().ref('PotPlayers/' + firebase.auth().currentUser.uid).set({
                joined: true
            });
            setTimeout(function () {
                location.reload();
            }, 3000);
        } else {
            alert("Insufficient Funds");
        }
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
            firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
                saveInput = snapshot.val();
                if(saveInput.coins - save.Pot.coinsEntry >= 0) { 
                    firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
                        coins: saveInput.coins - save.Pot.coinsEntry
                    });
                    firebase.database().ref('PotPlayers/' + firebase.auth().currentUser.uid).set({
                        joined: true
                    });
                    firebase.database().ref('PotCoins').set({
                        pot: saveEntry
                    });
                } else {
                    alert("Insufficient Funds");
                }
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
    setTimeout(function () {
        location.reload();
    }, 3000);
}
function openNCAAT() {
    location.replace("https://bracketchallenge.nhl.com/leagues/linguine-coin?share_league=1");
}
function openNCAA() {
    loaction.replace("https://nba.com/playoffs/bracketchallenge/#league/standings/12098?code=DXHMCYHZ");
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
    firebase.database().ref('BetGame/' + 'Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2/' + 'teamOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2/' + 'teamTwo').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'OverallBetOne').set({
        bet: 0
    });
    firebase.database().ref('BetGame/' + 'OverallBetTwo').set({
        bet: 0
    });
    setTimeout(function () {
        location.reload();
    }, 3000);
}
function teamOneBet() {
    var saveNewBet;
    var bet = parseInt(document.getElementById('teamOneBet').value);
    if(bet > 0){
        firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var userCoinsNow = snapshot.val() || 'Anonymous';
            saveNewBet = userCoinsNow.coins - bet;
            if(saveNewBet >= 0) {
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
    setTimeout(function () {
        location.reload();
    }, 3000);
}
function teamTwoBet() {
    var saveNewBet;
    var bet = parseInt(document.getElementById('teamTwoBet').value);
    if(bet > 0){
        firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var userCoinsNow = snapshot.val() || 'Anonymous';
            saveNewBet = userCoinsNow.coins - bet;
            if(saveNewBet >= 0) {
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
    setTimeout(function () {
        location.reload();
    }, 3000);
}
function payoutBets() {
    firebase.database().ref().once('value').then(function(snapshot) {
        var promptSave = snapshot.val() || 'Anonymous';
        firebase.database().ref('Games/' + c).once('value').then(function(snapshot) {
            var JakePralta = snapshot.val() || 'Anonymous';
            savedInput = prompt("Who won? Enter either " + "\"" + JakePralta.allOne + "\"" + " or " + "\"" + JakePralta.allTwo + "\".");
            if(savedInput == JakePralta.allOne) {
                var checkOne = promptSave.BetGame.Users.Nv7UcjC551hX9cXLJ0aXhoINAKL2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'Nv7UcjC551hX9cXLJ0aXhoINAKL2').set({
                    coins: checkOne + promptSave.Users.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins
                });
                var checkTwo = promptSave.BetGame.Users.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2').set({
                    coins: checkTwo + promptSave.Users.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.coins
                });
                var checkThree = promptSave.BetGame.Users.V9dkluL27TXX2xeAYKRAmULEWvS2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'V9dkluL27TXX2xeAYKRAmULEWvS2').set({
                    coins: checkThree + promptSave.Users.V9dkluL27TXX2xeAYKRAmULEWvS2.coins
                });
                var checkFour = promptSave.BetGame.Users.Sfe4CqdALEZq2oqgyEHb3KousEJ2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'Sfe4CqdALEZq2oqgyEHb3KousEJ2').set({
                    coins: checkFour + promptSave.Users.Sfe4CqdALEZq2oqgyEHb3KousEJ2.coins
                });
                var checkFive = promptSave.BetGame.Users.Nu3BMirKtKUziXS3nhDLtJraxOz1.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'Nu3BMirKtKUziXS3nhDLtJraxOz1').set({
                    coins: checkFive + promptSave.Users.Nu3BMirKtKUziXS3nhDLtJraxOz1.coins
                });
                var checkSix = promptSave.BetGame.Users.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'Y6Gda6VmfmXewW2IWg7r4KXVE4M2').set({
                    coins: checkSix + promptSave.Users.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.coins
                });
                var checkSeven = promptSave.BetGame.Users.X91iiHJqAucY1cAGhoCTo3Tq1ch1.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'X91iiHJqAucY1cAGhoCTo3Tq1ch1').set({
                    coins: checkSeven + promptSave.Users.X91iiHJqAucY1cAGhoCTo3Tq1ch1.coins
                });
                var checkEight = promptSave.BetGame.Users.L9oJ18itmrOXOAi4vhf6ahDHhHw1.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'L9oJ18itmrOXOAi4vhf6ahDHhHw1').set({
                    coins: checkEight + promptSave.Users.L9oJ18itmrOXOAi4vhf6ahDHhHw1.coins
                });
                var checkNine = promptSave.BetGame.Users.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'Qjn14k2LUYaYYrIxAQlZkRVa6fC3').set({
                    coins: checkNine + promptSave.Users.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.coins
                });
                var checkTen = promptSave.BetGame.Users.C1Scy9IyO5On0iVmzBkcoiyFDlb2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'C1Scy9IyO5On0iVmzBkcoiyFDlb2').set({
                    coins: checkTen + promptSave.Users.C1Scy9IyO5On0iVmzBkcoiyFDlb2.coins
                });
                var checkEleven = promptSave.BetGame.Users.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'fvztzfsKtgRnDCqrtrwbqv1uDJZ2').set({
                    coins: checkEleven + promptSave.Users.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.coins
                });
                var checkTwelve = promptSave.BetGame.Users.j8h8tvQktlPmx4VioSplYmdpPmI2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'j8h8tvQktlPmx4VioSplYmdpPmI2').set({
                    coins: checkTwelve + promptSave.Users.j8h8tvQktlPmx4VioSplYmdpPmI2.coins
                });
                var checkThirteen = promptSave.BetGame.Users.gnqvhAXj6YgCwmOlErvwEMtLAHX2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'gnqvhAXj6YgCwmOlErvwEMtLAHX2').set({
                    coins: checkThirteen + promptSave.Users.gnqvhAXj6YgCwmOlErvwEMtLAHX2.coins
                });
                var checkFourteen = promptSave.BetGame.Users.DC2R4iIL67fkA6MrWubB3OOG0lS2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'DC2R4iIL67fkA6MrWubB3OOG0lS2').set({
                    coins: checkFourteen + promptSave.Users.DC2R4iIL67fkA6MrWubB3OOG0lS2.coins
                });
                var checkFifteen = promptSave.BetGame.Users.wzRqMSjNwqOtfk49jP849GCIYn63.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'wzRqMSjNwqOtfk49jP849GCIYn63').set({
                    coins: checkFifteen + promptSave.Users.wzRqMSjNwqOtfk49jP849GCIYn63.coins
                });
                var checkSixteen = promptSave.BetGame.Users.BXjYVwQA64ZmSJLtKcdsi1IinNr2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2').set({
                    coins: checkSixteen + promptSave.Users.BXjYVwQA64ZmSJLtKcdsi1IinNr2.coins
                });
                var checkSeventeen = promptSave.BetGame.Users.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2').set({
                    coins: checkSeventeen + promptSave.Users.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.coins
                });
            } else if(savedInput == JakePralta.allTwo) {
                var checkOne = promptSave.BetGame.Users.Nv7UcjC551hX9cXLJ0aXhoINAKL2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'Nv7UcjC551hX9cXLJ0aXhoINAKL2').set({
                    coins: checkOne + promptSave.Users.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins
                });
                var checkTwo = promptSave.BetGame.Users.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2').set({
                    coins: checkTwo + promptSave.Users.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.coins
                });
                var checkThree = promptSave.BetGame.Users.V9dkluL27TXX2xeAYKRAmULEWvS2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'V9dkluL27TXX2xeAYKRAmULEWvS2').set({
                    coins: checkThree + promptSave.Users.V9dkluL27TXX2xeAYKRAmULEWvS2.coins
                });
                var checkFour = promptSave.BetGame.Users.Sfe4CqdALEZq2oqgyEHb3KousEJ2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'Sfe4CqdALEZq2oqgyEHb3KousEJ2').set({
                    coins: checkFour + promptSave.Users.Sfe4CqdALEZq2oqgyEHb3KousEJ2.coins
                });
                var checkFive = promptSave.BetGame.Users.Nu3BMirKtKUziXS3nhDLtJraxOz1.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'Nu3BMirKtKUziXS3nhDLtJraxOz1').set({
                    coins: checkFive + promptSave.Users.Nu3BMirKtKUziXS3nhDLtJraxOz1.coins
                });
                var checkSix = promptSave.BetGame.Users.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'Y6Gda6VmfmXewW2IWg7r4KXVE4M2').set({
                    coins: checkSix + promptSave.Users.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.coins
                });
                var checkSeven = promptSave.BetGame.Users.X91iiHJqAucY1cAGhoCTo3Tq1ch1.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'X91iiHJqAucY1cAGhoCTo3Tq1ch1').set({
                    coins: checkSeven + promptSave.Users.X91iiHJqAucY1cAGhoCTo3Tq1ch1.coins
                });
                var checkEight = promptSave.BetGame.Users.L9oJ18itmrOXOAi4vhf6ahDHhHw1.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'L9oJ18itmrOXOAi4vhf6ahDHhHw1').set({
                    coins: checkEight + promptSave.Users.L9oJ18itmrOXOAi4vhf6ahDHhHw1.coins
                });
                var checkNine = promptSave.BetGame.Users.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'Qjn14k2LUYaYYrIxAQlZkRVa6fC3').set({
                    coins: checkNine + promptSave.Users.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.coins
                });
                var checkTen = promptSave.BetGame.Users.C1Scy9IyO5On0iVmzBkcoiyFDlb2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'C1Scy9IyO5On0iVmzBkcoiyFDlb2').set({
                    coins: checkTen + promptSave.Users.C1Scy9IyO5On0iVmzBkcoiyFDlb2.coins
                });
                var checkEleven = promptSave.BetGame.Users.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'fvztzfsKtgRnDCqrtrwbqv1uDJZ2').set({
                    coins: checkEleven + promptSave.Users.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.coins
                });
                var checkTwelve = promptSave.BetGame.Users.j8h8tvQktlPmx4VioSplYmdpPmI2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'j8h8tvQktlPmx4VioSplYmdpPmI2').set({
                    coins: checkTwelve + promptSave.Users.j8h8tvQktlPmx4VioSplYmdpPmI2.coins
                });
                var checkThirteen = promptSave.BetGame.Users.gnqvhAXj6YgCwmOlErvwEMtLAHX2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'gnqvhAXj6YgCwmOlErvwEMtLAHX2').set({
                    coins: checkThirteen + promptSave.Users.gnqvhAXj6YgCwmOlErvwEMtLAHX2.coins
                });
                var checkFourteen = promptSave.BetGame.Users.DC2R4iIL67fkA6MrWubB3OOG0lS2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'DC2R4iIL67fkA6MrWubB3OOG0lS2').set({
                    coins: checkFourteen + promptSave.Users.DC2R4iIL67fkA6MrWubB3OOG0lS2.coins
                });
                var checkFifteen = promptSave.BetGame.Users.wzRqMSjNwqOtfk49jP849GCIYn63.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'wzRqMSjNwqOtfk49jP849GCIYn63').set({
                    coins: checkFifteen + promptSave.Users.wzRqMSjNwqOtfk49jP849GCIYn63.coins
                });
                var checkSixteen = promptSave.BetGame.Users.BXjYVwQA64ZmSJLtKcdsi1IinNr2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2').set({
                    coins: checkSixteen + promptSave.Users.BXjYVwQA64ZmSJLtKcdsi1IinNr2.coins
                });
                var checkSeventeen = promptSave.BetGame.Users.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.teamTwo.bet * 2;
                firebase.database().ref('Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2').set({
                    coins: checkSeventeen + promptSave.Users.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.coins
                });
            } else if(savedInput == "Hockey") {
                var checkOne = promptSave.BetGame.Users.Nv7UcjC551hX9cXLJ0aXhoINAKL2.teamTwo.bet;
                firebase.database().ref('Users/' + 'Nv7UcjC551hX9cXLJ0aXhoINAKL2').set({
                    coins: checkOne + promptSave.Users.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins
                });
                var checkTwo = promptSave.BetGame.Users.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.teamTwo.bet;
                firebase.database().ref('Users/' + 'gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2').set({
                    coins: checkTwo + promptSave.Users.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.coins
                });
                var checkThree = promptSave.BetGame.Users.V9dkluL27TXX2xeAYKRAmULEWvS2.teamTwo.bet;
                firebase.database().ref('Users/' + 'V9dkluL27TXX2xeAYKRAmULEWvS2').set({
                    coins: checkThree + promptSave.Users.V9dkluL27TXX2xeAYKRAmULEWvS2.coins
                });
                var checkFour = promptSave.BetGame.Users.Sfe4CqdALEZq2oqgyEHb3KousEJ2.teamTwo.bet;
                firebase.database().ref('Users/' + 'Sfe4CqdALEZq2oqgyEHb3KousEJ2').set({
                    coins: checkFour + promptSave.Users.Sfe4CqdALEZq2oqgyEHb3KousEJ2.coins
                });
                var checkFive = promptSave.BetGame.Users.Nu3BMirKtKUziXS3nhDLtJraxOz1.teamTwo.bet;
                firebase.database().ref('Users/' + 'Nu3BMirKtKUziXS3nhDLtJraxOz1').set({
                    coins: checkFive + promptSave.Users.Nu3BMirKtKUziXS3nhDLtJraxOz1.coins
                });
                var checkSix = promptSave.BetGame.Users.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.teamTwo.bet;
                firebase.database().ref('Users/' + 'Y6Gda6VmfmXewW2IWg7r4KXVE4M2').set({
                    coins: checkSix + promptSave.Users.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.coins
                });
                var checkSeven = promptSave.BetGame.Users.X91iiHJqAucY1cAGhoCTo3Tq1ch1.teamTwo.bet;
                firebase.database().ref('Users/' + 'X91iiHJqAucY1cAGhoCTo3Tq1ch1').set({
                    coins: checkSeven + promptSave.Users.X91iiHJqAucY1cAGhoCTo3Tq1ch1.coins
                });
                var checkEight = promptSave.BetGame.Users.L9oJ18itmrOXOAi4vhf6ahDHhHw1.teamTwo.bet;
                firebase.database().ref('Users/' + 'L9oJ18itmrOXOAi4vhf6ahDHhHw1').set({
                    coins: checkEight + promptSave.Users.L9oJ18itmrOXOAi4vhf6ahDHhHw1.coins
                });
                var checkNine = promptSave.BetGame.Users.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.teamTwo.bet;
                firebase.database().ref('Users/' + 'Qjn14k2LUYaYYrIxAQlZkRVa6fC3').set({
                    coins: checkNine + promptSave.Users.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.coins
                });
                var checkTen = promptSave.BetGame.Users.C1Scy9IyO5On0iVmzBkcoiyFDlb2.teamTwo.bet;
                firebase.database().ref('Users/' + 'C1Scy9IyO5On0iVmzBkcoiyFDlb2').set({
                    coins: checkTen + promptSave.Users.C1Scy9IyO5On0iVmzBkcoiyFDlb2.coins
                });
                var checkEleven = promptSave.BetGame.Users.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.teamTwo.bet;
                firebase.database().ref('Users/' + 'fvztzfsKtgRnDCqrtrwbqv1uDJZ2').set({
                    coins: checkEleven + promptSave.Users.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.coins
                });
                var checkTwelve = promptSave.BetGame.Users.j8h8tvQktlPmx4VioSplYmdpPmI2.teamTwo.bet;
                firebase.database().ref('Users/' + 'j8h8tvQktlPmx4VioSplYmdpPmI2').set({
                    coins: checkTwelve + promptSave.Users.j8h8tvQktlPmx4VioSplYmdpPmI2.coins
                });
                var checkThirteen = promptSave.BetGame.Users.gnqvhAXj6YgCwmOlErvwEMtLAHX2.teamTwo.bet;
                firebase.database().ref('Users/' + 'gnqvhAXj6YgCwmOlErvwEMtLAHX2').set({
                    coins: checkThirteen + promptSave.Users.gnqvhAXj6YgCwmOlErvwEMtLAHX2.coins
                });
                var checkFourteen = promptSave.BetGame.Users.DC2R4iIL67fkA6MrWubB3OOG0lS2.teamTwo.bet;
                firebase.database().ref('Users/' + 'DC2R4iIL67fkA6MrWubB3OOG0lS2').set({
                    coins: checkFourteen + promptSave.Users.DC2R4iIL67fkA6MrWubB3OOG0lS2.coins
                });
                var checkFifteen = promptSave.BetGame.Users.wzRqMSjNwqOtfk49jP849GCIYn63.teamTwo.bet;
                firebase.database().ref('Users/' + 'wzRqMSjNwqOtfk49jP849GCIYn63').set({
                    coins: checkFifteen + promptSave.Users.wzRqMSjNwqOtfk49jP849GCIYn63.coins
                });
                var checkSixteen = promptSave.BetGame.Users.BXjYVwQA64ZmSJLtKcdsi1IinNr2.teamTwo.bet;
                firebase.database().ref('Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2').set({
                    coins: checkSixteen + promptSave.Users.BXjYVwQA64ZmSJLtKcdsi1IinNr2.coins
                });
                var checkOne = promptSave.BetGame.Users.Nv7UcjC551hX9cXLJ0aXhoINAKL2.teamOne.bet;
                firebase.database().ref('Users/' + 'Nv7UcjC551hX9cXLJ0aXhoINAKL2').set({
                    coins: checkOne + promptSave.Users.Nv7UcjC551hX9cXLJ0aXhoINAKL2.coins
                });
                var checkTwo = promptSave.BetGame.Users.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.teamOne.bet;
                firebase.database().ref('Users/' + 'gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2').set({
                    coins: checkTwo + promptSave.Users.gKzFFIGWfxPtqQ1FfV8gpGQ6O7O2.coins
                });
                var checkThree = promptSave.BetGame.Users.V9dkluL27TXX2xeAYKRAmULEWvS2.teamOne.bet;
                firebase.database().ref('Users/' + 'V9dkluL27TXX2xeAYKRAmULEWvS2').set({
                    coins: checkThree + promptSave.Users.V9dkluL27TXX2xeAYKRAmULEWvS2.coins
                });
                var checkFour = promptSave.BetGame.Users.Sfe4CqdALEZq2oqgyEHb3KousEJ2.teamOne.bet;
                firebase.database().ref('Users/' + 'Sfe4CqdALEZq2oqgyEHb3KousEJ2').set({
                    coins: checkFour + promptSave.Users.Sfe4CqdALEZq2oqgyEHb3KousEJ2.coins
                });
                var checkFive = promptSave.BetGame.Users.Nu3BMirKtKUziXS3nhDLtJraxOz1.teamOne.bet;
                firebase.database().ref('Users/' + 'Nu3BMirKtKUziXS3nhDLtJraxOz1').set({
                    coins: checkFive + promptSave.Users.Nu3BMirKtKUziXS3nhDLtJraxOz1.coins
                });
                var checkSix = promptSave.BetGame.Users.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.teamOne.bet;
                firebase.database().ref('Users/' + 'Y6Gda6VmfmXewW2IWg7r4KXVE4M2').set({
                    coins: checkSix + promptSave.Users.Y6Gda6VmfmXewW2IWg7r4KXVE4M2.coins
                });
                var checkSeven = promptSave.BetGame.Users.X91iiHJqAucY1cAGhoCTo3Tq1ch1.teamOne.bet;
                firebase.database().ref('Users/' + 'X91iiHJqAucY1cAGhoCTo3Tq1ch1').set({
                    coins: checkSeven + promptSave.Users.X91iiHJqAucY1cAGhoCTo3Tq1ch1.coins
                });
                var checkEight = promptSave.BetGame.Users.L9oJ18itmrOXOAi4vhf6ahDHhHw1.teamOne.bet;
                firebase.database().ref('Users/' + 'L9oJ18itmrOXOAi4vhf6ahDHhHw1').set({
                    coins: checkEight + promptSave.Users.L9oJ18itmrOXOAi4vhf6ahDHhHw1.coins
                });
                var checkNine = promptSave.BetGame.Users.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.teamOne.bet;
                firebase.database().ref('Users/' + 'Qjn14k2LUYaYYrIxAQlZkRVa6fC3').set({
                    coins: checkNine + promptSave.Users.Qjn14k2LUYaYYrIxAQlZkRVa6fC3.coins
                });
                var checkTen = promptSave.BetGame.Users.C1Scy9IyO5On0iVmzBkcoiyFDlb2.teamOne.bet;
                firebase.database().ref('Users/' + 'C1Scy9IyO5On0iVmzBkcoiyFDlb2').set({
                    coins: checkTen + promptSave.Users.C1Scy9IyO5On0iVmzBkcoiyFDlb2.coins
                });
                var checkEleven = promptSave.BetGame.Users.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.teamOne.bet;
                firebase.database().ref('Users/' + 'fvztzfsKtgRnDCqrtrwbqv1uDJZ2').set({
                    coins: checkEleven + promptSave.Users.fvztzfsKtgRnDCqrtrwbqv1uDJZ2.coins
                });
                var checkTwelve = promptSave.BetGame.Users.j8h8tvQktlPmx4VioSplYmdpPmI2.teamOne.bet;
                firebase.database().ref('Users/' + 'j8h8tvQktlPmx4VioSplYmdpPmI2').set({
                    coins: checkTwelve + promptSave.Users.j8h8tvQktlPmx4VioSplYmdpPmI2.coins
                });
                var checkThirteen = promptSave.BetGame.Users.gnqvhAXj6YgCwmOlErvwEMtLAHX2.teamOne.bet;
                firebase.database().ref('Users/' + 'gnqvhAXj6YgCwmOlErvwEMtLAHX2').set({
                    coins: checkThirteen + promptSave.Users.gnqvhAXj6YgCwmOlErvwEMtLAHX2.coins
                });
                var checkFourteen = promptSave.BetGame.Users.DC2R4iIL67fkA6MrWubB3OOG0lS2.teamOne.bet;
                firebase.database().ref('Users/' + 'DC2R4iIL67fkA6MrWubB3OOG0lS2').set({
                    coins: checkFourteen + promptSave.Users.DC2R4iIL67fkA6MrWubB3OOG0lS2.coins
                });
                var checkFifteen = promptSave.BetGame.Users.wzRqMSjNwqOtfk49jP849GCIYn63.teamOne.bet;
                firebase.database().ref('Users/' + 'wzRqMSjNwqOtfk49jP849GCIYn63').set({
                    coins: checkFifteen + promptSave.Users.wzRqMSjNwqOtfk49jP849GCIYn63.coins
                });
                var checkSixteen = promptSave.BetGame.Users.BXjYVwQA64ZmSJLtKcdsi1IinNr2.teamOne.bet;
                firebase.database().ref('Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2').set({
                    coins: checkSixteen + promptSave.Users.BXjYVwQA64ZmSJLtKcdsi1IinNr2.coins
                });
                var checkSeventeen = promptSave.BetGame.Users.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.teamTwo.bet;
                firebase.database().ref('Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2').set({
                    coins: checkSeventeen + promptSave.Users.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.coins
                });
                var checkSeventeen = promptSave.BetGame.Users.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.teamOne.bet * 2;
                firebase.database().ref('Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2').set({
                    coins: checkSeventeen + promptSave.Users.Djd5m3qVS5RlWfFx2Qe1EzkqEhA2.coins
                });
            } else {
                alert("Invalid Response");
                payoutBets();
            }
        });
        setTimeout(function () {
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
            firebase.database().ref('BetGame/' + 'Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2/' + 'teamOne').set({
                bet: 0
            });
            firebase.database().ref('BetGame/' + 'Users/' + 'BXjYVwQA64ZmSJLtKcdsi1IinNr2/' + 'teamTwo').set({
                bet: 0
            });
            firebase.database().ref('BetGame/' + 'Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2/' + 'teamOne').set({
                bet: 0
            });
            firebase.database().ref('BetGame/' + 'Users/' + 'Djd5m3qVS5RlWfFx2Qe1EzkqEhA2/' + 'teamTwo').set({
                bet: 0
            });
            firebase.database().ref('BetGame/' + 'OverallBetOne').set({
                bet: 0
            });
            firebase.database().ref('BetGame/' + 'OverallBetTwo').set({
                bet: 0
            });
            firebase.database().ref('BetGame/' + 'Able').set({
                accepting: true
            });
            firebase.database().ref('BetGame/' + 'Check').set({
                newDate: year
            });
        }, 2000);
    });
    setTimeout(function () {
        firebase.database().ref('Games/' + c).remove();
        setTimeout(function () {
            location.reload();
        }, 2000);
    }, 4000);
}
function manualTransfer() {
    var from = document.getElementById('from-who').value;
    var to = document.getElementById('to-who').value;
    var forIt = document.getElementById('for-what').value;
    var newCoinsValue = parseInt(document.getElementById('coins-much').value);
    if(from != "B") {
        firebase.database().ref('Users/' + from).once('value').then(function(snapshot) {
            var savedVarSnap = snapshot.val() || 'Anonymous';
            var saveCoinsToValue = savedVarSnap.coins - newCoinsValue;
            firebase.database().ref('Users/' + from).set({
                coins: saveCoinsToValue
            });
        });
        firebase.database().ref('Users/' + to).once('value').then(function(snapshot) {
            var savedVarSnapTwo = snapshot.val() || 'Anonymous';
            var saveCoinsToValueTwo = savedVarSnapTwo.coins + newCoinsValue;
            firebase.database().ref('Users/' + to).set({
                coins: saveCoinsToValueTwo
            });
        });
        firebase.database().ref('Recents').set({
            update: from + " transfered " + newCoinsValue + " Linguine Coins to " + to + " for " + forIt + "."
        });
    } else {
        firebase.database().ref('Users/' + to).once('value').then(function(snapshot) {
            var savedVarSnap = snapshot.val() || 'Anonymous';
            var saveCoinsToValue = savedVarSnap.coins + newCoinsValue;
            firebase.database().ref('Users/' + to).set({
                coins: saveCoinsToValue
            });
        });
        firebase.database().ref('Recents').set({
            update: "The Bank" + " transfered " + newCoinsValue + " Linguine Coins to " + to + " for " + forIt + "."
        });
    }
    setTimeout(function () {
        location.reload();
    }, 3000);
}
function startAgain() {
    firebase.database().ref('Price is Right/' + 'Guesses').remove();
    setTimeout(function () {
        location.reload();
    }, 3000);
}
function addToData() {
    var nameOfProduct = document.getElementById('PirName').value;
    var linkOfProduct = document.getElementById('PirInp').value;
    firebase.database().ref('Price is Right').set({
        name: nameOfProduct,
        link: linkOfProduct
    });
    setTimeout(function () {
        location.reload();
    }, 3000);
}
function joinPotAgain() {
    document.getElementById('join-pot-button').style.display = "none";
    var dopeSave;
    firebase.database().ref().once('value').then(function(snapshot) {
        dopeSave = snapshot.val();
        var saveEntry = dopeSave.PotCoins.pot + dopeSave.Pot.coinsEntry;
        firebase.database().ref('Users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var savedInput = snapshot.val();
            if(savedInput.coins - dopeSave.Pot.coinsEntry >= 0) { 
                firebase.database().ref('Users/' + firebase.auth().currentUser.uid).set({
                    coins: savedInput.coins - dopeSave.Pot.coinsEntry
                });
                firebase.database().ref('PotPlayers/' + firebase.auth().currentUser.uid).set({
                    joined: true
                });
                firebase.database().ref('PotCoins').set({
                    pot: saveEntry
                });
            } else {
                alert("Insufficient Funds");
            }
        });
    });
    setTimeout(function () {
        location.reload();
    }, 3000);
}