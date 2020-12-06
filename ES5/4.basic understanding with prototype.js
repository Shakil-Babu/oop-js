
// function Person(name,age,fName , mName){
//     this.name = name ;
//     this.age = age ;
//     this.fName = fName ;
//     this.mName  = mName;
// }

// Person.prototype.greeting = function(email,id){
//     this.email = email ;
//     this.id = id ;
// }
// Person.prototype.greeting('shakilbabu@gmail.com',1)

// var shakil = new Person('Shakil Babu',19,'Hasanur Rahman','Dubali Begum');
// console.log(shakil)


//another example with prototypes 

function Book(name, author, price){
    this.name = name ;
    this.author = author ;
    this.price  = price ;
}


Book.prototype = {
    email : 'shakilbabu@gmail.com',
    sayPrice : function(){
        console.log(this.price);
    }
}

var js = new Book('JavaScriot Cookbook', 'Ai swigart', '$390') ;
console.log(js)
console.log(js.email)

js.email = 'babu@gmail.com' ;
console.log(js.email)