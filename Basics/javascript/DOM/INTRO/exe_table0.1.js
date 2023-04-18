const ParentElement = document.querySelector('.container')

const g = t => document.createElement(t)

const t = content => document.createTextNode(content)


const table = g('table')
const thead = g('thead')
const tbody = g('tbody')

const thead_tr = g('tr')

const th1 = g('th')
th1.appendChild(t('#'))

const th2 = g('th')
th2.appendChild(t('username'))

const th3 = g('th')
th3.appendChild(t('password'))

const th_Element = [th1,th2,th3]
th_Element.forEach(th=>thead_tr.appendChild(th))

thead.appendChild(thead_tr)
table.appendChild(thead_tr)

const tbody_tr = g('tr')

const td1 = g('td')
td1.appendChild(t('1'))
const td2 = g('td')
td2.appendChild(t('root'))
const td3 = g('td')
td3.appendChild(t('toor123'))

const tdElement = [td1,td2,td3]
tdElement.forEach(td=>tbody_tr.appendChild(td))

tbody.appendChild(tbody_tr)
table.appendChild(tbody)



ParentElement.appendChild(table)

console.log(thead_tr.innerHTML);