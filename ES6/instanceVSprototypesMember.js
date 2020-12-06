

function Person(name,age,dream,occupation){
    this.name = name;
    this.age = age ;
    this.dream = dream ;
    this.occupation = occupation ;

    this.sayDream = function(){ // instance members
        console.log('So, Your dream is ', this.dream);
    }
}

Person.prototype  ={ // prototype members
    details: function(){
        console.log('Hi! ',this.name);
        this.sayDream();
    },
    fullInformation: function(){
        console.log(`
        your age is ${this.age}
        Your dream is ${this.dream}
        Your occupation is ${this.occupation}
        `);
    }
}

var shakil = new Person('Shakil Babu',19,'Software Engineer','Student');
console.log(shakil);
shakil.fullInformation();
shakil.details();