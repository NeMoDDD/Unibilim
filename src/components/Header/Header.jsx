import React from "react";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="logo">
          UNIBILIM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="studheader">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/pastud">Обо мне</Nav.Link>
              <Nav.Link href="/timetable">Расписание</Nav.Link>
              <Nav.Link href="/teachlist">Консультанты</Nav.Link>
              <Nav.Link href="/reservation">Бронирование</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="teachheader">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/pastud">Обо мне</Nav.Link>
              <Nav.Link href="/subjtable">Расписание</Nav.Link>
              <Nav.Link href="/studlist">Консультанты</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
