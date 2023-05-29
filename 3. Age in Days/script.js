
let person={
    first_name:"Linkan",
    second_name:"Mohanta",
    age:19
}


//callback function
function logResult(name,age){
    console.log(`The person's full name is ${name} and their age in days is ${age}`);
}


//hof function

function ageInDay(obj,logResult){
   let fullName=obj.first_name+" "+obj.second_name;
//    console.log(fullName)
   let ageInDays=obj.age*365;
//    console.log(ageInDays)

    logResult(fullName,ageInDays);
}

ageInDay(person,logResult);