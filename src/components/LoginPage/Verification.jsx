import React, {useEffect, useState} from 'react'
import HeaderFS from '../Header/HeaderS'
import s from './Login.module.css'
import { ChakraProvider, FormControl, FormLabel, PinInput, PinInputField } from '@chakra-ui/react';
import { useForm, Controller, } from 'react-hook-form'
import {Link, Navigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {userVerification} from "../../redux/verification-reducer";
import {motion} from "framer-motion";

const Verification = () => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.verificationReducer)
    const {otpTokenNikita, phone} = useSelector(state => state.registerReducer)

    const [isDisabled, setDisabled] = useState(true)
    const [timer, setTimer] = useState(60); // Изначальное значение таймера (в секундах)
    const onSubmit = (code) => {
        dispatch(userVerification(otpTokenNikita, code.pin))
    }
    const phoneNumber = `+${phone}`
    const { reset, control,handleSubmit, register } = useForm()

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown);
        }
        if (timer === 0) {
            setDisabled(false);
        }
    }, [timer]);

    const handleResendCode = () => {
        setDisabled(true);
        setTimer(60);
    };

    return (
        <>
            <HeaderFS />
            {!isAuth ?
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className={s.verification}
                >
                <div className={s.verification__container}>
                    <form className={s.verification__form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.verification__title}>Подтверждение-SMS</div>
                        <div className={s.verification__subtitle}>На номер {phoneNumber} было отправлено SMS-сообщение.</div>
                        <div className={s.verification__pin}>

                            <Controller
                                name="pin"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <FormControl>
                                        <PinInput
                                            as={PinInput}
                                            id="pin"
                                            type="text"
                                            {...field} 
                                            placeholder='-'
                                        >
                                            <PinInputField />
                                            <PinInputField />
                                            <PinInputField />
                                            <PinInputField />
                                        </PinInput>
                                    </FormControl>
                                )}
                            />

                        </div>
                        <div className={s.verification__support}>
                            <p>{timer}</p>
                            <button onClick={handleResendCode} disabled={isDisabled} className={s.verification__support_again}>Отправить код снова</button>
                            {/*<Link className={s.verification__support_cancel}>Сделать сброс-звонок</Link>*/}
                        </div>
                        <button className={s.verification__submit} type='submit'>Подтвердить</button>
                    </form>
                </div>
                </motion.div>
                : <Navigate to="/login"/>
            }
        </>
    )
}

export default Verification