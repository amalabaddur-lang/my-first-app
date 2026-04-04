var ages = [20, 3, 1, 40];

function checkAdult(age) {
  return age >= 18;
}

value=ages.some(checkAdult)
console.log("value",value)