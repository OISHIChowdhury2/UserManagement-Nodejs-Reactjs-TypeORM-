import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from './profile';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import edit from '../component/edit';
function HomePage() {
    
  const [users,setUser] = useState([]);
  const getAll = async () => {
    try{      
      const response = await fetch('http://localhost:3000/reg/all');
      const jsonData = await response.json()
    setUser(jsonData);
    }
    catch(err){
      console.log(err.massage);
    }
  }
  useEffect(()=>{
    getAll();
  },[]);


  const delectUser = async id =>{
    try {
      const delectUser = await fetch
      (`http://localhost:3000/reg/delete/${id}`,{
        method: "DELETE"
      });
    
       setUser(users.filter(user => user.id !== id));
      console.log(delectUser);
    }
    catch (err){
      console.log(err.massage);
    }
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="./edit">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

 <Container>

  
 <h1>Show All The User's</h1> 
{users.map(all =>(

<Card style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>Infromation Card</Card.Title>
       <Card.Text>
     
       <div className="container">
       <div className="row row-cols-4">
      <div className="col-6">
      <div>{all.firstName} {all.lastName}</div>
         <div>{all.email}</div>
         <div>{all.role}</div>
      </div>
      <div className="col-6">col-4</div>
    </div>
    </div>
        </Card.Text>
        <div className="container">
       <div className="row ">
        <div className="col-2">
        <Button href="./edit" variant="primary">Edit</Button>
        </div>
        <div className="col-6">
        <Button className='btn btn-danger' onClick={()=>delectUser(all.id)}>Delete</Button>
        </div>
        </div>
        </div>
      </Card.Body>
    </Card>
    ))}
</Container>

</>
  );
}
export default HomePage;