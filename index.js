// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
  let newArray = [];
  newArray = array.slice(0, 2);
  return newArray;
};

const returnLastTwoDrivers = (array) => {
  let newArray = [];
  newArray = array.slice(-2);
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
