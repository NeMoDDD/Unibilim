import {Controller, useForm} from "react-hook-form";
import {useState} from "react";
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import style from "./Form.module.scss"

const Form = ({handleClick, isAuthSubmit, errorMessage, isFetching}) => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [school, setSchool] = useState("")
    const [city, setCity] = useState("")
    const [grade, setGrade] = useState("")
    const [isReadRule, setReadRule] = useState("")
    const onSubmit = () => {
        // if (btnValue === "Зарегистрироваться") {
        //     handleClick(password, nickname)
        // } else {
        //     handleClick(email, password)
        // }
    };
    const btnValue = "Зарегистрироваться"
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={"register-form"}>
                {btnValue === "Зарегистрироваться" ? <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: "Это поле обязательное!",
                        onChange: (e) => setName(e.target.value)
                    }}
                    render={({field}) => <Input {...field}
                                                className={errors.name ? style.registerForm__input__error : style.registerForm__input}
                    />}/> : null}
                {errors.name && <span className={style.error__message}>{errors.name.message}</span>}

                {/*<Controller*/}
                {/*    name="phone"*/}
                {/*    control={control}*/}
                {/*    rules={{*/}
                {/*        required: "Это поле обязательное!", validate: handleEmailValidation,*/}
                {/*        onChange: (e) => setEmail(e.target.value)*/}
                {/*    }}*/}
                {/*    render={({field}) => <Input {...field}*/}
                {/*                                placeholder="Email"*/}
                {/*                                className={errors.email ? style.registerForm__input__error : style.registerForm__input}*/}
                {/*    />}/>*/}
                {/*{errors.email &&*/}
                {/*    <span className={style.error__message}>{errors.email.message || "Неверный email"}</span>}*/}
                {/*{ btnValue === "Зарегистрироваться" ? <Controller*/}
                {/*    name="password"*/}
                {/*    control={control}*/}
                {/*    rules={{*/}
                {/*        required: "Это поле обязательное!", minLength: {*/}
                {/*            value: 6,*/}
                {/*            message: "Минимум 6 символов!"*/}
                {/*        }, onChange: (e) => setPassword(e.target.value)*/}
                {/*    }}*/}
                {/*    render={({field}) => <Input.Password {...field}*/}
                {/*                                         iconRender={(visible) => (visible ? <EyeTwoTone/> :*/}
                {/*                                             <EyeInvisibleOutlined/>)}*/}
                {/*                                         placeholder="Пароль"*/}
                {/*                                         className={errors.password ? style.registerForm__input__error : style.registerForm__input}*/}
                {/*    />}*/}
                {/*/> : <Controller*/}
                {/*    name="password"*/}
                {/*    control={control}*/}
                {/*    rules={{*/}
                {/*        required: "Это поле обязательное!", onChange: (e) => setPassword(e.target.value)*/}
                {/*    }}*/}
                {/*    render={({field}) => <Input.Password {...field}*/}
                {/*                                         iconRender={(visible) => (visible ? <EyeTwoTone/> :*/}
                {/*                                             <EyeInvisibleOutlined/>)}*/}
                {/*                                         placeholder="Пароль"*/}
                {/*                                         className={errors.password ? style.registerForm__input__error : style.registerForm__input}*/}
                {/*    />}*/}
                {/*/>}*/}

                {/*{errors.password &&*/}
                {/*    <span className={style.error__message}>{errors.password.message || "Это поле обязательное!"}</span>}*/}
                {/*{!isAuthSubmit && <span className={style.error__message}>{errorMessage}</span>}*/}
                {/*<Controller*/}
                {/*    name="btn-submit"*/}
                {/*    control={control}*/}
                {/*    render={({field}) => <Button {...field}*/}
                {/*                                 className={style.registerForm__btn}*/}
                {/*                                 type="primary"*/}
                {/*                                 htmlType="submit"*/}
                {/*                                 disabled={isFetching}*/}
                {/*    >{btnValue}</Button>}*/}
                {/*/>*/}
            </form>
        </>
    );
}
export default Form;