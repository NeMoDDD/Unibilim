import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderT from "../Header/HeaderT";
import StudList from "./StudList";
import SubjTable from './SubjTable'
import MyCab from './TeacherCabinet'


const ForTeach = () => {
  return (
    <div>
      <MyCab />
      <Routes>
        <Route path="/studlist" element={<StudList />} />
        <Route path="/subjtable" element={<SubjTable />} />
      </Routes>
    </div>
  );
};

export default ForTeach;
