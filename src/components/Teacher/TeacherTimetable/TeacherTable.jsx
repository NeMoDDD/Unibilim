import React from "react";

const TeacherTable = React.memo(({subj, student, time, backgroundColor, btn}) => {
    return (
        <>
            <div
                className="subj_block"
                style={{backgroundColor: backgroundColor,}}
            >
                <p className="subj_name">{subj}</p>
                <p className="subj_teach">{student}</p>
                <p className="subj_time">{time}</p>
                <button
                    className="subj_about"
                    style={{
                        backgroundColor: btn,
                    }}
                    // onClick={}
                >
                    Перейти на урок
                </button>
            </div>
        </>
    )
})
export default TeacherTable