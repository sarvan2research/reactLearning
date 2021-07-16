const colors = ["red", "blue", "green"];

const items = colors.map(function (color) {
  return "<li>" + color + "</li>";
});

const itemsLamda = colors.map((color) => "<li>" + color + "</li>");
const itemsTemplate = colors.map((color) => `<li>${color}</li>`);
console.log("Items:" + items);
console.log("ItemsLamda:" + itemsLamda);
console.log("ItemsTemplate:" + itemsTemplate);

//Code restructuring

const address = {
  street: "",
  city: "",
  country: "",
};

const street1 = address.street;
const city1 = address.city;
const country1 = address.country;
//removing duplicate and accessing values
const { street, city, country } = address;
//Creating alias
const { street: st } = address;

//Spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combinedWithSpreadOpr = [...first, 9, ...second, "b"];

console.log(combined);
console.log(combinedWithSpreadOpr);

const cloneFirst = [...first];

const personObj = { name: "sarvan" };
const countryObj = { country: "india" };

const personCombined = { ...personObj, ...countryObj, location: "kkp" };

console.log(personCombined);
