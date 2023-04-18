const students = [
  {
    _id: "63c993feb6f5dc691c2c0ac3",
    name: "Fannie Buckley",
    scores: [44, 72, 37],
  },
  {
    _id: "63c993fe0b604587275fbfdf",
    name: "Sherry Petty",
    scores: [50, 85, 61],
  },
  {
    _id: "63c993fef0a0425682c58b2c",
    name: "Bray Lancaster",
    scores: [37, 74, 56],
  },
  {
    _id: "63c993fe0115dd572cb63892",
    name: "Hubbard Munoz",
    scores: [99, 40, 57],
  },
  {
    _id: "63c993fe9f8ad8038fc76416",
    name: "Copeland Ford",
    scores: [66, 77, 53],
  },
  {
    _id: "63c993fef4067267e74d8231",
    name: "Padilla Bolton",
    scores: [65, 98, 39],
  },
  {
    _id: "63c993fe187dd671983e006d",
    name: "Mcknight Odonnell",
    scores: [97, 92, 40],
  },
  {
    _id: "63c993fe2ecf8e3dc2bd5393",
    name: "Bradley Delacruz",
    scores: [57, 81, 87],
  },
  {
    _id: "63c993fefa0735736af48d92",
    name: "Velazquez Hensley",
    scores: [67, 45, 52],
  },
];
/* 1. Calculate the average score of sum of all scores for each student [reduce]
Hint [forEach(),reduce()] */
/* let result = []
students.forEach(obj => {
  const scores = obj.scores
  const avarageOfEachStudent = scores.reduce((acc, val) => acc + val) / scores.length
   result.push(avarageOfEachStudent)
   console.log(result);
}); */

// Atilla example whit function
/* function getAvg(arr) {
  let result = []
  arr.forEach(obj => {
    const scores = obj.scores
    const avarageOfEachStudent = scores.reduce((acc, val) => acc + val) / scores.length
    result.push(avarageOfEachStudent)
  });
  return result
}
console.log(getAvg(students)) */

const election = [
  {
    person_name: "John",
    politic_party1: true,
    politic_party2: false,
    politic_party3: false,
  },
  {
    person_name: "Michael",
    politic_party1: false,
    politic_party2: false,
    politic_party3: true,
  },
  {
    person_name: "Jimmy",
    politic_party1: false,
    politic_party2: true,
    politic_party3: false,
  },
  {
    person_name: "Michel",
    politic_party1: true,
    politic_party2: false,
    politic_party3: false,
  },
  {
    person_name: "Gabriel",
    politic_party1: false,
    politic_party2: false,
    politic_party3: true,
  },
  {
    person_name: "Alberto",
    politic_party1: false,
    politic_party2: false,
    politic_party3: true,
  },
];

let party1 = 0
let party2 = 0
let party3 = 0

election.forEach(function (item) {
  //   console.log(item.politic_party1,"politic_party1");
  //   console.log(item.politic_party2,"politic_party2");
  //   console.log(item.politic_party3,"politic_party3");
  let { politic_party1, politic_party2, politic_party3, person_name } = item;

  if (politic_party1) {
    // console.log(`${person_name} voted for politic party 1`);
    party1++;
  }

  if (politic_party2) {
    // console.log(`${person_name} voted for politic party 2`);
    party2++;
  }

  if (politic_party3) {
    // console.log(`${person_name} voted for politic party 3 `);
    party3++;
  }
});

const Result = [
  {
    name: "Party1",
    total_votes: party1,
  },
  {
    name: "Party2",
    total_votes: party2,
  },
  {
    name: "Party3",
    total_votes: party3,
  },
];

let win = Math.max(
  ...Result.map(function (party) {
    return party.total_votes;
  })
);

let getPartyName = Result.filter(function (party) {
  return party.total_votes == win;
});
console.log(getPartyName);
console.log(
  `The Winner is ${getPartyName[0].name} and total votes are: ${getPartyName[0].total_votes}`
);

const names = [{name:"jack"},{name:"michael"},{name:"gabriel"}]
const SearchName = "michael"
const findNameByProperty = names.filter(function(obj){
    return obj.name == SearchName 
    // obj.name.includes(SearchName)
})

console.log(findNameByProperty);
