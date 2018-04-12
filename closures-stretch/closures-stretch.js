var wrapLog = function (callback, name) {
  /* your code here */

  // if (name == "area") {
  //   return function(x,y) {
  //     console.log(callback(x,y));
  //   }
  // }
  // if (name == "volume") {
  //   return function(a,b,c) {
  //     console.log(callback(a,b,c));
  //   }
  // }

  // return function(x,y,z) {
  //   console.log(callback(x,y,z));
  // }

  return function(...xyz) {
    console.log(callback(...xyz));
    console.log(xyz[0]);
    console.log(xyz[1]);
    console.log(xyz[2]);
  }

};

//////////////////////////////////////////////////////

var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

///////////////////////////////////////////////////////

var volume = function (x, y, z) {
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

// console.log(volume(5, 3, 2));