 // ES5 Pattern
// Class create in ES5 (js)


function Student(name,age,dep,shift){
    this.name = name ;  //that is constructor
    this.age = age ;  //that is constructor
    this.dep = dep ;  //that is constructor
    this.shift = shift  ;  //that is constructor
    this.Greeting = function(){  //
        console.log('Hello', this.name);
    }

}




var first_Student = new Student ('Shakil Babu', 19, 'Computer','2nd') ; // create a new object like a class 

console.log(first_Student.constructor);


// first_Student;
// first_Student.Greeting() ;// check greeting 

// // create a new object 

// var second_Student = new Student('Salim Chowdhuri',20, 'Electrical','1st') ;
// second_Student ;// check second_Student value 
// second_Student.Greeting();


