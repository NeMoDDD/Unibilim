import React from 'react'
import HeaderFS from '../Header/Header'
import s from './Login.module.css'
import { ChakraProvider, FormControl, FormLabel, PinInput, PinInputField } from '@chakra-ui/react';
import { useForm, Controller, } from 'react-hook-form'
import { Link } from 'react-router-dom'
const Verification = () => {
    const onSubmit = (dataForm) => {
        console.log(dataForm);
    }
    const phoneNumber = '+996 (556) 02-45-82'
    const { reset, control,handleSubmit, register } = useForm()
    return (
        <>
            <HeaderFS />
            <div className={s.verification}>
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
                            <Link className={s.verification__support_again}>Отправить код снова</Link>
                            <Link className={s.verification__support_cancel}>Сделать сброс-звонок</Link>
                        </div>
                        <button className={s.verification__submit} type='submit'>Подтвердить</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Verification