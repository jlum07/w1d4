// var array = [10, 2, 5, 1, 9];
// array.sort((a,b) => a - b);

// console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// var students = [
//   { id: 1, name: "bruce",    age: 40 }, //a
//   { id: 2, name: "zoidberg", age: 22 }, //b
//   { id: 3, name: "alex",     age: 2 },
//   { id: 4, name: "rob",     age: 30 }
// ];

students.sort(function(a,b) {

  // console.log(students);

  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  }

  if (a.age > b.age) {
    return -1;
  } else if (a.age < b.age) {
    return 1;
  }

  return 0;
});



console.log(students);
