function Ring(callback){
    console.log("Ringing the Bell");
    
        callback();
    
}

function Open(){
    console.log("Open the door");
    setTimeout(()=>{
    console.log("Please wait, the door is opening")
 },5000)
 //setInterval(()=>{
    //console.log("Please wait, the door is opening")
// },5000)
}

Ring(Open)