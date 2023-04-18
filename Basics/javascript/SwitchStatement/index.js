
switch(Age>17){
    //     case false:
    //         console.log('You are not allowed to enter casino')
    //         break;
    //     case true:
    //         console.log('You are real gambler :D');
    //         break;
    // }
    
    // var userRequest = 'remove';
    
    // function AddUser(){
    //     console.log('User is added')
    // }
    
    // function RemoveUser(){
    //     console.log('User is removed');
    // }
    
    // switch(userRequest){
    //     case 'remove':
    //         RemoveUser();
    //         break;
    //     case 'add':
    //         AddUser();
    //         break;
    //     default:
    //         console.log('Command not found');
    // }
    
    let days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    let getDay = new Date().getDay()
    
    // switch (getDay) {
    //     case 0:
    //         console.log(`Day of week: ${days[getDay]}`)
    //         break;
    //     case 1:
    //         console.log(`Day of week: ${days[getDay]}`)
    //         break;
    //     case 2:
    //         console.log(`Day of week: ${days[getDay]}`)
    //         break;
    //     case 3:
    //         console.log(`Day of week: ${days[getDay]}`)
    //         break;
    //     case 4:
    //         console.log(`Day of week: ${days[getDay]}`)
    //         break;
    //     case 5:
    //         console.log(`Day of week: ${days[getDay]}`)
    //         break;
    //     case 6:
    //         console.log(`Day of week: ${days[getDay]}`)
    //         break;
    // }
    var product="coffee";
    const output = document.getElementById('result')
    
    function GetProductResult(){
        switch(product){
            case 'coffee':
                return 'Product is coffee'
        }
    }
    
    let productResult = GetProductResult()
    console.log(productResult)
    output.innerText=productResult