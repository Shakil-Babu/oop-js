
function School_details(){
    this.School_name  = 'CH School' ;
    this.school_invented_was = 1992 ;
    this.school_awards = 16 ;
}

School_details.prototype.similaraction= function(){
    console.log('I am from school_details.');
}

function Student(name,passingYear,occupation){
    School_details.call(this);
    this.name = name ;
    this.passingYear = passingYear ;
    this.occupation = occupation ;
}

Student.prototype = Object.create(School_details.prototype);

Student.prototype.similaraction = function(){ // similaraction now overridden
    console.log('I was school_details prototypes . Now i am a pieace of Student')
}
var sd = new School_details();
sd.similaraction(); // that was a previous funciton
var shakil = new Student('Md.Shakil Babu',2018,'Student') ;
console.log(shakil);
shakil.similaraction();// this a overidden funciton



/*

// privious similaraction
sd.similaraction();
==>I am from school_details.


// after overridden similaraction 
shakil.similaraction();
==> I was school_details prototypes . Now i am a pieace of Student






*/


