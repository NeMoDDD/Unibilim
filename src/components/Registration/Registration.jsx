import React, {useState} from "react";
import "./Registration.scss";
import Header from "../Header/Header";
import {Controller, useForm} from "react-hook-form";
import {DatePicker, Input, Space} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import LocaleProvider from "antd/es/locale";
import ruRU from 'antd/lib/locale/ru_RU';
import {registerNewStudent} from "../../redux/RegisterReducer";
import {useDispatch} from "react-redux";

const Registration = (props) => {
    const {control, handleSubmit, setError, clearErrors, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [tgName, setTgName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [region, setRegion] = useState("")
    const [city, setCity] = useState("")
    const [districtCity, setDistrictCity] = useState("")

    const dispatch = useDispatch()


    const onSubmit = () => {
        dispatch(registerNewStudent(name, password, checkPassword, phone, tgName, dateOfBirth, region, city, districtCity))
    };
    const CheckCorrectOfPassword = (e) => {
        setCheckPassword(e.target.value)
        if (e.target.value !== password) {
            setError('checkPassword', {
                type: 'manual',
                message: 'Пароли не совпадают',
            });
        } else {
           clearErrors('checkPassword')
        }
    }

    return (
        <>
            <Header/>
            <form onSubmit={handleSubmit(onSubmit)} className="up_block">
                <div className="reg-block">
                    <div className="reg-text-block">
                        <p className="reg-text">Регистрация</p>
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt">Имя</p>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setName(e.target.value)
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
                                required: "Это поле обязательное!", minLength: {
                                    value: 6,
                                    message: "Минимум 6 символов!"
                                }, onChange: (e) => setPassword(e.target.value)
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
                    <div className="input-form-block">
                        <p className="nm-txt2">Повторите пароль</p>
                        <Controller
                            name="checkPassword"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => CheckCorrectOfPassword(e),
                                onBlur: (e) => CheckCorrectOfPassword(e),
                            }}
                            render={({field}) => <Input.Password {...field}
                                                                 iconRender={(visible) => (visible ? <EyeTwoTone/> :
                                                                     <EyeInvisibleOutlined/>)}
                                                                 className={errors.checkPassword ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}
                        />
                        {errors.checkPassword &&
                            <p
                                className="error-message">{errors.checkPassword.message || "Это поле обязательное!"}</p>}
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt2">Телефон</p>
                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setPhone(e.target.value)
                            }}
                            defaultValue=""
                            render={({field}) => (
                                <Input
                                    {...field}
                                    type="phone"
                                    placeholder="+996"
                                    className={errors.phone ? 'npt-txt npt-txt-errors' : 'npt-txt'}
                                />
                            )}
                        />
                        {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt2">Ник в телеграмме</p>
                        <Controller
                            name="tg_name"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setTgName(e.target.value)
                            }}
                            render={({field}) => <Input {...field}
                                                        className={errors.tg_name ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}/>
                        {errors.tg_name && <p className="error-message">{errors.tg_name.message}</p>}
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt2">Дата рождения</p>
                        <Space direction="vertical">
                            <LocaleProvider locale={ruRU}>
                                <Controller
                                    name="dateOfBirth"
                                    control={control}
                                    rules={{
                                        // required: 'Это поле обязательное!'
                                        onChange: (e) => setDateOfBirth(e.target.value)
                                }}
                                    render={({field}) => (
                                        <DatePicker showToday={false} className={errors.dateOfBirth ? "data-picker data-picker-error" : "data-picker"}/>
                                    )}
                                />
                                {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth.message}</p>}
                            </LocaleProvider>
                        </Space>
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt2">Область</p>
                        <Controller
                            name="region"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setRegion(e.target.value)
                            }}
                            render={({field}) => <Input {...field}
                                                        className={errors.region ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}/>
                        {errors.region && <p className="error-message">{errors.region.message}</p>}
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt2">Район</p>
                        <Controller
                            name="city"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setCity(e.target.value)
                            }}
                            render={({field}) => <Input {...field}
                                                        className={errors.city ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}/>
                        {errors.city && <p className="error-message">{errors.city.message}</p>}
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt2">Город или село</p>
                        <Controller
                            name="districtCity"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setDistrictCity(e.target.value)
                            }}
                            render={({field}) => <Input {...field}
                                                        className={errors.districtCity ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}/>
                        {errors.districtCity && <p className="error-message">{errors.districtCity.message}</p>}
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            required
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            Я прочитал (а) <a href="#">правила и условия</a> платформы и соглашаюсь на
                            обработку персональных данных и <a href="#"> Политику конфиденциальности</a>
                        </label>
                    </div>
                    <button type="submit" className="reg-end">
                        Продолжить
                    </button>
                </div>
            </form>
        </>
    )
};

export default Registration;
