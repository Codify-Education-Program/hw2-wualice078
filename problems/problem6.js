// Problem 6: Are People Objects?
// Combine names[] and ages[] into an array of { name, age }

function namesAndAges(names, ages) {
  let a = []

  for (let i in names) {
    let person = {
      name : names[i],
      age : ages[i]
    };
    
    a.push(person)
  };

  return a
}