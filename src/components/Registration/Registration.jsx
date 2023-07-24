import React, {useState} from "react";
import "./Registration.scss";
import Header from "../Header/Header";
import {Controller, useForm} from "react-hook-form";
import {DatePicker, Input, Space} from "antd";
import * as yup from "yup"
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

const schema = yup.object().shape({
    phone: yup.string().required('Phone number is required').matches(/^\d+$/, 'Invalid phone number'),
});

const Registration = () => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [tgName, setTgName] = useState("")
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

    // const CheckCorrectOfPassword = (e) => {
    //     if (e.target.value !== password) {
    //         errors.checkPassword = "Пароль не верный"
    //     } else {
    //         errors.checkPassword = null
    //     }
    // }

    const cities = ["Кара-Балта", "Бишкек", "Каинда", "Ош", "Токмок"];
    const schoolArr = [
        "СШ№1",
        "СШ№2",
        "СШ№3",
        "СШ№4",
        "СШ№5",
        "СШ№6",
        "СШ№8",
        "СШ№9",
        "СШ№10",
        "СШ№11",
        "СШ№12",
    ];
    const renderCities = cities.map((item, index) => (
        <option value={item} key={index}>
            {item}
        </option>
    ));
    const renderSchools = schoolArr.map((item, index) => (
        <option value={item} key={index}>
            {item}
        </option>
    ));

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
                                // onChange: (e) => CheckCorrectOfPassword(e),
                            }}
                            render={({field}) => <Input.Password {...field}
                                                                 iconRender={(visible) => (visible ? <EyeTwoTone/> :
                                                                     <EyeInvisibleOutlined/>)}
                                                                 className={errors.checkPassword ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}
                        />
                        {errors.checkPassword &&
                            <p
                                className="error-message">{errors.checkPassword || "Это поле обязательное!"}</p>}
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
                            <DatePicker/>
                        </Space>
                    </div>
                    <p className="nm-txt2">Город</p>
                    <select className="dropdown-select" name="city" id="cities">
                        {renderCities}
                    </select>
                    <p className="nm-txt3">Школа</p>
                    <select className="dropdown-select" name="school" id="school">
                        {renderSchools}
                    </select>
                    <p className="nm-txt3">Класс</p>
                    <input type="text" className="npt-txt" placeholder="11В"></input>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            Я прочитал (а) правила и условия платформы и соглашаюсь на
                            обработку персональных данных и Политику конфиденциальности
                        </label>
                    </div>
                    <button type="submit" className="reg-end">
                        Продолжить
                    </button>
                </div>
            </form>
        </>
    );
};

export default Registration;
