import { connect } from "react-redux"
import Timetable from "./Timetable"
import React from "react" 
import { setNewTimetableAC,setCurrentTeacherTC } from "../../redux/timetableReducer"
const TimeTableContainer = React.memo(({...props}) =>{ 
    return( 
        <Timetable {...props}/>
    )
})  
const mapStateToProps = (state) =>{ 
    return{ 
        timetable: state.timetablePage.timetable, 
        currentTeacher: state.timetablePage.currentTeacher
    }
}
export default connect(mapStateToProps, {setNewTimetableAC, setCurrentTeacherTC})(TimeTableContainer)