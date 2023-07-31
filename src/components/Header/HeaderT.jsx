import React from "react";
import s from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/img/unibilim-logo-web.svg'
import {NavLink} from "react-router-dom";
import logoMobile from "../../assets/img/logo mobile.svg";

function HeaderT() {
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
