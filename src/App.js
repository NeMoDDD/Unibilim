import "./App.scss";
import Registration from "./components/Registration/Registration";
// import Student from "./components/Student/Student";
import LoginPage from "./components/LoginPage/LoginPage";
import StudList from "./components/Teacher/StudList/StudList";
import { Route, Routes } from "react-router-dom";
import TeachList from "./components/Student/TeachList";
import Reservation from "./components/Student/Reservation";
import MyCab from "./components/Teacher/TeacherCabinet/TeacherCabinet";
import SubjTable from "./components/Teacher/SubjTable";
import PopUp from "./components/Student/PopUp";
import Home from "./components/Home/Home";
import ForAll from "./components/Student/forAll";
import ForTeach from "./components/Teacher/forTeach";
import TimeTableContainer from "./components/Student/TimeTableContainer";
import TeacherCabinet from "./components/Teacher/TeacherCabinet/TeacherCabinet";
import Verification from "./components/LoginPage/Verification";
import StudentCabinet from "./components/Student/StudentCabinet/StudentCabinet";


function App() {
  return (
    <div className="first_body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studlk" element={<StudentCabinet />} />
        <Route path="/teachlk" element={<TeacherCabinet />} />
        <Route path="/reg" element={<Registration />} />
        {/*<Route path="/pastud" element={<TeacherCabinet />} />*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/studlist" element={<StudList />} />
        <Route path="/teachlist" element={<TeachList />} />
        <Route path="/timetable" element={<TimeTableContainer/>} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/teachcab" element={<MyCab />} />
        <Route path="/subjtable" element={<SubjTable />} />
        <Route path="/popup" element={<PopUp />} /> 
        <Route path="/verification" element={<Verification/>}/>
      </Routes>
    </div>
  );
}

export default App;
