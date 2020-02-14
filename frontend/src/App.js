import React from 'react';
import {Navbar,NavbarBrand,Container} from 'reactstrap'
import {NavLink as RouterNavLink,Route,Switch} from 'react-router-dom'
import './App.css';
import Main from "./container/recipes/Main";

function App() {
  return (
      <div>
          <Navbar color="light" light>
              <NavbarBrand tag={RouterNavLink} to="/">IMAGE BOARD</NavbarBrand>

          </Navbar>
          <Container>
            <Switch>
                <Route to="/" component={Main}/>
            </Switch>
          </Container>
      </div>
  );
}

export default App;
