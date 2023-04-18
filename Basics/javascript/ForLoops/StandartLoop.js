// regular for loop

/* for (let x = 1; x <= 10; x++) {
    // code here
    console.log(x);
  }

for (let x = 10; x >= 1; x--) {
    // code here
    console.log(x);
  } */

//   let x = 10
//   let myCondition = x>=1
//   for (x, myCondition, x--)

/* let products = ['laptop', 'computer', 'mac', 'coffeemachine']

for (let x = 0; x < products.length; x++) {
    console.log(products[x]);
}

let students_names = ['Mohamed', 'Bilal', 'Arhisa', 'Ahmad','Nina'] // highest number of index

for(let x=0; x<students_names.length; x++){
    console.log('sadasad', students_names[x],x);
}

let company = 'microsoft'
console.log(company[0])
for (let letter=0; letter<company.length; letter++){
    console.log(company[letter]);
}

for (let x = 0; x <= 100; x++) {
    console.log(x);
  } */

//


/* let users = [
   {
   id: 1,
   name: "Leanne Graham",
   username: "Bret",
   email: "Sincere@april.biz",
   address: {
   street: "Kulas Light",
   suite: "Apt. 556",
   city: "Gwenborough",
   zipcode: "92998-3874",
   geo: {
   lat: "-37.3159",
   lng: "81.1496"
   }
   },
   phone: "1-770-736-8031 x56442",
   website: "hildegard.org",
   company: {
   name: "Romaguera-Crona",
   catchPhrase: "Multi-layered client-server neural-net",
   bs: "harness real-time e-markets"
   }
   },
   {
   id: 2,
   name: "Ervin Howell",
   username: "Antonette",
   email: "Shanna@melissa.tv",
   address: {
   street: "Victor Plains",
   suite: "Suite 879",
   city: "Wisokyburgh",
   zipcode: "90566-7771",
   geo: {
   lat: "-43.9509",
   lng: "-34.4618"
   }
   },
   phone: "010-692-6593 x09125",
   website: "anastasia.net",
   company: {
   name: "Deckow-Crist",
   catchPhrase: "Proactive didactic contingency",
   bs: "synergize scalable supply-chains"
   }
   },
   {
   id: 3,
   name: "Clementine Bauch",
   username: "Samantha",
   email: "Nathan@yesenia.net",
   address: {
   street: "Douglas Extension",
   suite: "Suite 847",
   city: "McKenziehaven",
   zipcode: "59590-4157",
   geo: {
   lat: "-68.6102",
   lng: "-47.0653"
   }
   },
   phone: "1-463-123-4447",
   website: "ramiro.info",
   company: {
   name: "Romaguera-Jacobson",
   catchPhrase: "Face to face bifurcated interface",
   bs: "e-enable strategic applications"
   }
   },
   {
   id: 4,
   name: "Patricia Lebsack",
   username: "Karianne",
   email: "Julianne.OConner@kory.org",
   address: {
   street: "Hoeger Mall",
   suite: "Apt. 692",
   city: "South Elvis",
   zipcode: "53919-4257",
   geo: {
   lat: "29.4572",
   lng: "-164.2990"
   }
   },
   phone: "493-170-9623 x156",
   website: "kale.biz",
   company: {
   name: "Robel-Corkery",
   catchPhrase: "Multi-tiered zero tolerance productivity",
   bs: "transition cutting-edge web services"
   }
   },
   {
   id: 5,
   name: "Chelsey Dietrich",
   username: "Kamren",
   email: "Lucio_Hettinger@annie.ca",
   address: {
   street: "Skiles Walks",
   suite: "Suite 351",
   city: "Roscoeview",
   zipcode: "33263",
   geo: {
   lat: "-31.8129",
   lng: "62.5342"
   }
   },
   phone: "(254)954-1289",
   website: "demarco.info",
   company: {
   name: "Keebler LLC",
   catchPhrase: "User-centric fault-tolerant solution",
   bs: "revolutionize end-to-end systems"
   }
   },
   {
   id: 6,
   name: "Mrs. Dennis Schulist",
   username: "Leopoldo_Corkery",
   email: "Karley_Dach@jasper.info",
   address: {
   street: "Norberto Crossing",
   suite: "Apt. 950",
   city: "South Christy",
   zipcode: "23505-1337",
   geo: {
   lat: "-71.4197",
   lng: "71.7478"
   }
   },
   phone: "1-477-935-8478 x6430",
   website: "ola.org",
   company: {
   name: "Considine-Lockman",
   catchPhrase: "Synchronised bottom-line interface",
   bs: "e-enable innovative applications"
   }
   },
   {
   id: 7,
   name: "Kurtis Weissnat",
   username: "Elwyn.Skiles",
   email: "Telly.Hoeger@billy.biz",
   address: {
   street: "Rex Trail",
   suite: "Suite 280",
   city: "Howemouth",
   zipcode: "58804-1099",
   geo: {
   lat: "24.8918",
   lng: "21.8984"
   }
   },
   phone: "210.067.6132",
   website: "elvis.io",
   company: {
   name: "Johns Group",
   catchPhrase: "Configurable multimedia task-force",
   bs: "generate enterprise e-tailers"
   }
   },
   {
   id: 8,
   name: "Nicholas Runolfsdottir V",
   username: "Maxime_Nienow",
   email: "Sherwood@rosamond.me",
   address: {
   street: "Ellsworth Summit",
   suite: "Suite 729",
   city: "Aliyaview",
   zipcode: "45169",
   geo: {
   lat: "-14.3990",
   lng: "-120.7677"
   }
   },
   phone: "586.493.6943 x140",
   website: "jacynthe.com",
   company: {
   name: "Abernathy Group",
   catchPhrase: "Implemented secondary concept",
   bs: "e-enable extensible e-tailers"
   }
   },
   {
   id: 9,
   name: "Glenna Reichert",
   username: "Delphine",
   email: "Chaim_McDermott@dana.io",
   address: {
   street: "Dayna Park",
   suite: "Suite 449",
   city: "Bartholomebury",
   zipcode: "76495-3109",
   geo: {
   lat: "24.6463",
   lng: "-168.8889"
   }
   },
   phone: "(775)976-6794 x41206",
   website: "conrad.com",
   company: {
   name: "Yost and Sons",
   catchPhrase: "Switchable contextually-based project",
   bs: "aggregate real-time technologies"
   }
   },
   {
   id: 10,
   name: "Clementina DuBuque",
   username: "Moriah.Stanton",
   email: "Rey.Padberg@karina.biz",
   address: {
   street: "Kattie Turnpike",
   suite: "Suite 198",
   city: "Lebsackbury",
   zipcode: "31428-2261",
   geo: {
   lat: "-38.2386",
   lng: "57.2232"
   }
   },
   phone: "024-648-3804",
   website: "ambrose.net",
   company: {
   name: "Hoeger LLC",
   catchPhrase: "Centralized empowering task-force",
   bs: "target end-to-end models"
   }
   }
   ]

   console.log(users);

   for(let i=0;i<users.length;i++){
       console.log(users[i].address.geo.lat) // object
   } */

