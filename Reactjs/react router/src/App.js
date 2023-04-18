import {Container,Row,Col} from 'react-bootstrap'
import Article from './components/Article'
import BlueButton from './components/Button'
import Child from './components/Child'
import Post from './components/Post'

const App = () => {
  return (
    
    <Container>
        <BlueButton color={'info'}>info</BlueButton>
        <BlueButton color={'success'}>success</BlueButton>
        <BlueButton color={'danger'}>danger</BlueButton>
        <BlueButton color={'secondary'}>secondary</BlueButton>
        <Child username="Bilal"/>
        <Row>
            <Col md={6} className='bg-dark text-light' >
                <h1>Left Column</h1>
                <Post className="text-light" title="Post Title" image="https://picsum.photos/200">
                    gfhhfgfrtrtrtrtrt
                </Post>
            </Col>
            <Col md={6} className='bg-light text-dark'>
                <h1>Right Column</h1>
                <Article className="text-light" title="Post Title" image="https://picsum.photos/200" content="Hello men"/>
            </Col>
        </Row>
    </Container>
  
  )
}

export default App