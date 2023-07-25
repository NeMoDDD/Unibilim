import React from "react";
import SideBar from "../SideBar/SideBar";
import "../../styles/__timetable.scss";
import HeaderFS from "../Header/Header"; 
import Table from "./TimtetableComponents/TableLarge"; 
import TableMobile from "./TimtetableComponents/TabelModile";
import { testData1, testData2, testData3 } from "../../redux/timetableReducer";
import Header from "../Header/Header";

const Timetable = React.memo((props) => {
  const firstDate = props.timetable?.alldate?.[0];
  const lastDate = props.timetable?.alldate[props.timetable.alldate.length - 1];
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'] 
  const weekFull = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  const getNextWeekHandler = () => {
    if (props.timetable.id === 2) {
      return props.setNewTimetableAC(testData3)
    } else if (props.timetable.id === 1) {
      return props.setNewTimetableAC(testData2)
    } else return
  }
  const getPrevWeekHandler = () => {
    if (props.timetable.id === 3) {
      return props.setNewTimetableAC(testData2)
    } else if (props.timetable.id === 2) {
      return props.setNewTimetableAC(testData1)
    } else return
  }
  return (
    <>
      <Header/>
      <SideBar/>
      {props.timetable?.alldate &&

        <div className="timetable_block">
          <div className="timetable__time">
            <p className="teach_txt">Расписание</p>
            <div className="date_txt">
              <span className='timetable__title_span' onClick={getPrevWeekHandler}>{'<'}</span>
              <div className='timetable__title'>{firstDate} - {lastDate} </div>
              <span className='timetable__title_span' onClick={getNextWeekHandler}>{'>'}</span>
            </div>
          </div>
          <table className="timetable">
            <tbody>
              <tr>
                {props.timetable?.alldate.map((item, index) => <td key={index}>{item}, {week[index]}</td>)}
              </tr>
              <tr style={{ borderTop: "1px solid black" }}>
                <td >
                  <div className='timetable__item'>
                    {" "}
                    {props.timetable?.monday.map((item, key) => <Table key={key} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                  </div>
                </td>
                <td className='timetable__row'>
                  <div className='timetable__item'>
                    {props.timetable?.tuesday.map((item, key) => <Table key={key} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                  </div>
                </td>
                <td >
                  <div className='timetable__item'>
                    {props.timetable?.wednesday.map((item, key) => <Table key={key} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                  </div>
                </td>
                <td >
                  <div className='timetable__item'>
                    {props.timetable?.thursday.map((item, key) => <Table key={key} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                  </div>
                </td>
                <td >
                  <div className='timetable__item'>
                    {props.timetable?.friday.map((item, key) => <Table key={key} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                  </div>
                </td>
                <td >
                  <div className='timetable__item'>
                    {props.timetable?.saturday.map((item, key) => <Table key={key} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                  </div>
                </td>
                <td style={{ height: "400px" }}>
                  <div className='timetable__item'>
                    {props.timetable?.sunday.map((item, key) => <Table key={key} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
    
          <div className="cards_block">
            {props.timetable.monday.map((item, index) => <TableMobile week={weekFull[0]} day={props.timetable.alldate[0]} key={index} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)} 
            {props.timetable.tuesday.map((item, index) => <TableMobile week={weekFull[1]} day={props.timetable.alldate[1]} key={index} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)} 
            {props.timetable.wednesday.map((item, index) => <TableMobile week={weekFull[2]} day={props.timetable.alldate[2]} key={index} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)} 
            {props.timetable.thursday.map((item, index) => <TableMobile week={weekFull[3]} day={props.timetable.alldate[3]} key={index} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)} 
            {props.timetable.friday.map((item, index) => <TableMobile week={weekFull[4]} day={props.timetable.alldate[4]} key={index} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)} 
            {props.timetable.saturday.map((item, index) => <TableMobile week={weekFull[5]} day={props.timetable.alldate[5]} key={index} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)} 
            {props.timetable.sunday.map((item, index) => <TableMobile week={weekFull[6]} day={props.timetable.alldate[6]} key={index} btn={item.btc} subj={item.subj} teach={item.teach} time={item.time} backgroundColor={item.backgroundColor} teacher={props.currentTeacher} setCurrentTeacherTC={props.setCurrentTeacherTC}/>)}
          </div>
        </div>

      }
    </>
  );
});



export default Timetable;