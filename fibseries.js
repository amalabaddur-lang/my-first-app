var n=prompt("Enter the number of terms in the Fibonacci series:");
var a = 0;
var b = 1;
var output= a + " " + b + " ";
for(var i=2; i<n; i++){
    var c = a + b;
    output += c + " ";
    a = b;
    b = c;
}
console.log("Fibonacci series: " + output);

