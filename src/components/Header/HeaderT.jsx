import React, {useState} from "react";
import s from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/img/unibilim-logo-web.svg'
import logoMobile from "../../assets/img/logo mobile.svg"
import {Sling as Hamburger} from 'hamburger-react'
import {NavLink} from "react-router-dom";

function HeaderT() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container className={s.header}>
                    <Navbar.Brand href="/" className={s.desktop__logo}>
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Brand href="/" className={s.mobile__logo}>
                        <img src={logoMobile} alt="logo"/>
                    </Navbar.Brand>
                    <div className={s.teachheader}>
                        <Hamburger toggled={isOpen} toggle={setOpen} rounded onToggle={toggled => {
                            if (toggled) {
                            } else {
                            }
                        }}/>
                    </div>
                </Container>
            </Navbar>
            {isOpen && (
                <div className={s.menu__header}>
                    <div className={s.menu__header_block}>
                        <NavLink to="/teachlk"
                                 className={navData => navData.isActive ? `${s.menu__header__link__active} ${s.menu__header__link}` : s.menu__header__link}>
                            Обо мне
                        </NavLink>
                    </div>
                    <div className={s.menu__header_block}>
                        <NavLink to="/subjtable"
                                 className={navData => navData.isActive ? `${s.menu__header__link__active} ${s.menu__header__link}` : s.menu__header__link}>
                            Расписание
                        </NavLink>
                    </div>
                    <div className={s.menu__header_block}>
                        <NavLink to="/studlist"
                                 className={navData => navData.isActive ? `${s.menu__header__link__active} ${s.menu__header__link}` : s.menu__header__link}>
                            Ученики
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderT;
