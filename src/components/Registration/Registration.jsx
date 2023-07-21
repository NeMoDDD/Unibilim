import React, {useState} from "react";
import "./Registration.scss";
import Header from "../Header/Header";
import {Controller, useForm} from "react-hook-form";
import {Input} from "antd";
import style from "./Form/Form.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
const schema = yup.object().shape({
    phone: yup.string().required('Phone number is required').matches(/^\d+$/, 'Invalid phone number'),
});

const Registration = () => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
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
                    <p className="nm-txt">Имя</p>
                    {btnValue === "Зарегистрироваться" ? <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: "Это поле обязательное!",
                            onChange: (e) => setName(e.target.value)
                        }}
                        render={({field}) => <Input {...field}
                                                    className={errors.name ? "npt-txt npt-txt-errors" : 'npt-txt'}
                        />}/> : null}
                    {errors.name && <span className={style.error__message}>{errors.name.message}</span>}
                    <p className="nm-txt2">Телефон</p>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input
                                {...field}
                                type="phone"
                                className={errors.phone ? 'npt-txt npt-txt-errors' : 'npt-txt'}
                            />
                        )}
                    />
                    {errors.phone && <p className="error-message">{errors.phone.message}</p>}
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
