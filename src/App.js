import "./App.css";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
// import SideBar from "./components/SideBar/SideBar";
import PersAreaStud from "./components/PersAreaStud/PersAreaStud";
import LoginPage from "./components/LoginPage/LoginPage";
import PATeach from "./components/PATeach/PATeach";
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
      {/* <Registration/>
      <PersAreaStud />
      <LoginPage/>  */}
      <PATeach/>
    </div>
  );
}

export default App;
