var x=[1,2,3,4,5,6,7,8]
var y=[2,3,3,3,3,4,5,5];
var found=[]
var random = [2,2,3,3,4,4,5,5,6,6]
x.forEach(n1=>{
    //console.log(n1)
    y.forEach(n2=>{
        //console.log(n2)
        if(n1==n2){
            console.log(true);
            found.push(n1)
        }else{
            console.log(false);
        }
    })
})
const uniqueFound = [new Set(...[found])]
console.log(uniqueFound,'without duplication')

console.log(new Set(...[random]))

var n1=[1,2,3,4,5]
var n2=[6,6,6,6,6]
var result = [...n1,...n2]
console.log(result)
