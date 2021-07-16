// val have scope inside function itself
// let have scope only to the block
//const once created value cant bee changed
function sayHello() {
  for (var index = 0; index < 5; index++) {
    console.log("value " + index);
  }
  console.log("value " + index);
}
sayHello();
//Object
const person = {
  name: "sarvan",
  walk: function () {},
  talk() {},
};
person.talk();
//If know alreadt
person["name"] = "kavi";

const targetName = "name";
person[targetName.value] = "Madhu";

console.log(person.name);

//THis Keyword

const person1 = {
  name: "sarvan",
  walk: function () {
    console.log(this);
  },
};

person1.walk();
const walk = person1.walk;
//Here calling on global way triggers windows action.
walk();

//Way to get person object from global instance
const walk1 = person1.walk.bind(person);
walk1();

// Arrow function or lambda functions

const square = function (number) {
  return number * number;
};
console.log(square(6));

const squareNew = (number) => number * number;
console.log(squareNew(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobNormal = jobs.filter(function (job) {
  return jobs.isActive;
});
const activeJobLambda = jobs.filter((job) => jobs.isActive);

// This method on arrow function

const personCallback = {
  talk() {
    setTimeout(function () {
      console.log("this " + this);
    }, 1000);
  },
};

personCallback.talk();

const personCallbackVar = {
  talk() {
    var self = this;
    setTimeout(function () {
      console.log("self " + self);
    }, 1000);
  },
};

personCallbackVar.talk();

const personCallbackLamda = {
  talk() {
    var self = this;
    setTimeout(() => console.log("this lamda " + this), 1000);
  },
};

personCallbackLamda.talk();
