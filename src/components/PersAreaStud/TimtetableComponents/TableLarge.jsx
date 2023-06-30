import React,{ useState } from "react";
import ModalTeacherWindow from "./ModalMenu";
const Table = React.memo(({ subj, teach, time, backgroundColor, btn, teacher, setCurrentTeacherTC }) => { 
    const [modalOpen, setModalOpen] = useState(false);
    const handleTeacherClick = ()=>{ 
      setCurrentTeacherTC(teach) 
      setModalOpen(true)
    }   
    return (
      <>
        <div
          className="subj_block"
          style={{ backgroundColor: backgroundColor, }}
        >
          <p className="subj_name">{subj}</p>
          <p className="subj_teach">{teach}</p>
          <p className="subj_time">{time}</p>
          <button
            className="subj_about"
            style={{
              backgroundColor: btn,
            }} 
            onClick={handleTeacherClick}
          > 
            Подробнее
          </button> 
          
        </div> 
        <ModalTeacherWindow teacher={teacher} modalOpen={modalOpen} setModalOpen={setModalOpen} time={time}/>
      </>
    )
  }) 
  export default Table