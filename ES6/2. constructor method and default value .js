// class_2  
// construnctor method and default value 



class DefaultValue{
    constructor(){
        this.subject = 'Computer' ;
        this.group = 'A' ;
    }

    StudentDetails(name, roll, favLan){
        this.name = name ;
        this.roll = roll ;
        this.favLan = favLan ;

    }

}


var shakil = new DefaultValue();
shakil.StudentDetails('Shakil Babu', 112906 , 'JavaScript and Python') ;
shakil;

torikus = new DefaultValue() ;
torikus.StudentDetails('Torikus Sadik', 112902 , 'Python and C') ;
torikus ;

morshed = new DefaultValue() ;
morshed.StudentDetails('Fahim Morshed', 112907, 'Java and Python') ;
morshed ;

Moota = new DefaultValue();
Moota.StudentDetails('Shakil Haque', 112918 , 'Python and C++') ;
Moota;

