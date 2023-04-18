async function IPromise(name) {
    let res = await name
    return res
}

IPromise('Soldier')
.then(data => {
    console.log(data);
})

console.log(IPromise());