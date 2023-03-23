const name = "Sam";
const countriesVisited = [
  { name: "France", year: 2018 },
  { name: "Spain", year: 2019 },
  { name: "Italy", year: 2020 }
];

const data = {
  name: name,
  countries: countriesVisited
};
numCountries = countriesVisited.length;
const url = "https://thejsway-server.herokuapp.com/api/countries";

const options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
};
console.log(`Your name is ${name} and you visited ${numCountries} countries. Keep traveling!`)
// fetch(url, options)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));