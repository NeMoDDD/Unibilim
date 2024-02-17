import React, { useState } from "react"
import s from './Modal.module.scss'
import {Modal} from "antd"
import userAva from "../../../assets/img/user (2) 2.svg"
import moment from "moment";
import { compareDateWithProps } from "../../../utils/customFunctions";
const ModalTeacherWindow = React.memo(({teach, time, subj, setModalOpen, modalOpen, alldate, info,videoLink}) => {
    const dateObject = moment(alldate)   
    const [isError, setError] = useState(false)
    console.log(alldate);
    const onHandleVideo = () =>{   
        setError(false)
        const isEnter = compareDateWithProps(alldate) 
        if(isEnter){ 
            window.location.href = videoLink
        }else{  
            setError(true)
        }
    }
    return (
        <Modal
            className={s.modal}
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            footer={null}
        >
            <div className={s.modal__wrapper}>
                <div className={s.modal__about}>
                    <div className={s.about__title}>{subj}</div>
                    <div className={s.about__photo}><img src={userAva} alt="Error"/></div>
                    <div className={s.about__text}>
                        <div className={s.about__text_inner}>
                            <div className={s.about__name}>{teach}</div>
                            <div
                                className={s.about__date}>Дата: {dateObject.format('DD MMM').slice(0, -1)}, {dateObject.format('dd').slice(0, 2)}, {time}</div>
                        </div>
                        <div className={s.btn__write_mobile}>
                            <button>Написать</button>
                        </div>
                    </div>
                </div>
                <div className={s.border}></div>
                <div className={s.modal__info}>
                    <div className={s.info__text}>
                        <div className={s.info__name}>{teach}</div>
                        <div className={s.info__title}>{info}</div>
                    </div>
                    <div className={s.info__transition}>
                        <div className={s.transition__title}>Чтобы перейти к уроку, нажмите на кнопку ниже</div>
                        <div className={s.info__buttons}>
                            <div className={s.btn_wrapper_accept}>
                                <button onClick={onHandleVideo}>Присоединиться к комнате с видео созвоном</button>
                            </div>
                            <div className={s.inner__buttons}>
                                <div className={s.btn_wrapper_write}>
                                    <button>Написать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isError && <p style={{color:'red', textAlign:'center'}}>Ссылка будет доступна за 15 минут до начала урока</p>}
                </div>
            </div>
        </Modal>
    )
})
export default ModalTeacherWindow