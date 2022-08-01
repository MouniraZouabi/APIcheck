import UserList from "./UserList";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const App = () => {
 
 return (
   <div>
    <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <h2>  <img
              alt="flower"
              src="https://icon-library.com/images/user-icon-png-transparent/user-icon-png-transparent-23.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />   {' '}
      <span style={{color :"#0492C2" ,fontFamily:"revert",fontSize:"25px"}}>  Users List</span>  </h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
     <UserList/>
   </div>
 );
};
export default App;