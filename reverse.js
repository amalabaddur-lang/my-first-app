var num = Number(prompt("Enter the number to be reversed:"));
var temp=num;
var rev=0;
while(num>0){
    var rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num / 10);
}
console.log("The reversed number is :" +rev);

if(temp===rev){
    console.log("The reversed number is" + " " +  rev +  " " + "and it is a palindrome");
}
else{
    console.log("The reversed number is" + " " + rev +  " " + "and it is not a palindrome");
}