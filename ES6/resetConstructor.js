
function CompanyDetails(){
    this.companyName = 'Star It Limited';
    this.invented = 1992 ;
    this.awards = 44;
}

// just unfollow below way to declare prototype function
// and that is reset_constructor

// CompanyDetails.prototype = {
//     sayCompanyName:function () {
//         console.log('Our company name is : ', this.companyName);
//     },
//     sayAwards:function (){
//         console.log('Our number of awards is : ',this.awards);
//     },
//     sayInvented:function(){
//     console.log('Our company invented was ',  this.invented)
//     }
// }


// we have to follow this way to declare prototypes funciton
CompanyDetails.prototype.sayCompanyName = function(){
    console.log('Our company name is : ', this.companyName);
}
CompanyDetails.prototype.sayAwards = function(){
    console.log('Our number of awards is : ',this.awards);
}

CompanyDetails.prototype.sayInvented = function(){
    console.log('Our company invented was ',  this.invented)
}
function Person_details(name,exp,salary){
    CompanyDetails.call(this);
    this.name = name;
    this.experience = exp ;
    this.salary = salary ;
}

var nur = new Person_details('Nur Alam',4,78000);
console.log(nur);