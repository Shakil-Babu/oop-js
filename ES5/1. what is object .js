// object in js 
// object means all of deposite and also all of charactaristics
//About Object


var Book = {
  name:"Object Oriented Programming",
  author:"Nur Alam",
  price:'$399',
  page:990 ,
  popularity:'more and more' ,
  gretting: function(){
      console.log('Hello', this.author);
  }
}

// how often access object method 
// answere is two way's like 1. Dot(.) Notation  2. Bracker [] ;

// so now i wanna access name's value from book object using dot(.)notation

var name = Book.name ;
name;

// again access author name using bracket notation
var autho = Book['author'] ;
autho;

// aecces greeting method from this object
Book.gretting();


'=========================================================='

// traverse object with loop

for(var i in Book){
  console.log(i + ':', Book[i]);
}


