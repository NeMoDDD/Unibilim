import "./App.scss";
import Registration from "./components/Registration/Registration";
// import Student from "./components/Student/Student";
import LoginPage from "./components/LoginPage/LoginPage";
import StudList from "./components/Teacher/StudList/StudList";
import {Route, Routes} from "react-router-dom";
import TeachList from "./components/Student/TeachList";
import Reservation from "./components/Student/Reservation";
import TeacherCabinet from "./components/Teacher/TeacherCabinet/TeacherCabinet";
import SubjTable from "./components/Teacher/SubjTable";
import PopUp from "./components/Student/PopUp";
import TimeTableContainer from "./components/Student/TimeTableContainer";
import Verification from "./components/LoginPage/Verification";
import {useEffect} from "react";
import {login} from "./redux/loginReducer";
import {useDispatch} from "react-redux";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Проверка наличия данных пользователя в localStorage
    const user = localStorage.getItem('user_unibilim');
    if (user) {
      const userData = JSON.parse(user);
      dispatch(login(userData.username, userData.password))
    }
  }, []);

  return (
    <div className="first_body">
      <Routes>
        <Route path="*" element={<LoginPage />} />
        {/*<Route path="/studlk" element={<StudentCabinet />} />*/}
        <Route path="/teachlk" element={<TeacherCabinet />} />
        <Route path="/reg" element={<Registration />} />
        {/*<Route path="/pastud" element={<TeacherCabinet />} />*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/studlist" element={<StudList />} />
        <Route path="/teachlist" element={<TeachList />} />
        <Route path="/timetable" element={<TimeTableContainer/>} />
        <Route path="/reservation" element={<Reservation />} />
        {/*<Route path="/teachcab" element={<MyCab />} />*/}
        <Route path="/subjtable" element={<SubjTable />} />
        <Route path="/popup" element={<PopUp />} /> 
        <Route path="/verification" element={<Verification/>}/>
      </Routes>
    </div>
  );
}

export default App;