/* let users = [{
    "id": 1,
    "email": "adanter0@squidoo.com",
    "langs": ['Catalan','Nederlands','French']
  }, {
    "id": 2,
    "email": "tselby1@ycombinator.com",
    "langs": ['Spanish','Nederlands','English']
  }, {
    "id": 3,
    "email": "abonnavant2@pinterest.com",
    "langs": ['Marathi','Arabic','French']
  }, {
    "id": 4,
    "email": "marton3@noaa.gov",
    "langs": ['Berber','Nederlands','French']
  }, {
    "id": 5,
    "email": "eredmire4@nyu.edu",
    "langs": ['Turkish','Nederlands','French']
  }]
 
for(let x=0;x<users.length;x++){
    // console.log(users[x].langs[x])
    for(let y=0; y<users[x].langs.length;y++){
        console.log(users[x].langs[y])
    }
    // users[x].langs.forEach(function(lang){
    //     console.log(lang)
    // })
    // users[x].langs.map(function(lang){
    //     console.log(lang)
    // })
 
}

let students_names = ['Mohamed', 'Bilal', 'Arhisa', 'Ahmad','Nina', 'Hande'] 

for(let x=0; x<students_names.length; x++){
console.log(`${} ${}`);
} */

// const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99,]

// let sum = 0
// for (let x = 0; x < arr.length; x++) {
//   sum = sum + arr[x]
// }
// console.log(sum);

// // An if in the if for conditions (first if > dan 10) into (seconde if < dan 20)
// for (let number = 5; number <= 55; number++) {
//   if (number >= 10 /* && number <=20 */) {
//     if (number <= 20) {
//       console.log(number);
//     }
//   }
// }

