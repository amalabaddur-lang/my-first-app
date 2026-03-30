var n=prompt("Enter a number to calculate its factorial:");
var fact = 1;
for(var i=1; i<=n; i++){
    fact *= i;
}
console.log("Factorial of " + n + " is: " + fact);