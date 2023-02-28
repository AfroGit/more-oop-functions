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

function checkObj(obj, checkProp) {
  
if (obj.hasOwnProperty(checkProp)){//We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name.
  
  return obj[checkProp]

} else {
  return "Not Found";
}

};


//console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));

// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"))