let people = [{
  "first_name": "Pip",
  "gender": "Male"
}, {
  "first_name": "Zola",
  "gender": "Female"
}, {
  "first_name": "Gibby",
  "gender": "Male"
}, {
  "first_name": "Oneida",
  "gender": "Female"
}, {
  "first_name": "Ced",
  "gender": "Male"
}, {
  "first_name": "Smitty",
  "gender": "Male"
}, {
  "first_name": "Borden",
  "gender": "Male"
}, {
  "first_name": "Kinna",
  "gender": "Female"
}, {
  "first_name": "Rem",
  "gender": "Male"
}, {
  "first_name": "Maureen",
  "gender": "Female"
}, {
  "first_name": "Drusie",
  "gender": "Female"
}, {
  "first_name": "Urban",
  "gender": "Male"
}, {
  "first_name": "Jaymie",
  "gender": "Male"
}, {
  "first_name": "Mathian",
  "gender": "Male"
}, {
  "first_name": "Nancee",
  "gender": "Female"
}, {
  "first_name": "Stu",
  "gender": "Polygender"
}, {
  "first_name": "Alister",
  "gender": "Male"
}, {
  "first_name": "Sharai",
  "gender": "Female"
}, {
  "first_name": "Doreen",
  "gender": "Female"
}, {
  "first_name": "Sherrie",
  "gender": "Female"
}, {
  "first_name": "Bevan",
  "gender": "Male"
}, {
  "first_name": "Lisbeth",
  "gender": "Female"
}, {
  "first_name": "Giustina",
  "gender": "Female"
}, {
  "first_name": "Marian",
  "gender": "Female"
}, {
  "first_name": "Hewet",
  "gender": "Male"
}, {
  "first_name": "Terry",
  "gender": "Female"
}, {
  "first_name": "Bethanne",
  "gender": "Female"
}, {
  "first_name": "Darwin",
  "gender": "Male"
}, {
  "first_name": "Ynes",
  "gender": "Female"
}, {
  "first_name": "Uri",
  "gender": "Male"
}, {
  "first_name": "Antonius",
  "gender": "Male"
}, {
  "first_name": "Dinnie",
  "gender": "Female"
}, {
  "first_name": "Martguerita",
  "gender": "Female"
}, {
  "first_name": "Cheslie",
  "gender": "Female"
}, {
  "first_name": "Shelby",
  "gender": "Female"
}, {
  "first_name": "Cross",
  "gender": "Male"
}, {
  "first_name": "Juan",
  "gender": "Male"
}, {
  "first_name": "Alvin",
  "gender": "Male"
}, {
  "first_name": "Noah",
  "gender": "Male"
}, {
  "first_name": "Waring",
  "gender": "Male"
}, {
  "first_name": "Antone",
  "gender": "Male"
}, {
  "first_name": "Danika",
  "gender": "Female"
}, {
  "first_name": "Sadella",
  "gender": "Female"
}, {
  "first_name": "Ophelia",
  "gender": "Female"
}, {
  "first_name": "Ara",
  "gender": "Agender"
}, {
  "first_name": "Hali",
  "gender": "Female"
}, {
  "first_name": "Lenna",
  "gender": "Female"
}, {
  "first_name": "Horatius",
  "gender": "Male"
}, {
  "first_name": "Ber",
  "gender": "Male"
}, {
  "first_name": "Rea",
  "gender": "Non-binary"
}, {
  "first_name": "Kristofor",
  "gender": "Male"
}, {
  "first_name": "Judy",
  "gender": "Female"
}, {
  "first_name": "Thatch",
  "gender": "Male"
}, {
  "first_name": "Rachel",
  "gender": "Female"
}, {
  "first_name": "Baudoin",
  "gender": "Male"
}, {
  "first_name": "Jania",
  "gender": "Female"
}, {
  "first_name": "Celestina",
  "gender": "Female"
}, {
  "first_name": "Ben",
  "gender": "Polygender"
}, {
  "first_name": "Ailina",
  "gender": "Female"
}, {
  "first_name": "Tillie",
  "gender": "Female"
}, {
  "first_name": "Daniela",
  "gender": "Female"
}, {
  "first_name": "Zaneta",
  "gender": "Female"
}, {
  "first_name": "Alexis",
  "gender": "Female"
}, {
  "first_name": "Bernie",
  "gender": "Male"
}, {
  "first_name": "Randee",
  "gender": "Female"
}, {
  "first_name": "Nealson",
  "gender": "Male"
}, {
  "first_name": "Serena",
  "gender": "Female"
}, {
  "first_name": "Ebba",
  "gender": "Female"
}, {
  "first_name": "Kile",
  "gender": "Male"
}, {
  "first_name": "Tammi",
  "gender": "Female"
}, {
  "first_name": "Torin",
  "gender": "Male"
}, {
  "first_name": "Caz",
  "gender": "Male"
}, {
  "first_name": "Lon",
  "gender": "Male"
}, {
  "first_name": "Urban",
  "gender": "Male"
}, {
  "first_name": "Robina",
  "gender": "Female"
}, {
  "first_name": "Sammie",
  "gender": "Male"
}, {
  "first_name": "Wash",
  "gender": "Male"
}, {
  "first_name": "Wang",
  "gender": "Polygender"
}, {
  "first_name": "Guendolen",
  "gender": "Female"
}, {
  "first_name": "Celine",
  "gender": "Female"
}, {
  "first_name": "Chrissie",
  "gender": "Female"
}, {
  "first_name": "Lurleen",
  "gender": "Female"
}, {
  "first_name": "Frannie",
  "gender": "Female"
}, {
  "first_name": "Hyacintha",
  "gender": "Female"
}, {
  "first_name": "Kimmi",
  "gender": "Female"
}, {
  "first_name": "Shelley",
  "gender": "Female"
}, {
  "first_name": "Weber",
  "gender": "Male"
}, {
  "first_name": "Tabbi",
  "gender": "Female"
}, {
  "first_name": "Flory",
  "gender": "Male"
}, {
  "first_name": "Tobit",
  "gender": "Male"
}, {
  "first_name": "Walliw",
  "gender": "Female"
}, {
  "first_name": "Bastien",
  "gender": "Male"
}, {
  "first_name": "Aime",
  "gender": "Female"
}, {
  "first_name": "Sherwin",
  "gender": "Male"
}, {
  "first_name": "Wolfgang",
  "gender": "Male"
}, {
  "first_name": "Morgan",
  "gender": "Male"
}, {
  "first_name": "Wendy",
  "gender": "Female"
}, {
  "first_name": "Isac",
  "gender": "Male"
}, {
  "first_name": "Davina",
  "gender": "Female"
}, {
  "first_name": "Freemon",
  "gender": "Agender"
}]

