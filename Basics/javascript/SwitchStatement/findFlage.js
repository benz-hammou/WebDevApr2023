// Exe
// Decode flag to get the message
var flag1 = [
    '=', 'E', 'S', 'Z', 'z', 'l', '2', 'Y',
    'y', 'V', 'G', 'e', 'l', 'B', 'S', 'Z',
    'o', 'R', 'H', 'I', 'k', 'V', 'G', 'd',
    'l', 'x', 'G', 'c'
]

var flag2 = ['t', '9', '2', 'Y',
    'g', 'U', 'm', 'd', 'n', 'U', '3', 'b',
    'Z', 'B', 'S', 'I', 'l', '5', '2', 'b',
    'k', 'B', 'C', 'b', 's', 'V', '2', 'V']

// 1. Merge the two arrays into one array
let mergeArray = flag1.concat(flag2);

// 2. Reverse the array
mergeArray.reverse()
// console.log(mergeArray.reverse())

// 3. Convert the array to a string
mergeArray.join("")
console.log(mergeArray.join(""));

// 4. Print the decrypted message  (Possible algorithms: Base64 Encoded String)
console.log(atob(mergeArray.join(""))) // atob > decode | btoa > encode