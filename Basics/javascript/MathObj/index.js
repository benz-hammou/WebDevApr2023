/* // Random Numbers random()
// new Math()

let app = Math.PI
app = Math.max(...[54,545,88,999,94,2])

app = Math.max(44,55,66,77,88,99)
// app = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]].flat(3)
// app = [1,2,3,...[4,5,6,...[7,8,9,...[10,11,12]]]] // spread operator

app = Math.min(33,44,55,66,77,88) // find lowest number
app = Math.min(-1,-10,10,20,-20);

app = Math.floor(1000.4);
app = Math.round(1000.5); // 1001
app = Math.abs(-20); // always positive 

app = Math.random() // 0 - 0.9 
app = Math.round(Math.random()*9 +1) // 1-10
app = Math.round(Math.random()*3) // 0-3

const students = ['mohammed','bilal','arhisa','nina','zana']; // 0-4
const RandomName = Math.round(Math.random()*4)
console.log(students[RandomName])

const diceRoll={
    dice1:[1,2,3,4,5,6],
    dice2:[1,2,3,4,5,6]
}

const dice1Random = Math.round(Math.random()*5) // 0-5
const dice2Random = Math.round(Math.random()*5) // 0-5
console.log(`Dice1: ${diceRoll.dice1[dice1Random]}\nDice2: ${diceRoll.dice2[dice2Random]}`)
// console.log(app)
console.log(app); */

const  dice1text = document.getElementById('dice1')
const  dice2text = document.getElementById('dice2')
const  output = document.getElementById('result')
const winnerGif = document.getElementById('winner')
let count=0

// Generate random

function DiceRoll(){
    const dice1Random = Math.round(Math.random()*5+1)
    const dice2Random = Math.round(Math.random()*5+1)

    dice1text.innerText=`Dice1 ${dice1Random}`
    dice2text.innerText=`Dice2 ${dice2Random}`
    if(dice1Random === dice2Random){
        count++
        output.innerText='You Win!' + count
        winnerGif.src="https://media0.giphy.com/media/lnlAifQdenMxW/giphy.gif?cid=6c09b9522fd2zz9nr8ow2cde9i98ldq97ital52i8rbqynv7&rid=giphy.gif&ct=g"
        winSound.play()
    }else{
        winnerGif.src=""
    }
    setTimeout(()=>{
        winnerGif.src=""
    }, 3000)
}

function ClickHandler(){
    DiceRoll()
}