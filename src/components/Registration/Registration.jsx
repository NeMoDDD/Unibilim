 import React, {useEffect, useState} from "react";
import "./Registration.scss";
import Header from "../Header/HeaderS";
import {Controller, useForm} from "react-hook-form";
import {ConfigProvider, DatePicker, Input, Select, Space} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, UploadOutlined} from "@ant-design/icons";
import ruRU from 'antd/lib/locale/ru_RU';
import {registerNewStudent} from "../../redux/RegisterReducer";
import {useDispatch, useSelector} from "react-redux";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import {Upload, Button} from 'antd';
import LocationReducer, {getRegion} from "../../redux/location-reducer";

const Registration = () => {
    const {control, handleSubmit, setError, clearErrors, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const [nick, setNick] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [patronym, setPatronym] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [tgName, setTgName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [region, setRegion] = useState("")
    const [city, setCity] = useState("")
    const [districtCity, setDistrictCity] = useState("")
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const dispatch = useDispatch()
    const {regions} = useSelector(state => state.locationReducer)

    const onSubmit = () => {
        dispatch(registerNewStudent(nick, name, surname, patronym, password, checkPassword, phone, tgName, dateOfBirth, region, city, districtCity, selectedPhoto))
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
    useEffect(() => {
        dispatch(getRegion())
    },[])

    // let regionsElements = regions.map((r, index) => )

    return (
        <>
            <Header/>
            <form onSubmit={handleSubmit(onSubmit)} className="up_block">
                <div className="reg-block">
                    <div className="reg-text-block">
                        <p className="reg-text">Регистрация</p>
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt">Ник</p>
                        <Controller
                            name="nick"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setNick(e.target.value)
                            }}
                            render={({field}) => <Input {...field}
                                                        className={errors.nick ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}/>
                        {errors.nick && <p className="error-message">{errors.nick.message}</p>}
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
                        <p className="nm-txt">Фамилие</p>
                        <Controller
                            name="surname"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setSurname(e.target.value)
                            }}
                            render={({field}) => <Input {...field}
                                                        className={errors.surname ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}/>
                        {errors.surname && <p className="error-message">{errors.surname.message}</p>}
                    </div>
                    <div className="input-form-block">
                        <p className="nm-txt">Отчество</p>
                        <Controller
                            name="patronym"
                            control={control}
                            rules={{
                                required: "Это поле обязательное!",
                                onChange: (e) => setPatronym(e.target.value)
                            }}
                            render={({field}) => <Input {...field}
                                                        className={errors.patronym ? "npt-txt npt-txt-errors" : 'npt-txt'}
                            />}/>
                        {errors.patronym && <p className="error-message">{errors.patronym.message}</p>}
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
                                // onBlur: (e) => CheckCorrectOfPassword(e),
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
                            render={({field}) => <PhoneInput  {...field}
                                                              country={'kg'}
                                                              placeholder="+996"
                                                              preferredCountries={['kg', 'ru', 'kz']}
                                                              inputClass={errors.phone ? 'npt-txt npt-txt-errors' : 'npt-txt'}
                            ></PhoneInput>}
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
                            <ConfigProvider locale={ruRU}>
                                <Controller
                                    name="dateOfBirth"
                                    control={control}
                                    rules={{
                                        required: 'Это поле обязательное!',
                                    }}
                                    render={({field}) => (
                                        <DatePicker showToday={false}
                                                    onChange={(e) => setDateOfBirth(e.format("DD-MM-YYYY"))}
                                                    format="DD-MM-YYYY"
                                                    className={errors.dateOfBirth ? "data-picker data-picker-error" : "data-picker"}/>
                                    )}
                                />
                                {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth.message}</p>}
                            </ConfigProvider>
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
                            render={({field}) => <Select {...field}
                                                        className={errors.region ? "npt-txt npt-txt-errors" : 'npt-txt'}
                                                        options={[
                                                            { value: 'jack', label: 'Jack' },
                                                            { value: 'lucy', label: 'Lucy' },
                                                            { value: 'Yiminghe', label: 'yiminghe' },
                                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                                        ]}
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
                    <div className="input-form-block">
                        <p className="nm-txt2">Выберите ваше фото</p>
                        <Controller
                            name="file"
                            control={control}
                            rules={{
                                // required: 'Это поле обязательное!',
                                validate: (value) => {
                                    if (!value) return 'Это поле обязательное!';
                                    // if (!['image/jpeg', 'image/png'].includes(value[0].type)) return 'Не допустимый формат файла';
                                    // if (value[0].size > 5242880) return 'Файл должен быть меньше 5мб';
                                    return true;
                                },
                            }}
                            render={({field}) => (
                                <Upload {...field} accept=".jpg, .png"
                                        showUploadList={false} beforeUpload={(file) => {
                                    setSelectedPhoto(file);
                                }}
                                >
                                    <Button className="upload-photo"
                                            icon={<UploadOutlined/>}>Загрузи фото</Button>
                                </Upload>
                            )}
                        />
                        {errors.file && <p className="error-message">{errors.file.message}</p>}
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            required
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
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
