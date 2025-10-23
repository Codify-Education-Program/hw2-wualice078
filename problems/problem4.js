// Problem 4: indexAndConcat
// Prefix each string with its index ("0Hello!")

function indexAndConcat(arr) {
  let a = arr
  for (let i in arr) {
    a[i] = i + arr[i]
  }
  return a
}
