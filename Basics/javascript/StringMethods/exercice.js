// string methods exercise 
var binaryTree = `01101010 01100001 01110110 01100001 01110011 01100011 01110010 01101001 01110000 01110100 00100000 01101001 01110011 00100000 01100011 01101111 01101111 01101100 01101010 01100001 01110110 01100001 01110011 01100011 01110010 01101001 01110000 01110100 00100000 01101001 01110011 00100000 01100011 01101111 01101111 01101100`
// find length of ones and zeros
function binaryLength(){
var length1 = binaryTree.match(/1/g).length
var length0 = binaryTree.match(/0/g).length
var sum = length0 + length1
return `We have ${length0} 0, And ${length1} 1. \nAbd the sum of both is ${sum}`
}
console.log(binaryLength()); 