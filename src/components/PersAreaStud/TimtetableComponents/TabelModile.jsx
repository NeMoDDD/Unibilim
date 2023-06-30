import ModalTeacherWindow from './ModalMenu';
import React,{useState} from 'react' 
const TableMobile = React.memo(({ subj,teacher, teach, time, backgroundColor, btn,week, day, setCurrentTeacherTC }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleTeacherClick = ()=>{ 
      setCurrentTeacherTC(teach) 
      setModalOpen(true)
    }   
    return (
      <>
        <div className="cards">
          <div className="cards_head">
            <p className="weekday">{week},</p>{" "}
            <p className="dayday">{day}</p>
          </div>
          <div
            className="cards_inner"
            style={{ backgroundColor: backgroundColor }}
          >
            <p className="card_subj">{subj}</p>
            <p className="card_teach">{teach}</p>
            <p className="card_time">{time}</p>
            <button className="cards_btn" onClick={handleTeacherClick} style={{backgroundColor: btn}}>Подробнее</button>
          </div>
        </div> 
        <ModalTeacherWindow teacher={teacher} modalOpen={modalOpen} setModalOpen={setModalOpen} time={time}/>
      </>
    )
  }) 
  export default TableMobile