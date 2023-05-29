async function fetchOperation(){
    let promise= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data= await promise.json();
    console.log(data)
    
}

fetchOperation()