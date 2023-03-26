// Code your solution in this file!
const returnFirstTwoDrivers = namesArray => {
   return namesArray.slice(0,2)
}

const returnLastTwoDrivers = namesArray => {
    return namesArray.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = intNumber => {
    return fare => intNumber*fare;
}

const fareDoubler = fare => createFareMultiplier(2)(fare);
const fareTripler = fare => createFareMultiplier(3)(fare);

const selectDifferentDrivers = (arrayOfDrivers, selectDrivers) => {
    if (selectDrivers=== returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
    else if (selectDrivers=== returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
}