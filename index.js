// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
  }
  function findMatching(drivers, name) {
    return drivers.filter(function (firstLetter) {
      return firstLetter[0] === name[0];
    });
  }
