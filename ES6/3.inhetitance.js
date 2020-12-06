// inheritance with ES6

class Main {
  constructor() {
    this.schoolName = "Chhagoldhara High School";
    this.batch = "2018";
  }

  Student(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
  }
}

class Child extends Main {
  constructor(job) {
    super();

    this.job = job;
  }
}

var shakil = new Child("Software Developer");

shakil.Student('Shakil Babu','01','19') ;
console.log(shakil);