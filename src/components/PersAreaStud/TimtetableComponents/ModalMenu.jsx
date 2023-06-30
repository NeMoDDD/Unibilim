import React from "react" 
import s from './Modal.module.css'  
import { Modal } from "antd"
const ModalTeacherWindow = React.memo(({teacher,time, setModalOpen, modalOpen})=>{ 
  return(  
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
              <div className={s.about__title}>{teacher.subj}</div> 
              <div className={s.about__photo}><img src={teacher.photo} alt="Error" /></div> 
              <div className={s.about__text}> 
              <div className={s.about__text_inner}> 
                <div className={s.about__name}>{teacher.name}</div> 
                <div className={s.about__date}>Дата:{time}</div> 
              </div>
                <div className={s.btn__write_mobile}><button>Написать</button></div>
              </div>
            </div> 
            <div className={s.border}></div>
            <div className={s.modal__info}> 
              <div className={s.info__text}>  
                <div className={s.info__name}>{teacher.name}</div>
                <div className={s.info__title}>{teacher.title}</div>
              </div> 
              <div className={s.info__transition}> 
                <div className={s.transition__title}>Чтобы перейти к уроку, нажмите на кнопку ниже</div>
                <div className={s.info__buttons}> 
                  <div className={s.btn_wrapper_accept}><button>Присоединиться к комнате с видео созвоном</button></div>  
                  <div className={s.inner__buttons}> 
                  <div className={s.btn_wrapper_write}><button>Написать</button></div> 
                  <div className={s.btn_wrapper_another}><button>Перенести</button></div> 
                  <div className={s.btn_wrapper_cancel}><button onClick={()=>setModalOpen(false)}>Отменить</button></div>
                  </div>
                </div>
               </div> 
            </div>
        </div> 
        </Modal>
    )
}) 
export default ModalTeacherWindow