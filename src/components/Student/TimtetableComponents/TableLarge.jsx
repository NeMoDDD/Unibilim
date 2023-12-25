import React, {useState} from "react";
import ModalTeacherWindow from "./ModalMenu";

const Table = React.memo(({subj, teach, time, backgroundColor, btn, alldate, info,videoLink}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleTeacherClick = () => {
        setModalOpen(true)
    }
    return (
        <>
            <div
                className="subj_block"
                style={{backgroundColor: backgroundColor,}}
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
            <ModalTeacherWindow videoLink={videoLink} teach={teach} modalOpen={modalOpen} time={time} setModalOpen={setModalOpen} subj={subj} alldate={alldate} info={info}/>
        </>
    )
})
export default Table