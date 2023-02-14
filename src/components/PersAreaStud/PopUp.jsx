import React from 'react';
import teach2 from '../../assets/img/teach2.png'

const PopUp = () => {
    return (
        <div className='popup_block'>
            <div className="pop_info">
                <p className='pop_subj'>Математика</p>
                <img src={teach2} alt="" className='pop_img'/>
                <p className='pop_name'>Зуева Ольга</p>
                <p className='pop_date'>Дата: 23янв, пн, 15:00</p>
            <div className="pop_info2">
                <p className='pop_subj'>Зуева Ольга</p>
                <p className='pop_about'>Преподаватель старших классов по математике СШГ №43. Более 9 лет обучает детей высшей математике. Имеет ряд наград за участие в развитии математики как науки. </p>
            </div>
                <div className="pop_btn" >
                    <p className='pop_date' style={{color:"#777777", marginTop:"25px"}}>Чтобы перейти к уроку, нажмите на кнопку ниже</p>
                    <button className='first_btn'><p className='btn_p'>Присоединиться к комнате с видео созвоном</p></button>
                    <div className="btn_flex">
                    <button className='nd_btn' style={{backgroundColor:"#69A5FF"}}>Написать</button>
                    <button className='nd_btn'>Перенести</button>
                    <button className='nd_btn' style={{border:"1px solid #FF6969", backgroundColor:"#FFFF", color:"#FF6969"}}>Отменить</button>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default PopUp;
