async function retriver(){
    try{

    
    let [data1,data2]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
            return response.json();
        }),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
            return response.json();
        })
    ]);


    const combinedData={
        todo:data1,
        post:data2
    };
    console.log(combinedData);
}
catch(err){
    console.log("error :",err);
}

    


}

retriver();