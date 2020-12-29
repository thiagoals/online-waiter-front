import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Jumbotron
} from 'reactstrap';

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Online Waiter</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/cardapio/">Cardápio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/meus-pedidos/">Meus pedidos</NavLink>
            </NavItem>
          </Nav>
          <Button color="primary">Pagar conta</Button>
        </Collapse>
      </Navbar>

      <div>
        <Jumbotron>
          <h1 className="display-4">Bem vindo</h1>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Home;