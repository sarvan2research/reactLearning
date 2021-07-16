import Teacher, { promote } from "./teacher";

// Default export ... from "module"
// Named export  {...} from "module"
// COmbined export Defaulr,{ named } from "module"

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log("Inside walk method");
//   }
// }

// const person = new Person("sarvan");

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree=degree
//   }
//   teach() {
//     console.log("teaching from teacher");
//   }
// }

// person.walk();

const teacher = new Teacher("madhu", "BE");

teacher.walk();
teacher.teach();
