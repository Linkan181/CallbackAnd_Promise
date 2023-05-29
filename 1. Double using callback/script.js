let arr=[2,3,5,6,7,8];


//Callback Function
function fun(arr){
      return arr.map(x=>x*2);
}


//Hof function
function double(arr,func){
    console.log(func(arr));
}


double(arr,fun);

