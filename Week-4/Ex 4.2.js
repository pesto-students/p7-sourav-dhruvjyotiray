class Person {
  constructor(name) {
    this.name = name;
  }
}

const Teacher = new Person("Mr. Smith");

Person.prototype.teach = function (subject) {
  return `${this.name} is now teaching ${subject}`;
};

console.log(Teacher.teach("Maths"));
