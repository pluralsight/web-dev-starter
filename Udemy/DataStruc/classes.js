// Data Structures
// Object oriented programming

// What is a class
// A blueprint for creating objects with pre-defined properties and methods
// (syntactical sugar over JS prototype-based inheritance paterns)

// Implement data structures as classes

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [99, 96, 97, 96];

  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName} and your grade is ${this.grade}`
  }
  markLate () {
    this.tardies += 1;
    if (this.tardies >= 5) {
      return "You are Expelled!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
  }

  addScores(score) {
    this.scores.push(score)
    return `Current scores are ${this.scores}`
  }

  calculateAve() {
    return (this.scores.reduce((a,b) => (a+b), 0) / this.scores.length)
  }

  static EnrollStudents() {
    return `ENROLLING STUDENTS!`
  }
}

// Method to create new objects MUST be called constructor
let firstStudent = new Student("Will", "Atwood", 2);
let secondStudent = new Student("Carolina", "Atwood", 6);
