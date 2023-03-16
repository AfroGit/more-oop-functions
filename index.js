// Two functions – one object
// importance: 2

// Is it possible to create functions A and B so that new A() == new B()?
// let obj = {}
//  function A() { return obj; }
//  function B() { return obj; }

//  let a = new A();
//  let b = new B();

//  console.log( a == b ); // true

// If it is, then provide an example of their code.


/*Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found". */ 

// function checkObj(obj, checkProp) {
  
// if (obj.hasOwnProperty(checkProp)){//We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name.
  
//   return obj[checkProp]

// } else {
//   return "Not Found";
// }

// };


//console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));

// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));

/*Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation. */ 


// const myStorage = {
//   car: {
//     inside: {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//     },
//     outside: {
//       trunk: "jack"
//     }
//   }
// };
// const gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);


/*Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object. */ 


// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree = myPlants[1].list[1];
// console.log(secondTree);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ------------------------------------------------------

/*Define a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory. */ 

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  
return foods[scannedItem];
  
}

console.log(checkInventory("apples"));

 