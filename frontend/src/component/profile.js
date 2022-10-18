import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
function Profile() {
   
        // axios.get(" http://localhost:3000/reg/all")
        // .then( res=> 
        //     console.log(res.data)
        // )

  return (
    <Card style={{ width: '18rem', position: 'center' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link type="button" href="#">Update</Card.Link>
        <Card.Link href="#">View</Card.Link>
        <Card.Link href="#">Delect</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Profile;