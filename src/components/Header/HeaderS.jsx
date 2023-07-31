import React from "react";
import s from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/img/unibilim-logo-web.svg'
import logoMobile from "../../assets/img/logo mobile.svg"

function HeaderFS() {
    return (
        <Navbar bg="white" expand="lg">
            <Container className={s.header}>
                <Navbar.Brand href="/" className={s.desktop__logo}>
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Brand href="/" className={s.mobile__logo}>
                    <img src={logoMobile} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <div className="studheader">
                    {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                    {/*    <Nav className="me-auto">*/}
                    {/*        <Nav.Link href="/pastud">Обо мне</Nav.Link>*/}
                    {/*        <Nav.Link href="/timetable">Расписание</Nav.Link>*/}
                    {/*        <Nav.Link href="/teachlist">Консультанты</Nav.Link>*/}
                    {/*        <Nav.Link href="/reservation">Бронирование</Nav.Link>*/}
                    {/*    </Nav>*/}
                    {/*</Navbar.Collapse>*/}
                </div>
            </Container>
        </Navbar>
    );
}

export default HeaderFS;
