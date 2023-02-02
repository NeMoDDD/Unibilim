import "./App.css";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
// import SideBar from "./components/SideBar/SideBar";
import PersAreaStud from "./components/PersAreaStud/PersAreaStud";
import LoginPage from "./components/LoginPage/LoginPage";
import PATeach from "./components/PATeach/PATeach";
import countSheeps from "./components/Testing/Testing";
import { Route, Routes } from "react-router-dom";
import TeachList from "./components/PersAreaStud/TeachList";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
// } from "react-router-dom";

function App() {
  return (
    <div className="first_body">
        <Header />
      <Routes>
        <Route path="/reg" element={<Registration />} />
        <Route path="/pastud" element={<PersAreaStud />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pateach" element={<PATeach />}/>
        <Route path="/testing" element={<countSheeps/>}/>
        <Route path="/teachlist" element={<TeachList/>}/>
      </Routes>
    </div>
  );
}

export default App;
