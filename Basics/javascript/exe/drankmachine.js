// snack machine

const options = {
    drink: [
        { name: 'cola', price: 1.0 },
        { name: 'fanta', price: 1.3 },
        { name: 'sprite', price: 1.2 },
        { name: 'water', price: 1.0 },
        { name: 'coffee', price: 2.3 },
        { name: 'tea', price: 2.4 },
    ],
    fastfood: [
        { name: 'hamburger', price: 4.0, label: 'non-halal' },
        { name: 'cheeseburger', price: 4.3, label: 'non-halal' },
        { name: 'hotdog', price: 3.5, label: 'non-halal' },
        { name: 'fries', price: 4.3, label: 'halal' },
        { name: 'chicken nuggets', price: 5.0, label: 'halal' },
    ],
    sauces: [
        { name: 'ketchup', price: 0.4 },
        { name: 'mayonnaise', price: 0.4 },
        { name: 'mustard', price: 0.5 },
        { name: 'bbq', price: 0.6 },
        { name: 'garlic', price: 0.6 },
        { name: 'hot sauce', price: 0.6 },
    ]
}

// Create MakeOrder function that takes 3 parameters: drink, fastfood, sauces and returns the total price of the order
const MakeOrder = (drink, fastfood, sauces) => {
    let total = 0
    const getDrink = options.drink.find(item => item.name == drink)
    const getFastfood = options.fastfood.find(item => item.name == fastfood)
    const getSauces = options.sauces.find(item => item.name == sauces)

    total += getDrink.price
    total += getFastfood.price
    total += getSauces.price
    return {
        drink,
        fastfood,
        sauces,
        total
    }
}

// Create displayOrder function that displays the order in the console
const displayOrder = (order) => {
    console.log(`You ordered a ${order.drink}, ${order.fastfood} with ${order.sauces} and the total is ${order.total}€`);
}

displayOrder(MakeOrder("cola", "fries", "ketchup"))

// find if Halal Food 
const getLabelHalal = (label) => {
    return options.fastfood.filter(food => food.label === label)
}

// display Halal Food 
getLabelHalal('halal').forEach(item => {
    console.log(`-------------\nHalal Product: ${item.name}\nPrice:${item.price}\n`)
})