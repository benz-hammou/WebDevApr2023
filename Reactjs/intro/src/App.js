import Spider_logo from './spider.jpg'
import { drink, food } from '../utils/action'
import Profile from './components/Profile'

const App = () => {

  const msg = 'hello Dude'
  const arr = [1, 2, 3, 4, 5]
  const users = { username: 'root' }

  const allUsers = [{ salam: 'aleikoum' }, { ola: 'commo estans' }, { aleikoum: 'salam' }]

  const GetMessage = () => {
    const msg = `this is another message ${drink} & ${food}`
    return <h1>{msg}</h1>
  }

  return (
    <>
      <h1>Hello World</h1>
      <h1>this is another message</h1>

      <img src={Spider_logo} width={400} />
      <img src='./spider_1.jpg' width={400} />

      <h2>{msg}</h2>
      <h3>{arr}</h3>
      <h3>{users.username}</h3>

      {
        allUsers.map((key) => <h1>proprety_name = {Object.keys(key)} <br /> Value = {Object.values(key)} </h1>)
      }
      <Profile drink="Hello World" myName="Jonh Doe" />
      <GetMessage />
    </>
  )
}

export default App