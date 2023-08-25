import React, {useState} from "react";

import s from "./PATeach.module.css"
import SideBarTeach from "../../SideBar/SideBarTeach";
import userava from "../../../assets/img/user (2) 2.png";
import edit from "../../../assets/img/edit1.png";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import ruRU from "antd/lib/locale/ru_RU";
import {ConfigProvider, DatePicker, Space, Spin} from "antd";
import HeaderT from "../../Header/HeaderT";
import {Navigate} from "react-router-dom";
import {setPhone} from "../../../redux/RegisterReducer";
import PhoneInput from "react-phone-input-2";
import { motion } from "framer-motion";

const TeacherCabinet = (props) => {
    const [isInputDisabled, setInputDisabled] = useState(true)
    const dispatch = useDispatch()
    const {control, register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const {
        userRole, firstName, surname, patronym, subject, info, photo,
        tg_username, phone, rate, price, language, experience, classes, isFetching
    } = useSelector(state => state.loginReducer)

    const onSubmit = (data) => {
        reset()
    };

    return (
        <>
            <HeaderT/>
            <SideBarTeach/>
            {userRole === "professor" ?
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className={s.first_block}
                >
                    <Spin spinning={isFetching} size="large">
                    <div className={s.inner_block}>
                        <div className={`${s.avaname} ${s.radblock}`}>
                            {photo !== null ? <img className={s.user_img} src={photo} alt=""/> : <img src={userava} alt=""/>}
                            <div className={s.name}>
                                <p className={s.name_block}>{`${firstName} ${surname}`}</p>
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
                                   value={firstName}
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
                                   value={surname}
                                   disabled={isInputDisabled}/>
                            {errors.lastName && <div className={s.npt_txt_span}>{errors.lastName.message}</div>}

                            <p className={s.nm_txt2}>Отчество</p>

                            <input {...register("patronym", {
                                required: "Это поле обязательное!",
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                                    message: 'Отчество не должно содержать цифры и символы',
                                }
                            })} className={errors.patronym ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                // onChange={(e) => props.setSurname(e.currentTarget.value)}
                                   value={patronym}
                                   disabled={isInputDisabled}/>
                            {errors.patronym && <div className={s.npt_txt_span}>{errors.patronym.message}</div>}

                            <p className={s.nm_txt2}>Описание</p>
                            <textarea {...register("info", {
                                required: "Это поле обязательное!"
                            })} className={errors.info ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                // onChange={(e) => props.setSurname(e.currentTarget.value)}
                                      value={info}
                                      disabled={isInputDisabled}/>
                            {errors.info && <div className={s.npt_txt_span}>{errors.info.message}</div>}

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
                            <p className={s.nm_txt2}>Телеграм</p>
                            <input {...register("tgName", {
                                required: "Это поле обязательное!"
                            })} className={errors.tgName ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                // onChange={(e) => props.setEmail(e.currentTarget.value)}
                                   value={tg_username}
                                   disabled={isInputDisabled}/>
                            {errors.tgName &&
                                <div className={s.npt_txt_span}>{errors.tgName.message}</div>}

                            <p className={s.nm_txt2}>Телефон</p>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: "Это поле обязательное!",
                                    onChange: (e) => dispatch(setPhone(e.target.value))
                                }}
                                render={({field}) => <PhoneInput  {...field}
                                                                  country={'kg'}
                                                                  placeholder="+996"
                                                                  value={phone}
                                                                  preferredCountries={['kg', 'ru', 'kz']}
                                                                  onChange={(e) => props.setPhone(e.currentTarget.value)}
                                                                  disabled={isInputDisabled}
                                                                  inputClass={errors.phone ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                                                  buttonClass={s.btn_phone}
                                ></PhoneInput>}
                            />
                            {errors.phone && <p className={s.npt_txt_span}>{errors.phone.message}</p>}

                            <p className={s.nm_txt2}>Опыт работы</p>
                            <input {...register("experience", {required: "Это поле обязательное!"})}
                                   className={errors.experience ? `${s.npt_txt} ${s.npt_txt_errors}` : s.npt_txt}
                                // onChange={(e) => props.setLocation(e.currentTarget.value)}
                                   value={experience}
                                   disabled={isInputDisabled}/>
                            {errors.experience && <div className={s.npt_txt_span}>{errors.experience.message}</div>}
                        </div>
                    </div>
                    <div className={s.address}>
                        <div className={s.inaddress}>
                            <p className={s.nm_txt3}>Классы</p>
                            <input {...register("classes", {required: "Это поле обязательное!"})}
                                   className={errors.classes ? `${s.reg_npt} ${s.reg_npt_error}` : s.reg_npt}
                                // onChange={(e) => props.setCity(e.currentTarget.value)}
                                   value={classes}
                                   disabled={isInputDisabled}/>
                            {errors.classes && <div className={s.npt_txt_span}>{errors.classes.message}</div>}

                            <p className={s.nm_txt3}>Язык обучения</p>
                            <input {...register("language", {required: "Это поле обязательное!"})}
                                   className={errors.language ? `${s.reg_npt} ${s.reg_npt_error}` : s.reg_npt}
                                // onChange={(e) => props.setRegion(e.currentTarget.value)}
                                   value={language}
                                   disabled={isInputDisabled}/>
                            {errors.language && <div className={s.npt_txt_span}>{errors.language.message}</div>}

                            <p className={s.nm_txt3}>Цена</p>
                            <input {...register("price", {required: "Это поле обязательное!"})}
                                   className={errors.price ? `${s.reg_npt} ${s.reg_npt_error}` : s.reg_npt}
                                // onChange={(e) => props.setDistrict(e.currentTarget.value)}
                                   value={price}
                                   disabled={isInputDisabled}/>
                            {errors.price && <div className={s.npt_txt_span}>{errors.price.message}</div>}

                            <p className={s.nm_txt3}>Рейтинг</p>
                            <input {...register("rate", {required: "Это поле обязательное!"})}
                                   className={errors.rate ? `${s.reg_npt} ${s.reg_npt_error}` : s.reg_npt}
                                // onChange={(e) => props.setDistrict(e.currentTarget.value)}
                                   value={rate}
                                   disabled={isInputDisabled}/>
                            {errors.rate && <div className={s.npt_txt_span}>{errors.rate.message}</div>}

                            <p className={s.nm_txt3}>Предметы</p>
                            <input {...register("subject", {required: "Это поле обязательное!"})}
                                   className={errors.subject ? `${s.reg_npt} ${s.reg_npt_error}` : s.reg_npt}
                                // onChange={(e) => props.setDistrict(e.currentTarget.value)}
                                   value={subject}
                                   disabled={isInputDisabled}/>
                            {errors.subject && <div className={s.npt_txt_span}>{errors.subject.message}</div>}
                        </div>
                    </div>
                    </Spin>
                </motion.div>
                : userRole === "student" ? <Navigate to="/timetable"/> : <Navigate to="/login"/>}
        </>
    );
};
export default TeacherCabinet;
