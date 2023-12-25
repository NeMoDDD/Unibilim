import ModalTeacherWindow from './ModalMenu';
import React,{useState} from 'react'
import moment from "moment/moment";
const TableMobile = React.memo(({subj, teach, time, backgroundColor, btn, alldate, info,videoLink}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dateObject = moment(alldate)

    const handleTeacherClick = ()=>{ 
      setModalOpen(true)
    }   
    return (
      <>
        <div className="cards">
          <div className="cards_head">
            <p className="weekday">{dateObject.format('dddd')},&nbsp;</p>{" "}
            <p className="dayday">{dateObject.format('DD MMM').slice(0, -1)}</p>
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
        <ModalTeacherWindow videoLink={videoLink} teach={teach} modalOpen={modalOpen} time={time} setModalOpen={setModalOpen} subj={subj} alldate={alldate} info={info}/>
      </>
    )
  }) 
  export default TableMobile