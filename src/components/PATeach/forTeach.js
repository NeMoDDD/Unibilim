import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderT from "../Header/HeaderT";
import StudList from "./StudList";
import SubjTable from './SubjTable'
import MyCab from './MyCab'


const ForTeach = () => {
  return (
    <div>
      <HeaderT />
      <MyCab />
      <Routes>
        <Route path="/studlist" element={<StudList />} />
        <Route path="/subjtable" element={<SubjTable />} />
      </Routes>
    </div>
  );
};

export default ForTeach;
