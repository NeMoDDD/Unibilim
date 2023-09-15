import React, {useEffect, useState} from "react";
import s from "./StudList.module.scss"
import SideBarTeach from "../../SideBar/SideBarTeach";
import HeaderT from "../../Header/HeaderT";
import {Select,Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import { getDefineProffeserossStudents } from "../../../redux/myStudents-reducer";
import ava from '../../../assets/img/Group 135.svg'
import {motion} from "framer-motion";

const StudList = () => {
    const {userRole,token} = useSelector(state => state.loginReducer)
    const {myStudents,isFetching} = useSelector(state => state.myStudents)   
    
    const dispatch = useDispatch()

    const [filter, setFilter] = useState("all");
    const [filteredStudents, setFilteredStudents] = useState([]);
    useEffect(() =>{ 
        dispatch(getDefineProffeserossStudents({token}))
    },[dispatch,token])

    useEffect(() => {
        const filterStudentsBySurname = () => {
            if (filter === "all") {
                setFilteredStudents(myStudents)
            } else if (filter === "surname_filter") {
                const sortedStudents = [...myStudents].sort((a, b) =>
                    a.surname.localeCompare(b.surname, "ru", { sensitivity: "base" })
                );
                setFilteredStudents(sortedStudents);
            }
        };
        filterStudentsBySurname();
    }, [filter, myStudents]);

    return (
        <>
            <HeaderT/>
            <SideBarTeach/>
            {userRole === "professor" ?
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className={s.pad}
                >
                    <div className={s.stud_head}>
                        <Spin spinning={isFetching}> 
                        <div className={s.radios}>
                            <p className={s.studs}>Ученики</p>
                            {/*<div className={s.student__type__block}>*/}
                            {/*    <div className={s.student__type}>*/}
                            {/*        <input type="radio" id="exclusive" name="forwho" value="excluse"/>*/}
                            {/*        <label className={s.radio_txt} htmlFor="exclusive">*/}
                            {/*            Индивидуальные*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className={s.student__type}>*/}
                            {/*        <input*/}
                            {/*            type="radio"*/}
                            {/*            id="groups"*/}
                            {/*            name="forwho"*/}
                            {/*            value="group"*/}
                            {/*        />*/}
                            {/*        <label className={s.radio_txt} htmlFor="groups">Групповые </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <Select
                                defaultValue="all"
                                className={s.stud_drop}
                                popupClassName={s.stud_drop_popup}
                                bordered={false}
                                size={"small"}
                                options={[
                                    {value: "all", label: "Все"},
                                    {value: 'surname_filter', label: 'По фамилии'},
                                ]}
                                onChange={(value) => setFilter(value)}
                            />
                        </div>
                        <div className={s.stud_list}>
                            {filteredStudents?.map((item, index) => (
                                <div className={s.stud_card} key={index}>
                                    <img src={item?.photo ? item.photo : ava } alt=""/>
                                    <p key={item.id} className={s.stud_txt}>
                                        {" "}
                                        {item?.firstname}
                                        <br/>
                                        {item?.surname}
                                    </p>
                                    {/*<button className={s.stud_btn}>*/}
                                    {/*    <p className={s.stud_btn_txt}>Подробнее</p>*/}
                                    {/*</button>*/}
                                </div>
                            ))}
                        </div>
                </Spin>
                    </div>
                </motion.div>
                : userRole === "student" ? <Navigate to="/timetable"/> : <Navigate to="/login"/>}
        </>
    );
};

export default StudList;
