
// var creditCard = {
//     _name:'Shakil Babu' , // Private value
//     get name(){ // we can public using get
//         return this._name ;
//     },
//     set name (value){ // we can develop our private object prperty using set method
//         this._name = value ;
//     }

// }

// var a  = creditCard.name ;
// console.log(a)
// var c = creditCard.name = 'Torikus Sadik' ;
// console.log(c);



// property Attributes
var Person = {
    name:'Shakil Babu'
}

var define = Object.defineProperty(Person, 'name' , {
    enumerable: false ,
    writable:false ,
    configurable: false,
    value:'PUBG Rahman'
})

console.log(define);