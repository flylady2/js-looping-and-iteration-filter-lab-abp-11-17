// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
  }
  function findMatching(drivers, firstLetters) {
    let nameLength = firstLetters.length;
    return drivers.filter(function (driverBeginning) {
      return driverBeginning.slice(0, nameLength) === firstLetters;
    });
  }
