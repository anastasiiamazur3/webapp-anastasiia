class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  emailName() {
    return this.firstName + "." + this.lastName;
  }

  email() {
    return this.emailName() + "." + "@h-da.de";
  }
}

class Student extends Person {
  email() {
    return this.emailName() + "." + "@stud.h-da-de";
  }
}
