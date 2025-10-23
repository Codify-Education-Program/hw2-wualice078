// Problem 7: We're all getting older
// Parse a stringified object.
// If "age" exists, double it; otherwise add age = 0.

function doubleAge(objStr) {
  let obj = JSON.parse(objStr);
  if ("age" in obj) {
    obj.age *= 2
  }
  else {
    obj.age = 0
  }
  return obj
}