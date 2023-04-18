
import {Card, Button} from 'react-bootstrap'

const Post = ({children,title,image}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='text-dark'>{title}</Card.Title>
        <Card.Text className='text-dark'>
         {children}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Post