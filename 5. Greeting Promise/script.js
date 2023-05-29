function greet(name){
    
   return new Promise((resolve)=>{
    const greeting=`Hello, ${name}`;
    resolve(greeting);
   });
    

}


let promise=greet("Linkan");
promise.then(function(n){
    console.log(n);
})
