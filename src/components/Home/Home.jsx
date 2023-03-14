import React from 'react';
import '../SideBar/SideBar.scss'

const Home = () => {
    return (
        <div className='homepage'>
            <a className='about-me' href="/teachlk">Личный кабинет учителя</a>
            <a className='about-me' href="/studlk">Личный кабинет ученика</a>
        </div>
    );
}

export default Home;
