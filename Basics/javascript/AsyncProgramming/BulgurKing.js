// BulgurKing Ordering Machine

const BulgurKing = (food, drink, sauce) => {
    
    return new Promise((resolve, reject) => {
        let arr = [food, drink, sauce]
        const regex = /[0-9]/g;
        let condition = arr.filter(item=>item.match(regex))

        // If input arr include regex, there will add 1 length !
        // If any of inpur arr include regex, there have 0 lenght !!!
        if(condition.length === 0){resolve({
            food: food,
            drink: drink,
            sauce: sauce
        })}else{
            reject(
                'Without Number, Please !!!'
            )
        }
    })
}

BulgurKing('FriedBulgurWhithChiken', 'Ayran', 'Looksauce')
    .then(result => {
        console.log(result);
    })
    .catch(err=>console.log(err))

    /* const username = "admin123"
    console.log(username);

    const splitData = username.split("")
    console.log(splitData);
    splitData.forEach(char=>{
        console.log(typeof char);
    }) */