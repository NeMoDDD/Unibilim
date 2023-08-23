import React from 'react'
import moment from "moment/moment";

const TeacherTableMobile = React.memo(({subj, student, time, backgroundColor, btn, alldate}) => {
    const dateObject = moment(alldate)

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
                    <p className="card_teach">{student}</p>
                    <p className="card_time">{time}</p>
                    <button className="cards_btn" style={{backgroundColor: btn}}>Перейти на урок</button>
                </div>
            </div>
        </>
    )
})
export default TeacherTableMobile