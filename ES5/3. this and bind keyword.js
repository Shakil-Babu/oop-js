// this keyword 

// function Sum(First_number){
//     console.log(this);
//     console.log( this.secondNumber + First_number) ;
// }


// var Pass = {
//     secondNumber: 30
// }


// var r = Sum.bind(Pass) ;
// var res  = r(29) ;

function Check(name){
    console.log(this) ;
    console.log('My name is : ', name , 'My father name is : ', this.fNname) ;

}

var PassFname  = {
    fNname: 'Hasanur Rahman'
}

var catchFunction = Check.bind(PassFname);
var print = catchFunction('Shakil Babu') 

