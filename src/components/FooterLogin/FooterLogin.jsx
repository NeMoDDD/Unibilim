import React from 'react'
import s from './FooterLogin.module.css'
import { Link } from 'react-router-dom' 
import visa from '../../assets/img/visa-colored 1.svg' 
import masterCard from '../../assets/img/Mastercard-logo 1.svg' 
import elCard from '../../assets/img/image 3.png' 

const FooterLogin = () => {
  return (
    <footer className={s.footer}>
        <div className={s.footer__container}>   
            <div className={s.footer__name}>ОсОО Юнибилим</div> 
            <div className={s.footer__links}> 
                <Link to={'/#'} className={s.footer__link_item}>Политика конфиденциальности</Link>
                <Link to={'/#'} className={`${s.footer__link_item} ${s.footer__link_item_margin}`  }>Публичная оферта</Link>
                <Link to={'/#'} className={s.footer__link_item}>О компании</Link>
            </div> 
            <div className={s.footer__card}>
                <img src={visa} alt="Visa Card Icon" />
                <img className={s.footer__card_img} src={masterCard} alt="Master Card Icon" />
                <img src={elCard} alt="El Card Icon" />
            </div>
        </div>
    </footer>
  )
}

export default FooterLogin