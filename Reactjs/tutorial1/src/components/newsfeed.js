import React from 'react'

const Newsfeed = () => {
    const handleClick = () => alert('hello world')
    const handleMouseEvent = () => console.log('hellooo');
    const handleNewsData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    return (
        <ul>
            <li onClick={handleClick}>text1</li>
            <li onMouseOver={handleMouseEvent}>text2</li>
            <li onClick={handleNewsData}>text3</li>
            <li>text4</li>
        </ul>
    )
}

export default Newsfeed