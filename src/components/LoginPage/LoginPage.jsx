import {Controller, useForm} from "react-hook-form";
import s from './Login.module.css'
import Header from '../Header/Header'
import React from "react";
import './LoginPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {setUserName} from "../../redux/loginReducer";

const LoginPage = (props) => {
  const {control, handleSubmit, setError, clearErrors, formState: {errors}} = useForm({
    mode: "onBlur",
  })
  const dispatch = useDispatch()
    const {userName} = useSelector(state => state.loginReducer)
  const onSubmit = () => {
      console.log(props)
      props.login(props.userName, props.password)
    // dispatch(registerNewStudent(name, password, checkPassword, phone, tgName, dateOfBirth, region, city, districtCity))
  };
  return ( 
    <> 
     <Header/>
    <div className={s.login__page}> 
    <div className={s.login}>
      <form className={s.login__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form__in}>Вход</div>
        <div className={s.form__data}>
          <div className="input-form-block">
            <p className="nm-txt">Имя</p>
            <Controller
                name="name"
                control={control}
                rules={{
                  required: "Это поле обязательное!",
                  onChange: (e) => props.setUserName(e.target.value)
                }}
                render={({field}) => <Input {...field}
                                            className={errors.name ? "npt-txt npt-txt-errors" : 'npt-txt'}
                />}/>
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
          <div className="input-form-block">
            <p className="nm-txt2">Пароль</p>
            <Controller
                name="password"
                control={control}
                rules={{
                  required: "Это поле обязательное!",
                  onChange: (e) => props.setUserPassword(e.target.value)
                }}
                render={({field}) => <Input.Password {...field}
                                                     iconRender={(visible) => (visible ? <EyeTwoTone/> :
                                                         <EyeInvisibleOutlined/>)}
                                                     className={errors.password ? "npt-txt npt-txt-errors" : 'npt-txt'}
                />}
            />
            {errors.password &&
                <p
                    className="error-message">{errors.password.message || "Это поле обязательное!"}</p>}
          </div>
        </div>
        <button type='submit' className={s.form__submit}>Продолжить</button>
      </form>
    </div>
    </div>
    </> 
  );
}; 
export default LoginPage;
