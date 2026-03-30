var num=prompt("Enter a number to display a pattern:");
var output = "";
for(var i=1; i<=num; i++){
    for(var j=1; j<=i; j++){
        output += "* ";
    }
    output += "\n";
}
console.log(output);

// for(var i=num; i>=1; i--){
//     for(var j=1; j<=i; j++){
//         output += "* ";
//     }
//     output += "\n";
// }