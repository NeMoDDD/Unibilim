import React from "react";
import s from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/img/unibilim-logo-web.svg'
import {NavLink} from "react-router-dom";

function HeaderT() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className={s.logo}>
                    <img src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                {/*<div className="teachheader">*/}
                {/*    <Navbar.Collapse id="basic-navbar-nav">*/}
                {/*        <Nav className="me-auto">*/}
                {/*            <NavLink to="/teachlk">Обо мне</NavLink>*/}
                {/*            <NavLink to="/subjtable">Расписание</NavLink>*/}
                {/*            <NavLink to="/studlist">Консультанты</NavLink>*/}
                {/*        </Nav>*/}
                {/*    </Navbar.Collapse>*/}
                {/*</div>*/}
            </Container>
        </Navbar>
    );
}

export default HeaderT;
