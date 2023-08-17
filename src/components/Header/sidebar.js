import Registration from "../components/Registration/Registration";
import PersAreaStud from "../components/Student/Student";
import LoginPage from "../components/LoginPage/LoginPage";
import StudList from "../components/Teacher/StudList";
import TeachList from "../components/Student/TeachList";
import Timetable from "../components/Student/Timetable";
import Reservation from "../components/Student/Reservation";
import MyCab from "./components/Teacher/MyCab";
import SubjTable from "./components/Teacher/SubjTable";
import Home from "./components/Home/Home";



export const sidebar = [
    {path:'/', exact: true, name:'Home', element:< Home/>},
    {path:'/subjtable', exact: true, element: <SubjTable/>},
    {path:'/pateach', exact: true, element: <MyCab/>},
    {path:'/reser', exact: true, element: <Reservation/>},
    {path:'/titable', exact: true, element: <Timetable/>},
    {path:'/teachlist', exact: true, element: <TeachList/>},
    {path:'/studlist', exact: true, element: <StudList/>},
    {path:'/logpage', exact: true, element: <LoginPage/>},
    {path:'/pastud', exact: true, element: <PersAreaStud/>},
    {path:'/reg', exact: true, element: <Registration/>},
]