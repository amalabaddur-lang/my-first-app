var num1=prompt("enter your salary ");
var num2 =prompt("enter your home loan");
var num3 =prompt("enter your car loan");
var num4 =prompt("enter your credit card bill");
var num5 =prompt("mutual fund investment");

var emi = (Number(num1) - (Number(num2) + Number(num3) + Number(num4) + 
Number(num5)))/12;
console.log("your monthly emi is "+emi);
var saving = Number(num1) - (Number(num2) + Number(num3) + Number(num4) +
Number(num5) + Number(emi));
console.log("Totalsavings "+saving);
