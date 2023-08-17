import React, { useEffect } from "react";
import s from "./StudList.module.css"
import stud1 from "../../../assets/img/stud1.png";
import stud2 from "../../../assets/img/stud2.png";
import stud3 from "../../../assets/img/stud3.png";
import stud4 from "../../../assets/img/stud4.png";
import stud5 from "../../../assets/img/stud5.png";
import SideBarTeach from "../../SideBar/SideBarTeach";
import HeaderT from "../../Header/HeaderT";
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import { getDefineProffeserossStudents } from "../../../redux/myStudents-reducer";
import ava from '../../../assets/img/student-without-photo.svg'
const StudList = () => {
    const students = [
        {id: 1, name: "Ирина", firstname: "Бойка", img: stud1},
        {id: 2, name: "Николай", firstname: "Коготько", img: stud2},
        {id: 3, name: "Дмитрий", firstname: "Примудрый", img: stud3},
        {id: 4, name: "Вася", firstname: "Глупый", img: stud4},
        {id: 5, name: "Геральт", firstname: "Изривии", img: stud5},
        {id: 3, name: "Дмитрий", firstname: "Примудрый", img: stud3},
        {id: 2, name: "Николай", firstname: "Коготько", img: stud2},
        {id: 4, name: "Вася", firstname: "Глупый", img: stud4},
    ];
    const {userRole,token} = useSelector(state => state.loginReducer)
    const {myStudents} = useSelector(state => state.myStudents)  
    const dispatch = useDispatch() 
    useEffect(() =>{ 
        dispatch(getDefineProffeserossStudents({token}))
    },[dispatch,token]) 
    console.log(myStudents);
    return (
        <>
            <HeaderT/>
            <SideBarTeach/>
            {userRole === "professor" ?
                <div className={s.pad}>
                    <div className={s.stud_head}>
                        <div className={s.radios}>
                            <p className={s.studs}>Ученики</p>
                            <div className={s.student__type__block}>
                                <div className={s.student__type}>
                                    <input type="radio" id="exclusive" name="forwho" value="excluse"/>
                                    <label className={s.radio_txt} htmlFor="exclusive">
                                        Индивидуальные
                                    </label>
                                </div>
                                <div className={s.student__type}>
                                    <input
                                        type="radio"
                                        id="groups"
                                        name="forwho"
                                        value="group"
                                    />
                                    <label className={s.radio_txt} htmlFor="groups">Групповые </label>
                                </div>
                            </div>
                            <Select
                                defaultValue="surname_filter"
                                className={s.stud_drop}
                                popupClassName={s.stud_drop_popup}
                                bordered={false}
                                size={"small"}
                                options={[
                                    {value: 'surname_filter', label: 'По фамилии'},
                                    {value: 'age_filter', label: 'По возрасту'},
                                    {value: 'location_filter', label: 'По городу'},
                                ]}
                            />
                        </div>
                        <div className={s.stud_list}>
                            {myStudents?.map((item, index) => (
                                <div className={s.stud_card} key={index}>
                                    <img src={item?.photo ? item.photo : ava } alt=""/>
                                    <p key={item.id} className={s.stud_txt}>
                                        {" "}
                                        {item?.firstname}
                                        <br/>
                                        {item?.surname}
                                    </p>
                                    <button className={s.stud_btn}>
                                        <p className={s.stud_btn_txt}>Подробнее</p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                : userRole === "student" ? <Navigate to="/timetable"/> : <Navigate to="/login"/>}
        </>
    );
};

export default StudList;
