/* esLint disable */
import React, {useState, useContext} from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl  } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Detail from './detail.js';
import { Link, Route, Switch } from 'react-router-dom'
import Cart from './cart.js';

export let 재고context = React.createContext();

function App() {
  let [shoes,shoes변경] = useState(data)
  let [재고,재고변경] =useState([10,11,12])
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">신발가게</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className='background'>
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          <재고context.Provider value={재고}>
          {<div className="container">
            <div className="row">
              {
                shoes.map((a, i)=>{
                  return (
                    <ShoeList data={shoes[i]} i={i} key={i} />
                  )
                })
              }

            </div>
          </div>}
          </재고context.Provider>
        </Route>
        
        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail shoes={shoes}/>
          </재고context.Provider>
        </Route>

        <Route path='/cart'>
          <Cart></Cart>
        </Route>
      </Switch>
      

      

    </div>
  );

  function ShoeList(props){

    let 재고 = useContext(재고context)
    
    return(
      <div className="col-md-4"><Link to={'/detail/'+(props.data.id)}>
        <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="100%" />
        <h4>{props.data.title}</h4>
        <p>{props.data.content}</p>
        {재고}
      </Link></div>
    )
  }
}

export default App;


