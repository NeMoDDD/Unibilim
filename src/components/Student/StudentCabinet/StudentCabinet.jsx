import React, {useEffect, useState} from "react";

import s from "./StudentCabinet.module.css"
import userava from "../../../assets/img/user (2) 2.png";
import edit from "../../../assets/img/edit1.png";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import Header from "../../Header/HeaderS";
import ruRU from "antd/lib/locale/ru_RU";
import {ConfigProvider, DatePicker, Space} from "antd";
import SideBar from "../../SideBar/SideBar";
import {Navigate} from "react-router-dom";

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
    const {userRole} = useSelector(state => state.loginReducer)
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
            <Header/>
            <SideBar/>
            {userRole === "student" ?
                <div className={s.first_block}>
                    <div className={s.inner_block}>
                        <div className={`${s.avaname} ${s.radblock}`}>
                            <img src={userava} alt=""/>
                            <div className={s.name}>
                                <p className={s.name_block}>Александр Иванов</p>
                                <a
                                    className={s.edit_block}
                                    onClick={() => setInputDisabled(false)}
                                >
                                    {" "}
                                    <img src={edit}/>
                                    Изменить данные
                                </a>
                            </div>
                        </div>
                        <div className={`${s.persdata} ${s.radblock}`}>
                            <p className={s.nm_txt}>Имя</p>
                            <input {...register("firstName", {
                                required: "Это поле обязательное!",
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                                    message: 'Имя не должно содержать цифры и символы',
                                }
                            })} className={errors.firstName ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                   onChange={(e) => props.setName(e.currentTarget.value)}
                                   value={props.name}
                                   disabled={isInputDisabled}
                            />
                            {errors.firstName && <div className={s.npt_txt_span}>{errors.firstName.message}</div>}
                            <p className={s.nm_txt2}>Фамилия</p>

                            <input {...register("lastName", {
                                required: "Это поле обязательное!",
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                                    message: 'Фамилие не должно содержать цифры и символы',
                                }
                            })} className={errors.lastName ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                   onChange={(e) => props.setSurname(e.currentTarget.value)}
                                   value={props.surname}
                                   disabled={isInputDisabled}/>
                            {errors.lastName && <div className={s.npt_txt_span}>{errors.lastName.message}</div>}
                            <p className={s.nm_txt2}>День рождения</p>
                            <Space direction="vertical">
                                <ConfigProvider locale={ruRU}>
                                    <Controller
                                        name="dateOfBirth"
                                        control={control}
                                        rules={{
                                            required: 'Это поле обязательное!',

                                        }}
                                        render={({field}) => (
                                            <DatePicker showToday={false}
                                                        value={props.dayOfBirthday}
                                                        disabled={isInputDisabled}
                                                        format="DD-MM-YYYY"
                                                        onChange={(e) => props.setBirthday(e.currentTarget.value.format("DD-MM-YYYY"))}
                                                        className={errors.dateOfBirth ? `${s.data_picker} ${s.data_picker_error}` : s.data_picker}
                                            />
                                        )}
                                    />
                                    {errors.dateOfBirth &&
                                        <p className={s.npt_txt_span}>{errors.dateOfBirth.message}</p>}
                                </ConfigProvider>
                            </Space>
                        </div>
                        <div className={`${s.secondata} ${s.radblock}`}>
                            <p className={s.nm_txt2}>Почта</p>
                            <input {...register("email", {
                                validate: handleEmailValidation
                            })} className={errors.email ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                   onChange={(e) => props.setEmail(e.currentTarget.value)}
                                   value={props.email}
                                   disabled={isInputDisabled}/>
                            {errors.email &&
                                <div className={s.npt_txt_span}>{errors.email.message || "Некорректный email"}</div>}
                            <p className={s.nm_txt2}>Телефон</p>
                            <input {...register("phone", {
                                required: "Это поле обязательное!",
                                pattern: {
                                    value: /^[+]?[0-9]{3} [0-9]{3} [0-9]{3} [0-9]{3}$/,
                                    message: 'Введите номер телефона в формате "+996 999 999 999"',
                                }
                            })} className={errors.phone ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                   onChange={(e) => props.setPhone(e.currentTarget.value)}
                                   value={props.phone}
                                   disabled={isInputDisabled}/>
                            {errors.phone && <div className={s.npt_txt_span}>{errors.phone.message}</div>}
                            <p className={s.nm_txt2}>Место проживания</p>
                            <input {...register("location", {required: "Это поле обязательное!"})}
                                   className={errors.location ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                   onChange={(e) => props.setLocation(e.currentTarget.value)}
                                   value={props.location}
                                   disabled={isInputDisabled}/>
                            {errors.location && <div className={s.npt_txt_span}>{errors.location.message}</div>}
                        </div>
                    </div>
                    <div className={s.address}>
                        <div className={s.inaddress}>
                            <p className={s.nm_txt3}>Город</p>
                            <input {...register("city", {required: "Это поле обязательное!"})}
                                   className={errors.city ? `${s.reg_npt} ${s.reg_npt_error}` : s.reg_npt}
                                   onChange={(e) => props.setCity(e.currentTarget.value)}
                                   value={props.city}
                                   disabled={isInputDisabled}/>
                            {errors.city && <div className={s.npt_txt_span}>{errors.city.message}</div>}
                            <p className={s.nm_txt3}>Область</p>
                            <input {...register("region", {required: "Это поле обязательное!"})}
                                   className={errors.region ? `${s.reg_npt} ${s.reg_npt_error}` : s.reg_npt}
                                   onChange={(e) => props.setRegion(e.currentTarget.value)}
                                   value={props.region}
                                   disabled={isInputDisabled}/>
                            {errors.region && <div className={s.npt_txt_span}>{errors.region.message}</div>}
                            <p className={s.nm_txt3}>Район</p>
                            <input {...register("district", {required: "Это поле обязательное!"})}
                                   className={errors.district ? `${s.reg_npt} ${s.reg_npt_error}` : s.reg_npt}
                                   onChange={(e) => props.setDistrict(e.currentTarget.value)}
                                   value={props.district}
                                   disabled={isInputDisabled}/>
                            {errors.district && <div className={s.npt_txt_span}>{errors.district.message}</div>}
                        </div>
                    </div>
                </div>
                : userRole === "professor" ? <Navigate to="/teachlk"/> : <Navigate to="/login"/>}
        </>
    );
};

export default TeacherCabinet;
