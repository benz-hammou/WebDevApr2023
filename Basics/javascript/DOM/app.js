// Find li elements 
const liItems = document.querySelectorAll('li.list-group-item:nth-child(even)') // object

const ListContainer = document.querySelector('.list-group')

const TeaElement = document.querySelector('.tea')

console.log(liItems);
/* liItems.forEach((li,index)=>{
    console.log(li) // > each li element
    // className
    console.log(li.className)
    li.className="list-group-item bg-dark text-light"
    li.innerHTML =`<h1>Item-${index}</h1>` // update content of element or elements
  // li.innerText = `<h1>hello </h1>` // NO HTML TAGs
    // li.innerText > only string <p>hello</p>
})
 */
liItems.forEach((li, index) => {
    console.log(li)
    li.classList.add('bg-dark')
    li.classList.add('text-light')
    // console.log(li.classList.contains('list-group-item'))
    li.classList.remove('coffee')
    if(li.classList.contains('coffee')){
        li.classList.remove('coffee')
    }
})

const liElement = document.createElement('li')

liElement.setAttribute('class', 'list-group-item')
liElement.classList.add('bg-danger')
liElement.classList.add('text-light')
liElement.innerText="This is new li element"

// console.log(liElement,"this is new li");

ListContainer.appendChild(liElement)

const g = t => document.createElement(t)

const newTask = g('li')
newTask.classList.add('list-group-item')
newTask.classList.add('bg-primary')
newTask.classList.add('text-light')
newTask.innerText="This is another li"
ListContainer.appendChild(newTask)

// 

TeaElement.previousElementSibling.innerText="This is sibling of Tea element"
TeaElement.previousElementSibling.previousElementSibling.innerText="This is the first sibling"
TeaElement.previousElementSibling.previousElementSibling.classList.add('bg-success')
TeaElement.previousElementSibling.previousElementSibling.classList.add('text-light')

console.log(TeaElement.previousElementSibling);

//nextSibling

TeaElement.nextElementSibling.innerText="Next sibling of Tea element"

// first remove the classe bg-dark
TeaElement.nextElementSibling.classList.add('bg-danger')

