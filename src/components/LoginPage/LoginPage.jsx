import {Controller, useForm} from "react-hook-form";
import Header from '../Header/HeaderS'
import React from "react";
import s from './LoginPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {login, setUserName, setUserPassword} from "../../redux/loginReducer";
import {Navigate} from "react-router-dom";

const LoginPage = (props) => {
    const {control, handleSubmit, setError, clearErrors, formState: {errors}} = useForm({
        mode: "onBlur",
    })
    const dispatch = useDispatch()
    const {userName, password, token, userRole} = useSelector(state => state.loginReducer)
    const onSubmit = () => {
        dispatch(login(userName, password))
        // dispatch(registerNewStudent(name, password, checkPassword, phone, tgName, dateOfBirth, region, city, districtCity))
    };
    return (
        <>
            <Header/>
            {userRole === null ?
            <div className={s.login__page}>
                <div className={s.login}>
                    <form className={s.login__form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.form__in}>
                            <p className={s.form__in__text}>Вход</p>
                        </div>
                        <div className={s.form__data}>
                            <div className="input-form-block">
                                <p className="nm-txt">Имя</p>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{
                                        required: "Это поле обязательное!",
                                        onChange: (e) => dispatch(setUserName(e.target.value))
                                    }}
                                    render={({field}) => <Input {...field}
                                                                className={errors.name ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                    />}/>
                                {errors.name && <p className={s.error_message}>{errors.name.message}</p>}
                            </div>
                            <div className="input-form-block">
                                <p className="nm-txt2">Пароль</p>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{
                                        required: "Это поле обязательное!",
                                        onChange: (e) => dispatch(setUserPassword(e.target.value))
                                    }}
                                    render={({field}) => <Input.Password {...field}
                                                                         iconRender={(visible) => (visible ?
                                                                             <EyeTwoTone/> :
                                                                             <EyeInvisibleOutlined/>)}
                                                                         className={errors.password ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                    />}
                                />
                                {errors.password &&
                                    <p
                                        className={s.error_message}>{errors.password.message || "Это поле обязательное!"}</p>}
                            </div>
                        </div>
                        <button type='submit' className={s.form__submit}>Продолжить</button>
                    </form>
                </div>
            </div>
                : userRole === "student" ? <Navigate to="/studlk"/> : <Navigate to="/teachlk"/>}
        </>
    );
};
export default LoginPage;
