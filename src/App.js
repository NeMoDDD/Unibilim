import "./App.scss";
import Registration from "./components/Registration/Registration";
import PersAreaStud from "./components/PersAreaStud/PersAreaStud";
import LoginPage from "./components/LoginPage/LoginPage";
import StudList from "./components/PATeach/StudList";
import { Route, Routes } from "react-router-dom";
import TeachList from "./components/PersAreaStud/TeachList";
import Timetable from "./components/PersAreaStud/Timetable";
import Reservation from "./components/PersAreaStud/Reservation";
import MyCab from "./components/PATeach/MyCab";
import SubjTable from "./components/PATeach/SubjTable";
import PopUp from "./components/PersAreaStud/PopUp";
import Home from "./components/Home/Home";
import ForAll from "./components/PersAreaStud/forAll";
import ForTeach from "./components/PATeach/forTeach";
import MyCabContainer from "./components/PATeach/MyCabContainer";


function App() {
  return (
    <div className="first_body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studlk" element={<ForAll />} />
        <Route path="/teachlk" element={<ForTeach />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/pastud" element={<MyCabContainer />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/studlist" element={<StudList />} />
        <Route path="/teachlist" element={<TeachList />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="/teachcab" element={<MyCabContainer/>} />
        <Route path="/subjtable" element={<SubjTable />} />
        <Route path="/popup" element={<PopUp />} />
      </Routes>
    </div>
  );
}

export default App;
