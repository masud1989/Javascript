// Problem 1: ana to vori
function anaToVori (ana){
    var vori = ana / 16;
    return vori;
}

var resultvori = anaToVori(30);
console.log(resultvori);


// Problem 2: Panda Cost
function pandaCost(singara, samucha, jilapi){
    var singaraCost = singara*7;
    var samuchaCost = samucha*10;
    var jilapiCost = jilapi*15;
    var totalCost = singaraCost + samuchaCost + jilapiCost;
    return totalCost;
}
var totalCost = pandaCost(2,1,3);
console.log(totalCost);


// Problem 3: Picnic Budget
function picnicBudget(participants){
    const firstRate = 5000;
    const secondRate = 4000;
    const thirdRate = 3000;
    if (participants <= 100 ){
        const firtOptionBudget = participants * firstRate;
        return firtOptionBudget;
    }
    else if (participants<=200){
        const firstOptionBudget = 100 * firstRate;
        const secondParticipants = participants - 100;
        const secondOptionBudget = secondParticipants * secondRate;
        const secondOptionBudgetTotal = firstOptionBudget + secondOptionBudget;
        return secondOptionBudgetTotal;
    }
    else if (participants >= 201){
        const firstOptionParticipants = 100;
        const secondOptionParticipants = 100;

        const firstOptionBudget = 100 * firstRate;
        const secondOptionBudget = secondOptionParticipants * secondRate;
        const thirdOptionParticipants = participants - firstOptionParticipants - secondOptionParticipants;
        const thirdOptionBudget = thirdOptionParticipants * thirdRate;
        const thirdOptionBudgetTotal = firstOptionBudget + secondOptionBudget + thirdOptionBudget;
        return thirdOptionBudgetTotal;
    }
    else{
        return "Error"
    }
}

 var totalBudget = picnicBudget(299);
 console.log(totalBudget);


 
// Problem 4: Odd Friend
 const friendArray = [ "Polash", "Rubel", "Shohel", "Poley", "Moley", "Koney", "Sonya"];
function oddFriend(friendArray) {
    for (let i = 0; i < friendArray.length; i++) {
      if (friendArray[i].length % 2 != 0) {
        return friendArray[i];
      }
    }
  }
//   const friendArray = [ "Polash", "Rubel", "Shohel", "Poley", "Moley", "Koney", "Sonya"];
  const myFriend = oddFriend(friendArray);
  console.log(myFriend);