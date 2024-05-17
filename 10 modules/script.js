// var harry = 'potter'; 
// var voldemort = 'He who must not be named'; 

// function fight(char1, char2) {
//     var attack1 = Math.floor(Math.random() * char1.length);
//     var attack2 = Math.floor(Math.random() * char2.length); 
//     console.log(attack1);
//     return attack1 > attack2 ? `${char1} wins` : `${char2} wins`; 
// }

// fight(harry, voldemort);

/////////////////////////////////////////////////////////////////
// var user = {};
// function signin(user) {
//     var textfield = 'hehehe'; 
// }

// function isHuman(user) {

// }

// tight coupling

///////////////////////////////////////////////////////////////
// IIFE
// Module Pattern 
var fightModule = (function() {
    var harry = 'potter'; 
    var voldemort = 'He who must not be named'; 

    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length); 
        console.log(attack1);
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`; 
    }

    // console.log(fight(harry, voldemort));
    return {
        fight: fight
    }
})()