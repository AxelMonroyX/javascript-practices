function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function Student(card) {
  this.card = card;
}
Student.prototype = new Person('Axel', 'Monroy');
var myStudent = new Student(123);

module.exports.myStudent = myStudent;
module.exports.Student = Student;
module.exports.Person = Person;
