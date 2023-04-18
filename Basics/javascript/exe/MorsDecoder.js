const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
}

let encoded = "... . -.-. .-. . -"

function decodeMorse(encoded) {
    return encoded.split(" ").map(code => {
        return Object.entries(morseCode).map(x=>{
            if(x[1]==code){
                return x[0]
            }
        })
    })
}

let message=""
message+=decodeMorse(encoded)
console.log(message.replace(",",""))

