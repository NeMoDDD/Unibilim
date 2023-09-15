import React, {useState} from "react";
import s from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/img/unibilim-logo-web.svg'
import logoMobile from "../../assets/img/logo mobile.svg"
import {Sling as Hamburger} from 'hamburger-react'
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/loginReducer";
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion";

function HeaderT() {
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.loginReducer)

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
                    {token !== null ?
                        <div className={s.logout}>
                            <button onClick={() => dispatch(logout())}>Выйти</button>
                        </div>
                        : null}
                    <div className={s.teachheader}>
                        <Hamburger toggled={isOpen} toggle={setOpen} rounded onToggle={toggled => {
                            if (toggled) {
                            } else {
                            }
                        }}/>
                    </div>
                </div>
            </Navbar>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.25}}
                    className={s.menu__header}
                >
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
                    {token !== null ?
                        <div className={s.menu__header_block}>
                            <button className={s.logout_btn} onClick={() => dispatch(logout())}>Выйти</button>
                        </div>
                        : null}
                </motion.div>
            )}
        </div>
    );
}

export default HeaderT;
