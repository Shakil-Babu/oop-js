// function Information() {
//     this.instituteName = 'Vocational Teachers Training Institute.' ;
//     this.subject = 'Computer' ;
//     this.runningYear = '2020' ;
// }

// function Student(name , id, group) {

//     Information.call(this);// this is inheritance creator
//     this.name = name ;
//     this.id = id ; 
//     this.group = group ;
// }

// var shakil = new Student('Shakil Babu', 01 , 'A') ;
// shakil ;

// var tori = new Student('Torikus Sadik ', 02, 'B') ;
// tori ;


// again Example

// inheritance with ES5
function Schooldetails(){
    this.schoolName = 'Chhagoldhara High School' ;
    this.batch = '2018' ;
}

Schooldetails.prototype.personDetails= function (name, id, age) {  
    this.name  = name ;
    this.id = id ;
    this.age = age ;
}

function Job(job){
    Schooldetails.call(this);
    this.job = job ;
}

// Job.prototype = Object.create(Schooldetails.prototype) ; // we can use this line or below line (NB: two line are same for all ) ;
Object.setPrototypeOf(Job.prototype , Schooldetails.prototype);


var s = new Job('Software Developer');
s.personDetails('Shakil Babu',01, '19') ;
console.log(s);

