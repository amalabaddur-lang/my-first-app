var a=10;
var b={name:'sachin'}

function callByValRef(x,y){
  x=20
  y.name='ramesh'

}
// befor calling the function
console.log("a",a)
console.log("b",b)

callByValRef(a,b)
console.log("a",a)
console.log("b",b)