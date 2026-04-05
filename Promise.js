const pizza= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const isPizzaReady=false;
        if(isPizzaReady){
            resolve("Pizza is ready");
        }else{
            reject("Pizza is not ready");
        }
    },5000)
})

pizza.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})
        
