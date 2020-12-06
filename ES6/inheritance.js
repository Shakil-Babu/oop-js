
function Collage_details(){
    this.clg_name = 'VTTI,Bogura' ;
    this.clg_dep = 6 ;
    this.invented = 999;
}

Collage_details.prototype.sayCollageName = function(){
    console.log('Collage Name is : ',this.clg_name);
}

function Student(name,dep,year) {
    Collage_details.call(this);
    this.name = name ;
    this.department = dep ;
    this.session_year = year ;
}

Student.prototype = Object.create(Collage_details.prototype);

var tori = new Student('Torikus Sadik','Computer','2018-2019');
console.log(tori);
var morshed = new Student('Fahim Morshed','Electrical','2017-2018');
console.log(morshed);