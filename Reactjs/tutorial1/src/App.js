import Footer from "./components/footer"
import Header from "./components/header"
import Newsfeed from "./components/newsfeed"

function App() {
    const handleInput = (e) =>{
        console.log(e.target.value);
       
    }
  return (
    <div>
        <Header/>
        <Newsfeed/>
        <input type='text' onKeyDown={handleInput}/>
        <Footer/>
    </div>
  )
}

export default App