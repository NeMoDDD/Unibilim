import "./App.css";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import PersAreaStud from "./components/PersAreaStud/PersAreaStud";
import LoginPage from "./components/LoginPage/LoginPage";
// import PATeach from "./components/PATeach/PATeach";
import StudList from './components/PATeach/StudList'
import { Route, Routes } from "react-router-dom";
import TeachList from "./components/PersAreaStud/TeachList";
import Timetable from "./components/PersAreaStud/Timetable";
import Reservation from "./components/PersAreaStud/Reservation";
import MyCab from "./components/PATeach/MyCab";
import SubjTable from "./components/PATeach/SubjTable";
import PopUp from "./components/PersAreaStud/PopUp";


function App() {
  return (
    <div className="first_body">
      <Header />
      <Routes>
        <Route path="/reg" element={<Registration />} />
        <Route path="/pastud" element={<PersAreaStud />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/studlist" element={<StudList />} />
        <Route path="/teachlist" element={<TeachList />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="/teachcab" element={<MyCab/>} />
        <Route path="/subjtable" element={<SubjTable/>} />
        <Route path="/popup" element={<PopUp/>} />
      </Routes>
    </div>
  );
}

export default App;
