// 1)
const persons = [
  {
    "name": "Hind Mariug",
    "age": 27,
    "email": "hiug@gmail.com",
    "city": "Istanbul",
    "phone": "023-298-2778"
  },
  {
    "name": "Vlad Pomper",
    "age": 36,
    "email": "ppppo@gmail.com",
    "city": "Istanbul",
    "phone": "023-910-1120"
  },
  {
    "name": "Jurgen Vandegaat",
    "age": 56,
    "email": "Vandegaat@hotmail.com",
    "city": "Ghent",
    "phone": "023-244-7890"
  },
  {
    "name": "Monica Fox",
    "age": 29,
    "email": "Indemond@hotmail.com",
    "city": "Brussel",
    "phone": "023-291-3477"
  },
  {
    "name": "Mahinur Nahidin",
    "age": 19,
    "email": "Mna@yandex.com",
    "city": "Istanbul",
    "phone": "023-123-4567"
  },
  {
    "name": "Oliver Koolpert",
    "age": 18,
    "email": "klo@gmail.com",
    "city": "Ghent",
    "phone": "023-987-2778"
  },
  {
    "name": "Gillbert Peapsem",
    "age": 35,
    "email": "MalboroSplace@hotmail.com",
    "city": "Ghent",
    "phone": "023-000-1228"
  },
  {
    "name": "Wesley Mount",
    "age": 22,
    "email": "swindoWN@yandex.com",
    "city": "Brussel",
    "phone": "023-211-4589"
  },
  {
    "name": "Alicia Descheerm",
    "age": 18,
    "email": "scheemermee@hotmail.com",
    "city": "Ghent",
    "phone": "023-234-2118"
  },
  {
    "name": "Marco Quemado",
    "age": 31,
    "email": "qQllm@yandex.com",
    "city": "Brussel",
    "phone": "023-804-3478"
  }
]


// 2)
// const lessThan30 = persons.filter(obj => obj.age < 30)
// console.log(lessThan30);

// 3)
// const brusselCity = persons.filter(obj => obj.city.includes("Brussel"))
// console.log(brusselCity);
// const istanbulCity = persons.filter(obj => obj.city.includes("Istanbul"))
// console.log(istanbulCity);
// const ghentCity = persons.filter(obj => obj.city.includes("Ghent"))
// console.log(ghentCity);

// 4)
// const findGmail = persons.filter(obj => obj.email.includes("gmail"))
// console.log(findGmail);



// Atilla exemple
// 1)


// 2)
function FindUsersByAge(age,arrayData){
  return arrayData.filter(function(obj){
    return obj.age<age
  })
}
console.log(FindUsersByAge(25, persons))

function FindUsersByAge(age,arraydata){
  return arraydata.filter(function(obj){
      return obj.age<age
  })
}

// console.log(FindUsersByAge(25,users))
// const CityInput = document.getElementById("city")

// 3)

function FindUsersByCity(city){
  return users.filter(function(obj){
      return obj.city.includes(city)
  })
}

// function ClickHandler(){
//     console.log(FindUsersByCity(CityInput.value));
// }
const cities=['Istanbul','Brussel','Ghent']
let result = users.map(function(person){
  return cities.map(city=>person.city===city?person:'')
})

// console.log(result)

// 4)

function FindByEmailDns(domain){
  return users.filter(function(user){ // return new filtered array
      return user.email.includes(domain) // @gmail.com or @hotmail.com or @yandex.com
  })
}

console.log(FindByEmailDns('yandex'));