// bind , call , apply method in ES5


// ========About bind ===========


// function Add(num1, num2){
//     return (num1+num2) * this.value;
// }

// var passValue = {
//     value : 30 
// }

// var r = Add.bind(passValue) ;
// var result= r(10,10);
// result;



// =========== Aobut call =============



// function Add(num1, num2){
//     return (num1+num2) * this.value;
// }

// var passValue = {
//     value : 30 
// }

// var r = Add.call(passValue, 10,10) ;
// r;


 // ========== About Apply ==========



function Add(num1, num2){
    return (num1+num2) * this.value;
}

var passValue = {
    value : 30 
}

var r = Add.apply(passValue,[10,10]) ;
r;
