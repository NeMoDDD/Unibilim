import {Controller, useForm} from "react-hook-form";
import Header from '../Header/HeaderS'
import React from "react";
import s from './LoginPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Input, message} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {login, setFetching, setLoginError, setUserName, setUserPassword} from "../../redux/loginReducer";
import {Navigate, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import Footer from '../FooterLogin/FooterLogin'
const LoginPage = React.memo((props) => {
    const {control, handleSubmit, setError, clearErrors, formState: {errors}} = useForm({
        mode: "onBlur",
    }) 
    const [messageApi, contextHolder] = message.useMessage()
    const dispatch = useDispatch()
    const {userName, password, token, userRole, isFetching, loginError} = useSelector(state => state.loginReducer)
    const onSubmit =() => {
        try {
            dispatch(login(userName, password))  
        } catch (error) {
            dispatch(setFetching(false))
            setError("login", {
                type: "manual",
                message: "Неверный логин или пароль"
            })
            console.log(errors.login.message)
        }
    };  
    if(loginError){ 
        messageApi.open({
            type: 'error',
            content: 'Неверный логин или пароль',
            duration: 6
        }); 
        dispatch(setLoginError(false))
    }
    return (
        <> 
        {contextHolder}
            <Header/>
            {userRole === null ?
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6}}
                    className={s.login__page}
                >
                    <div className={s.login}>
                        <form className={s.login__form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={s.form__in}>
                                <p className={s.form__in__text}>Вход</p>
                            </div>
                            <div className={s.form__data}>
                                <div className={s.input_form_block}>
                                    <p className="nm-txt">Логин</p>
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
                                    {errors.login && <p
                                        className={s.error_message}>{errors.login.message}</p>}
                                </div>
                                <div className="no_account_block">
                                    <p>Нет аккаунта?</p><NavLink to="/reg">Зарегистрироваться</NavLink>
                                </div>
                            </div>
                            <button type='submit' className={s.form__submit} disabled={isFetching}>Продолжить</button>
                        </form>
                    </div>
                </motion.div>
                : userRole === "student" ? <Navigate to="/timetable"/> : <Navigate to="/teachlk"/>} 
                <Footer/>
        </>
    );
});
export default LoginPage;
