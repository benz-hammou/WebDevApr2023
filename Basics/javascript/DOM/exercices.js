const ParentContainer = document.querySelector('.container')
const g = t => document.createElement(t)

const ULContainer = g('ul')
ULContainer.className = "list-group list-group-flush" // sets className for <ul> element

function LiItemGenerator(content, bgColor, textColor) {
    const LiItem = g('li'); // created <li> tag
    LiItem.className = `list-group-item ${bgColor} ${textColor}` // sets className for <li> 
    LiItem.innerText = content
    return LiItem
}

const LiElement = g('li') // created <li> tag
LiElement.className = 'list-group-item' // sets className for <li> 
LiElement.innerText = "this is an example li"

// const Item1 = LiItemGenerator('Item-1 test')
// const Item2 = LiItemGenerator('Item-2 example example')
// const Item3 = LiItemGenerator('Item-3 example example')
// const Item4 = LiItemGenerator('Item-4 example example')
// const Item5 = LiItemGenerator('Item-5 example example')
// ULContainer.appendChild(Item1) // li inserted into UL
// ULContainer.appendChild(Item2)
// ULContainer.appendChild(Item3)
// ULContainer.appendChild(Item4)
// ULContainer.appendChild(Item5)


// ULContainer.appendChild(LiElement)
// ParentContainer.appendChild(ULContainer)

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        const item = LiItemGenerator(`Item-${i} example`, 'bg-dark', 'text-light')
        ULContainer.appendChild(item)
    } else {
        const item = LiItemGenerator(`Item-${i} example`)
        ULContainer.appendChild(item)
    }
}

ParentContainer.appendChild(ULContainer)
console.log(ULContainer, LiElement);