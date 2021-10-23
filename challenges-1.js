// ================================================================

// Titanic Dataset challenges!

// Your goal is to write some functions that will extract
// relevant data from the dataset.

// Write your code here in this file.

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant
// piece of information from the data and return it.

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers.
// Returns a number.

const getTotalPassengers = (data) => {
  const count = data.reduce((acc) => acc + 1, 0)
  return count
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived
// if their survived property is "Yes".
// Return a number.

const getSurvivorCount = (data) => {
  const survivedCount = data.filter((passenger) => passenger.fields.survived === 'Yes').reduce((acc) => acc + 1, 0)
  return survivedCount
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// did not survive if their survived property is "No".
// Return a number.

const getCasualityCount = (data) => {
  const notSurvivedCount = data.filter((passenger) => passenger.fields.survived === 'No').reduce((acc) => acc + 1, 0)
  return notSurvivedCount
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function
// takes the data and the passenger class a string. Find all of the
// passengers whose pclass matches and return the count.
// Return a number

const countPassengersInClass = (data, pclass) => {
  const classCount = data.filter((passenger) => passenger.fields.pclass === pclass).reduce((acc) => acc + 1, 0)
  return classCount
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes
// the data and passenger class.
// Return the count of survivors in that pclass.

const getSurvivorCountForClass = (data, pclass) => {
  const survivedClassCount = data.filter((passenger) => passenger.fields.pclass === pclass && passenger.fields.survived === 'Yes').reduce((acc) => acc + 1, 0)
  return survivedClassCount
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns
// the number of passengers who did not survive for that class.

const getCasualityCountForClass = (data, pclass) => {
  const casualityCountForClass = data.filter((passenger) => passenger.fields.pclass === pclass && passenger.fields.survived === 'No').reduce((acc) => acc + 1, 0)
  return casualityCountForClass
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing.

const getMinAge = (data) => {
  const minAge = data.filter((passenger) => passenger.fields.age !== undefined).reduce((min, passenger) => {
    if (min > passenger.fields.age) { min = passenger.fields.age }
    return min
  }, 1000)
  return minAge
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. Filter passengers where
// age is missing.

const getMaxAge = (data) => {
  const maxAge = data.filter((passenger) => passenger.fields.age !== undefined).reduce((max, passenger) => {
    if (max < passenger.fields.age) { max = passenger.fields.age }
    return max
  }, 0)
  return maxAge
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop.
// Each passenger has a embarked property with a value of: S, C,
// or Q. This function takes in the passenger data and the
// embarkation code. Return the count of passenegers with that code.

const getEmbarkedCount = (data, embarked) => {
  const embarkedCount = data.filter(passenger => passenger.fields.embarked === embarked).reduce((acc) => acc + 1, 0)
  return embarkedCount
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing
// for some passengers you'll need to filter this out!

const getMinFare = (data) => {
  const minFare = data.filter((passenger) => passenger.fields.fare !== undefined).reduce((min, passenger) => {
    if (min > passenger.fields.fare) { min = passenger.fields.fare }
    return min
  }, 1000)
  return minFare
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the
// passengers are missing data for fare. Be sure to filter these!

const getMaxFare = (data) => {
  const maxFare = data.filter((passenger) => passenger.fields.fare !== undefined).reduce((max, passenger) => {
    if (max < passenger.fields.fare) { max = passenger.fields.fare }
    return max
  }, 0)
  return maxFare
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. Each passenger object has
// "sex" property that is either "male" or "female"

const getPassengersByGender = (data, gender) => {
  const genderCount = data.filter((passenger) => passenger.fields.sex === gender).reduce((acc) => acc + 1, 0)
  return genderCount
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. This
// function receives parameters of data and gender. Match the gender
// to the "sex" property and check the "survived" property.

const getSurvivorsByGender = (data, gender) => {
  const survivorSexCount = data.filter((passenger) => passenger.fields.sex === gender && passenger.fields.survived === 'Yes').reduce((acc) => acc + 1, 0)
  return survivorSexCount
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender.

const getCasualitiesByGender = (data, gender) => {
  const notSurvivorSexCount = data.filter((passenger) => passenger.fields.sex === gender && passenger.fields.survived === 'No').reduce((acc) => acc + 1, 0)
  return notSurvivorSexCount
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. Add up all of the fares and
// return that number. Be sure to filter the passengers records
// where the fare is missing!

const getTotalFare = (data) => {
  const totalFair = data.filter(passenger => passenger.fields.fare !== undefined).reduce((acc, passenger) => acc + passenger.fields.fare, 0)
  return totalFair
}

// 16 --------------------------------------------------------------
// Return the average fare paid. Add up all of the fares and divide
// by the number of passengers. Be sure to filter passengers who are
// missing a fare!

const getAverageFare = (data) => {
  const averageFare = data.filter(passenger => passenger.fields.fare !== undefined).reduce((acc, passenger, index, array) => {
    const val = acc + passenger.fields.fare
    if (index === array.length - 1) { return val / array.length }
    return val
  }, 0)

  return averageFare
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. Filter passengers who are
// missing fares. Sort the passengers on the fare pick the one in
// the middle: [11,33,77] <- 33 is the median. If number of items
// is even average the two middle values. For example: [2,4,5,16]
// 4 + 5 = 9 / 2 median is 4.5!

const getMedianFare = (data) => {
  const fares = data.filter(passenger => passenger.fields.fare !== undefined).map(passenger => passenger.fields.fare)
  const mid = Math.floor(fares.length / 2); const nums = [...fares].sort((a, b) => a - b)
  return fares.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

// 18 --------------------------------------------------------------
// Return the average age of all passengers. Add all ages and divide
// by the number of passenegers. Be sure to filter where ages are not
// available.

const getAverageAge = (data) => {
  const averageAge = data.filter(passenger => passenger.fields.age !== undefined).reduce((acc, passenger, index, array) => {
    const val = acc + passenger.fields.age
    if (index === array.length - 1) { return val / array.length }
    return val
  }, 0)

  return averageAge
}

// 19 --------------------------------------------------------------
// Return the median age from passengers. Do that median thing of
// finding the middle value.

const getMedianAge = (data) => {
  const ages = data.filter(passenger => passenger.fields.age !== undefined).map(passenger => passenger.fields.age)
  const mid = Math.floor(ages.length / 2); const nums = [...ages].sort((a, b) => a - b)
  return ages.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

// 20 --------------------------------------------------------------
// Add up all of the ages for the gender provided and divide by the
// the total number.

const getAverageAgeByGender = (data, gender) => {
  const averageAgeByGender = data.filter(passenger => passenger.fields.age !== undefined && passenger.fields.sex === gender).reduce((acc, passenger, index, array) => {
    const val = acc + passenger.fields.age
    if (index === array.length - 1) { return val / array.length }
    return val
  }, 0)

  return averageAgeByGender
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
  getTotalPassengers,
  getSurvivorCount,
  getCasualityCount,
  countPassengersInClass,
  getSurvivorCountForClass,
  getCasualityCountForClass,
  getMinAge,
  getMaxAge,
  getEmbarkedCount,
  getMaxFare,
  getMinFare,
  getPassengersByGender,
  getSurvivorsByGender,
  getCasualitiesByGender,
  getTotalFare,
  getAverageFare,
  getMedianFare,
  getAverageAge,
  getMedianAge,
  getAverageAgeByGender
}
