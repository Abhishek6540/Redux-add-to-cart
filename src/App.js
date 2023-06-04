import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';
import Products from "./Products";
import { useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const App = () => {

  const getState = useSelector((state) => state);

  return (
    <>
    
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
               <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <div className="h4" style={{marginRight:"2000px"}} ><Link to ="/Cart">
              <Badge badgeContent={getState.length} color="primary">
             <ShoppingCartIcon fontSize='large'  />
          </Badge>
          </Link>
          </div>
           </Nav>
        </Container>
      </Navbar>


      <Routes>

        <Route exact path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>

    </>

  );
}

export default App;