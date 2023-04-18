import {Card, Button} from 'react-bootstrap'
function Article({content,title,image}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title className='text-dark'>{title}</Card.Title>
    <Card.Text className='text-dark'>
     {content}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  )
}

export default Article