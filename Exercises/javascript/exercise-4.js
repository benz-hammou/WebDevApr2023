/* Exercise loops and conditionals */

// odd or even
// 1. Create a for loop that counts from 0 to 20. Console log the value of the counter variable inside the loop.
/* for(let i = 0; i<21; i++){
    console.log(i);
} */

// 2. Create a for loop that counts from 20 to 0. Console log the value of the counter variable inside the loop.
/* for(let i = 20; i >=0; i--){
    console.log(i);
} */

// 3. Create a for loop that counts from 0 to 100. If the current iteration is an even number, console log "Even".
/* for(let i = 0; i<101; i++){
    i%2==0 ? console.log(i,'Even') : console.log(i);
} */

var students = [
  {
    name: "John",
    track: "Front End Development",
    achievements: 157,
    points: 14730,
  },
  {
    name: "Jenny",
    track: "iOS Development with Swift",
    achievements: 175,
    points: 16375,
  },
  {
    name: "Jill",
    track: "PHP Development",
    achievements: 203,
    points: 19072,
  },
  {
    name: "Jack",
    track: "Back End Development",
    achievements: 181,
    points: 19215,
  },
  {
    name: "Jasmine",
    track: "Front End Development",
    achievements: 157,
    points: 14730,
  },
];

// find max points and print student name
// 4. Create a for loop that iterates through the students array and finds the student with the highest amount of points. Console log the value of their name.
/* let getBestPoints = students[0];

for (let i = 0; i < students.length; i++) {
  if (students[i].points > getBestPoints.points) {
    getBestPoints = students[i];
  }
}

console.log(
  `With ${getBestPoints.points} ${Object.keys(getBestPoints)[3]},\n${
    getBestPoints.name
  } has the highest amount !`
);

// 5. define a function called "print" that takes a parameter called "student". The function should console log the value of the student's name, track, achievements and points.
const print = (student) => {
  for (let i = 0; i < student.length; i++) {
    console.log(student[i].name);
    console.log(student[i].track);
    console.log(student[i].achievements);
    console.log(student[i].points);
  }
};
// 6. call the print function and pass it the student object you created in step 5.
print(students); */

// 7. define a function called "getStudentReport" that takes a parameter called "student". The function should return a String that looks like the following: "Jill - PHP Development - 203 achievements - 19072 points"
const calledStudent = "Jill";

const getStudentReport = (student) => {
  for (let i = 0; i < student.length; i++) {
      if (student === students[i].name) {
          return students[i];
        } 
        
       /*  if(student !== students[i].name){
            console.log("Not in the list !");
        } */


  }
};

const { name, track, achievements, points } = getStudentReport(calledStudent);
console.log(`-------------------------------------------\n${name} - ${track} - ${achievements} - ${points}\n-------------------------------------------`);

