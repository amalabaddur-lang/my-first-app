function add(){
    //alert("calc worked")
    // var num1=Number(document.getElementById('num1').value)
    
    // var num2=Number(document.getElementById('num2').value)
    
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)
    var result=num1+num2
    console.log("result",result)
    document.getElementById('lblName').innerHTML = result;
}

function minus(){
     var num1=Number(document.getElementById('num1').value)
     var num2=Number(document.getElementById('num2').value)
     var result =num1-num2; 
     console.log("result",result)
     document.getElementById('lblName').innerHTML=result

}
function multiply(){
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)
    var result=num1*num2
    console.log("result",result)
    document.getElementById('lblName').innerHTML=result
}
function divide(){
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)
    var result=num1/num2
    console.log("result",result)
    document.getElementById('lblName').innerHTML=result
}
    
