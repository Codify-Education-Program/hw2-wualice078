// Problem 2: largestMystery
// Given an array and a boolean function, return the largest number
// that returns true when passed into that function.
// If none, return "No number passes the function!"

function largestMystery(arr, mysteryFunc) {
  let max = Number.NEGATIVE_INFINITY
  for (let val of arr) {
    if (mysteryFunc(val)) {
      max = Math.max(max, val)
    }
  } 
  if (max == Number.NEGATIVE_INFINITY)
    return "No number passes the function!"
  return max
}
