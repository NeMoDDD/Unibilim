import React from 'react';
import '../SideBar/SideBar.scss'

const Home = () => {
    return (
        <div className='homepage'>
            <a className='about-me' href="/teachcab">Личный кабинет учителя</a>
            <a className='about-me' href="/pastud">Личный кабинет ученика</a>
        </div>
    );
}

export default Home;