/* let female = 0
let male = 0

for(let x=0; x<people.length; x++){
  if(people[x].gender == "Female"){
    female++
  }else{
    male++
  }
}
console.log(`Female: ${female}\nMale: ${male}`); */

const VoteMachine = [{
  party_name: "JimCarrey's FAncy Party",
  vote: true
}, {
  party_name: 'NoMoneyNoHoneyParty',
  vote: false
}, {
  party_name: "Geeks' party",
  vote: true
}, {
  party_name: 'NoMoneyNoHoneyParty',
  vote: false
}, {
  party_name: "JimCarrey's FAncy Party",
  vote: true
},
{
  party_name: 'NoMoneyNoHoneyParty',
  vote: false
}, {
  party_name: "Geeks' party",
  vote: true
}, {
  party_name: 'NoMoneyNoHoneyParty',
  vote: false
}, {
  party_name: 'NoMoneyNoHoneyParty',
  vote: false
}, {
  party_name: "Geeks' party",
  vote: true
},
{
  party_name: "JimCarrey's FAncy Party",
  vote: true
},
{
  party_name: "Geeks' party",
  vote: true
}, {
  party_name: 'NoMoneyNoHoneyParty',
  vote: false
}]

const partyNames = Array.from(new Set([...VoteMachine.map(obj=>obj.party_name)])) /* TOU HAVE TO LEARN THIS !!!!! */

let partyJim = partyNames[0] 
let partyNoMoney = partyNames[1]
let partyGeeks = partyNames[2]

console.log(partyJim);
console.log(partyNoMoney);
console.log(partyGeeks);



let sum1 = 0
let sum2 = 0
let sum3 = 0

for(let vote in VoteMachine){
  const voteObj = VoteMachine[vote].party_name// true or false
  
  if(voteObj === partyJim && VoteMachine[vote].vote ){ // true === "JimCarrey's FAncy Party"
      sum1++ 
  }
  if(voteObj === partyNoMoney && VoteMachine[vote].vote){ // true === "JimCarrey's FAncy Party"
      sum2++
  }
  if(voteObj === partyGeeks && VoteMachine[vote].vote){
    sum3++
  }
 
}

// not finish


console.log(sum1);
console.log(sum2);
console.log(sum3);


// Atilla explanation

/* 
let partyNames = VoteMachine.map(function(party){
  return party.party_name
}) // collect all party_names 

partyNames = new Set([...partyNames]) // unique data

partyNames = Array.from(partyNames) // convert object data to array list

console.log(partyNames);

for(let party=0;party<VoteMachine.length;party++){
  // console.log(VoteMachine[party])
  if(VoteMachine[party].party_name ===partyNames[0]){
      if(VoteMachine[party].vote){
          // increase number for jimcarrey's party
          result.JimCarreysFancyParty++
      }
  }

  if(VoteMachine[party].party_name ===partyNames[1]){
      if(VoteMachine[party].vote){
          // increase number for jimcarrey's party
          result.NoMoneyNoHoneyParty++
      }
  }

  if(VoteMachine[party].party_name ===partyNames[2]){
      if(VoteMachine[party].vote){
          // increase number for jimcarrey's party
          result.GeeksParty++
      }
  }
}

console.log(result) */


