import React from 'react'
import { useState } from 'react'

const Profile = () => {
  return (
    <h1>Profile</h1>
  )
}
const Posts = ({ singlePost }) => {
  return (
    <li>{singlePost.title}</li>
  )
}

const App = () => {
  const data = 'dsfgsherhtt,rj'
  const [state, setState] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [username, setUsername] = useState(undefined)
  const test = "this is a test"
  // const data = []
  const clickHanler = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {

        setState(posts)
        // setUsername('Dummy Data')
        setIsClicked(!isClicked)

        setTimeout(() =>{
          setUsername(["a", "b", "c", "d"])
        setIsClicked(false)
        }, 1000)
        
      })
      
  }
  return (
    <div>
      <button onClick={clickHanler}>Get Posts</button>

     {

     /*  <h1>{username ? username.map((user, id) => {
        return <h1 key={id}>{user}</h1>
      }) : "Loading..."}</h1> */
      
      isClicked ? 'Loading' : username ? username.map((user, id) => (
        <h1 key={id}> {user} </h1>)) 
        : ''
      
      }



      {state.map((post, index) => (
        <Posts singlePost={post} key={index} />
      ))
      }
    </div>
  )
}



export default App