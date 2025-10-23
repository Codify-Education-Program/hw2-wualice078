// Problem 5: Where's Waldo?
// Return strings containing lowercase "waldo", all in uppercase.

function uppercaseStringsContainingWaldo(arr) {
  let a = []
  for (let val of arr) {
    if (val.includes("waldo")) {
      a.push(val.toUpperCase())
    }
  }
  return a
}
