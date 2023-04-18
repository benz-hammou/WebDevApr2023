// First make a reusable function 
const global = params => document.createElement(params)

// watch the parent container of all 
parentContainer = document.querySelector('.container')


// creat the elements
const table = global('table')
const tHead = global('thead')
const tBody = global('tbody')

const tR_tHead = global('tr')
const tR_tBody = global('tr')
const tH1 = global('th')
const tH2 = global('th')
const tH3 = global('th')

const tD1 = global('td')
const tD2 = global('td')
const tD3 = global('td')


// assaigned the element to her parents
parentContainer.appendChild(table)
table.appendChild(tHead)
table.appendChild(tBody)

tHead.appendChild(tR_tHead)
tR_tHead.appendChild(tH1)
tR_tHead.appendChild(tH2)
tR_tHead.appendChild(tH3)

tBody.appendChild(tR_tBody)
tR_tBody.appendChild(tD1)
tR_tBody.appendChild(tD2)
tR_tBody.appendChild(tD3)


// Add texte to the elements 
tH1.innerText = "#"
tH2.innerText = "username"
tH3.innerText = "password"

tD1.innerText = "1"
tD2.innerText = "root"
tD3.innerText = "root123"
