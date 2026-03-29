var age =prompt("Enter your age ");

console.log("Total ticket price is 8000");

if(age<=5){
    console.log("You are eligible to get 75% discount");
    var discount = 0.758* 8000;
    console.log("Your discount amount is " + discount);
    console.log("Your final ticket price is " + (8000-discount));
}

if(age>=5 && age<=55){
    console.log("You are eligible to get 20% discount");
    var discount = 0.20 * 8000;
    console.log("Your discount amount is " + discount);
     console.log("Your final ticket price is " + (8000-discount));
}

if(age>=55){
    console.log("You are eligible to get 45% discount");
    var discount = 0.45 * 8000;
    console.log("Your discount amount is " + discount);
     console.log("Your final ticket price is " + (8000-discount));
}


