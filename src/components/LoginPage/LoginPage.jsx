import React from "react";
import './LoginPage.scss'
import { useForm } from "react-hook-form";
import s from './Login.module.css' 
import Header from '../Header/Header'
const LoginPage = () => {
  const { reset, handleSubmit,register } = useForm()
  const onSubmit = (dataForm) => {
    console.log(dataForm)
  }
  return ( 
    <> 
     <Header/>
    <div className={s.login__page}> 
    <div className={s.login}>
      <form className={s.login__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form__in}>Вход</div>
        <div className={s.form__data}>
          <div className={s.form__tel}>Телефон</div>
          <input type="tel" className={s.form__tel_input}  
          {...register('phoneNumber',{required:true})} 
          /> 
        </div>
        <button type='submit' className={s.form__submit}>Продолжить</button>
      </form>
    </div>
    </div>
    </> 
  );
};

export default LoginPage;

// <div className="up_block">
//   <div className="login_block">
//     <p className="vhod">Вход</p>
//     <p className="phone_txt">Телефон</p>
//     <input type="phone" placeholder="+996556924582" className="phon_npt"></input>
//     <button type="submit" className="log_in">Продолжить</button>
//   </div>
// </div>