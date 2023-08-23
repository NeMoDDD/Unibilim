import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderT from "../Header/HeaderT";
import StudList from "./StudList/StudList";
import TeacherTimetable from './TeacherTimetable/TeacherTimetable'
import MyCab from './TeacherCabinet/TeacherCabinet'


const ForTeach = () => {
  return (
    <div>
      <MyCab />
      <Routes>
        <Route path="/studlist" element={<StudList />} />
        <Route path="/subjtable" element={<TeacherTimetable />} />
      </Routes>
    </div>
  );
};

export default ForTeach;
