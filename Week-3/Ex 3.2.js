//Call

function personInfo(start, end) {
  return `${start}. My name is ${this.fName} ${this.lName}. I am ${this.age} years old and currently studying in ${this.bootcamp}. ${end}.`;
}

const info = {
  fName: "Dhruvjyoti",
  lName: "Ray",
  age: "22",
  bootcamp: "Pesto",
};

console.log(personInfo.call(info, "Hello", "Thank you"));

//Bind

let countryInfo = {
  country: "India",
  getInfo: function () {
    return this.country;
  },
};

getCountry = countryInfo.getInfo.bind(countryInfo);
console.log(getCountry());

//Apply

const nums = [2, 33, 994, 2220, 344, 1, 33, -4, 5, -250];
console.log(Math.min.apply(null, nums));
