import React, {useState} from "react";
import s from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/img/unibilim-logo-web.svg'
import logoMobile from "../../assets/img/logo mobile.svg"
import {Sling as Hamburger} from 'hamburger-react'
import {NavLink} from "react-router-dom";

function HeaderFS() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <Navbar bg="white" expand="lg">
                <div className={s.header}>
                    <Navbar.Brand href="/" className={s.desktop__logo}>
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Brand href="/" className={s.mobile__logo}>
                        <img src={logoMobile} alt="logo"/>
                    </Navbar.Brand>
                    <div className={s.studheader}>
                        <Hamburger toggled={isOpen} toggle={setOpen} rounded onToggle={toggled => {
                            if (toggled) {
                            } else {
                            }
                        }}/>
                    </div>
                </div>
            </Navbar>
            {isOpen && (
                <div className={s.menu__header}>
                    <div className={s.menu__header_block}>
                        <NavLink to="/studlk"
                                 className={navData => navData.isActive ? `${s.menu__header__link__active} ${s.menu__header__link}` : s.menu__header__link}>
                            Обо мне
                        </NavLink>
                    </div>
                    <div className={s.menu__header_block}>
                        <NavLink to="/timetable" className={navData => navData.isActive ? `${s.menu__header__link__active} ${s.menu__header__link}` : s.menu__header__link}>
                            Расписание
                        </NavLink>
                    </div>
                    <div className={s.menu__header_block}>
                        <NavLink to="/teachlist" className={navData => navData.isActive ? `${s.menu__header__link__active} ${s.menu__header__link}` : s.menu__header__link}>
                            Консультанты
                        </NavLink>
                    </div>
                    <div className={s.menu__header_block}>
                        <NavLink to="/reservation" className={navData => navData.isActive ? `${s.menu__header__link__active} ${s.menu__header__link}` : s.menu__header__link}>
                            Бронирование
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderFS;
