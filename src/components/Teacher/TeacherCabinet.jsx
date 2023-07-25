import React, {useState} from "react";

import "../Student/StudentCabinet.scss"
import SideBarTeach from "../SideBar/SideBarTeach";
import userava from "../../assets/img/user (2) 2.png";
import edit from "../../assets/img/edit1.png";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import LocaleProvider from "antd/es/locale";
import ruRU from "antd/lib/locale/ru_RU";
import {ConfigProvider, DatePicker, Space} from "antd";
import HeaderT from "../Header/HeaderT";

const isValidEmail = email =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
const TeacherCabinet = (props) => {
    const [isInputDisabled, setInputDisabled] = useState(true)
    const dispatch = useDispatch()
    const {control, register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const handleEmailValidation = email => {
        const isValid = isValidEmail(email);

        const validityChanged =
            (errors.email && isValid) || (!errors.email && !isValid);
        if (validityChanged) {
        }
        return isValid
    };
    const onSubmit = (data) => {
        reset()
    };

    return (
        <>
            <HeaderT/>
            <SideBarTeach/>

            <div className="first_block">
                <div className="inner_block">
                    <div className="avaname radblock">
                        <img src={userava} alt=""/>
                        <div className="name">
                            <p className="name_block">Александр Иванов</p>
                            <a
                                className="edit_block"
                                onClick={() => setInputDisabled(false)}
                            >
                                {" "}
                                <img src={edit}/>
                                Изменить данные
                            </a>
                        </div>
                    </div>
                    <div className="persdata radblock">
                        <p className="nm-txt">Имя</p>
                        <input {...register("firstName", {
                            required: "Это поле обязательное!",
                            pattern: {
                                value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                                message: 'Имя не должно содержать цифры и символы',
                            }
                        })} className={errors.firstName ? "npt-txt npt-txt-error" : "npt-txt"}
                               onChange={(e) => props.setName(e.currentTarget.value)}
                               value={props.name}
                               disabled={isInputDisabled}
                        />
                        {errors.firstName && <div className="npt-txt-span">{errors.firstName.message}</div>}
                        <p className="nm-txt2">Фамилия</p>

                        <input {...register("lastName", {
                            required: "Это поле обязательное!",
                            pattern: {
                                value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                                message: 'Фамилие не должно содержать цифры и символы',
                            }
                        })} className={errors.lastName ? "npt-txt npt-txt-error" : "npt-txt"}
                               onChange={(e) => props.setSurname(e.currentTarget.value)}
                               value={props.surname}
                               disabled={isInputDisabled}/>
                        {errors.lastName && <div className="npt-txt-span">{errors.lastName.message}</div>}
                        <p className="nm-txt2">День рождения</p>
                        <Space direction="vertical">
                            <ConfigProvider locale={ruRU}>
                                <Controller
                                    name="dateOfBirth"
                                    control={control}
                                    rules={{
                                        required: 'Это поле обязательное!',
                                        // onChange={(e) => props.setBirthday(e.currentTarget.value)},

                                    }}
                                    render={({field}) => (
                                        <DatePicker showToday={false}
                                                    value={props.dayOfBirthday}
                                                    disabled={isInputDisabled}
                                                    className={errors.dateOfBirth ? "data-picker data-picker-error" : "data-picker"}
                                        />
                                    )}
                                />
                                {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth.message}</p>}
                            </ConfigProvider>
                        </Space>
                    </div>
                    <div className="secondata radblock">
                        <p className="nm-txt2">Почта</p>
                        <input {...register("email", {
                            validate: handleEmailValidation
                        })} className={errors.email ? "npt-txt npt-txt-error" : "npt-txt"}
                               onChange={(e) => props.setEmail(e.currentTarget.value)}
                               value={props.email}
                               disabled={isInputDisabled}/>
                        {errors.email &&
                            <div className="npt-txt-span">{errors.email.message || "Некорректный email"}</div>}
                        <p className="nm-txt2">Телефон</p>
                        <input {...register("phone", {
                            required: "Это поле обязательное!",
                            pattern: {
                                value: /^[+]?[0-9]{3} [0-9]{3} [0-9]{3} [0-9]{3}$/,
                                message: 'Введите номер телефона в формате "+996 999 999 999"',
                            }
                        })} className={errors.phone ? "npt-txt npt-txt-error" : "npt-txt"}
                               onChange={(e) => props.setPhone(e.currentTarget.value)}
                               value={props.phone}
                               disabled={isInputDisabled}/>
                        {errors.phone && <div className="npt-txt-span">{errors.phone.message}</div>}
                        <p className="nm-txt2">Место проживания</p>
                        <input {...register("location", {required: "Это поле обязательное!"})}
                               className={errors.location ? "npt-txt npt-txt-error" : "npt-txt"}
                               onChange={(e) => props.setLocation(e.currentTarget.value)}
                               value={props.location}
                               disabled={isInputDisabled}/>
                        {errors.location && <div className="npt-txt-span">{errors.location.message}</div>}
                    </div>
                </div>
                <div className="address">
                    <div className="inaddress">
                        <p className="nm-txt3">Город</p>
                        <input {...register("city", {required: "Это поле обязательное!"})}
                               className={errors.city ? "reg_npt reg_npt_error" : "reg_npt"}
                               onChange={(e) => props.setCity(e.currentTarget.value)}
                               value={props.city}
                               disabled={isInputDisabled}/>
                        {errors.city && <div className="npt-txt-span">{errors.city.message}</div>}
                        <p className="nm-txt3">Область</p>
                        <input {...register("region", {required: "Это поле обязательное!"})}
                               className={errors.region ? "reg_npt reg_npt_error" : "reg_npt"}
                               onChange={(e) => props.setRegion(e.currentTarget.value)}
                               value={props.region}
                               disabled={isInputDisabled}/>
                        {errors.region && <div className="npt-txt-span">{errors.region.message}</div>}
                        <p className="nm-txt3">Район</p>
                        <input {...register("district", {required: "Это поле обязательное!"})}
                               className={errors.district ? "reg_npt reg_npt_error" : "reg_npt"}
                               onChange={(e) => props.setDistrict(e.currentTarget.value)}
                               value={props.district}
                               disabled={isInputDisabled}/>
                        {errors.district && <div className="npt-txt-span">{errors.district.message}</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherCabinet;