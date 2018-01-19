// var shoppingList = ["milk", "eggs", "banana", "oranges", "apples"];
// var length = shoppingList.length;

// for (var index = 0; index <= length; index++) {
//   console.log("i am at the index " + index + "the element is " +
//     shoppingList[index])
// }

// function mutiplicationTable (number) {

//   for(var index=1; index <=10; index++){
//     console.log(number + "*" +index + "=" +number * index);
//   }
// }

// console.log(mutiplicationTable(5));


var person = {
  name: "James Bond",
  gender: "male",
  age: 35,
  height: 6,
  whichJamesBond: "D.C",
  codeName: 007,
  killing: function (name){
    return "Done!" 
  },
  orderSpecialDrink: function (drink){
    return "Martini, Shaken not strid";
  },
  saveTheWorld: function (){
    return "I did it, M!"
  },
  completeAmission: function(mission) {
    return mission + "completed";
  }
}


var hotel = {
  name: "The Quay",
  totalRooms: 40,
  bookedRoom: 25,
  typesOfRooms: ["twin", "double", "suite"],
  checkAvailability: function (){
    return "Done!" 
  },
}

for (var i = 0, i < totalRooms; i++){
console.log(hotel)
}