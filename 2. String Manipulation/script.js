const str="Hello JavaScript";

//callback function
function logString(str){
      console.log("The manipulated Stirng is :",str.toUpperCase());
}

//Hof function
function manipulateString(str,logString){
       return logString(str);
}


manipulateString(str,logString);