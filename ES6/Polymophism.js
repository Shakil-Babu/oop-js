// es5 polymorphism

function School_details(){
    this.School_name  = 'CH School' ;
    this.school_invented_was = 1992 ;
    this.school_awards = 16 ;
}

School_details.prototype.similaraction= function(){
    console.log('I am from school_details.');
}

var sd = new School_details();

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

var shakil = new Student('Shakil Babu',2018,'Student');


function Student_speech(speech,about_student){
    Student.call(this);
    this.speech = speech ;
    this.about_student = about_student ;
}

Student_speech.prototype = Object.create(Student.prototype);

Student_speech.prototype.similaraction = function(){
    console.log('I am also overridden');
}


var studentSp =new Student_speech('Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, molestiae.','I am shakil Babu from Bogura.')
console.log(studentSp);

// same function but result will be diferent and that is polymorphism.
sd.similaraction();
shakil.similaraction();
studentSp.similaraction();

/*
// above there funciton name same and thier result will be like below .

I am from school_details.
Polymophism.js:23 I was school_details prototypes . Now i am a pieace of Student
Polymophism.js:38 I am also overridden

// and this is a polymorphism

*/

