import React from "react";
import SideBar from "../SideBar/SideBar";
import "../../styles/__timetable.scss";
import PopUp from "./PopUp";

const Timetable = () => {
  const name = "< 23 янв - 30 янв >";
  const dayList = ["Mon", "Tue", "Wed", "Tuer", "Fri", "Sat", "Sun"];
  const arrSubj = [
    {
      Mon: {
        1: {
          time: "15:00",
          teach: "Зуева Ольга",
          subj: "Математика",
          backgroundColor: "#CCFFFF",
        },
        2: {
          time: "19:00",
          teach: "Ольга Петровна",
          subj: "Химия",
          backgroundColor: "#FFF1A1",
          btc: "#FFEC7E",
        },
      },
      Tue: {
        1: {
          time: "16:00",
          teach: "Пётр Анатольевич",
          subj: "Руский язык",
          backgroundColor: "#C5FFCA",
          btc: "#AFFFB7",
        },
      },
      Wed: {
        1: {
          time: "15:00",
          teach: "Зуева Ольга",
          subj: "Математика",
          backgroundColor: "#FFF1A1",
          btc: "#FFEC7E",
        },
      },
      Tuer: {
        1: {
          time: "19:00",
          teach: "Ольга Петровна",
          subj: "Химия",
          backgroundColor: "#CCFFFF",
          btc: "#9fffff",
        },
      },
      Fri: {},
      Sat: {},
      Sun: {
        1: {
          time: "12:00",
          teach: "Кристофер Колумб",
          subj: "Физика",
          backgroundColor: "#C5FFCA",
          btc: "#AFFFB7",
        },
      },
    },
  ];
  const ROW_DEFAULT = {
    Mon: null,
    Tue: null,
    Wed: null,
    Tuer: null,
    Fri: null,
    Sat: null,
    Sun: null,
  };
  const arrSubjItem = arrSubj[0];
  const View = {};
  dayList.forEach((day) => {
    const dayData = arrSubjItem[day];
    const dayDataKeyList = Object.keys(dayData);
    dayDataKeyList.forEach((key) => {
      const intKey = Number.parseInt(key);
      if (View[intKey] === undefined) {
        View[intKey] = Object.assign({}, ROW_DEFAULT);
      }
      View[intKey][day] = dayData[intKey];
    });
  });
  const rowList = Object.keys(View)
    .sort()
    .map((key) => {
      const intKey = Number.parseInt(key);
      return View[intKey];
    });

  return (
    <>
      <SideBar />
      <div className="timetable_block">
        <div className="time">
          <p className="teach_txt">Расписание</p>
          <p className="date_txt">{name}</p>
        </div>
        <table class="timetable">
          <tbody>
            <tr>
              <td>6 фев, пн</td>
              <td>7 фев, вт</td>
              <td>8 фев, ср</td>
              <td>9 фев, чт</td>
              <td>10 фев, пт</td>
              <td>11 фев, сб</td>
              <td>12 фев, вс</td>
            </tr>
            <tr style={{ borderTop: "1px solid black" }}>
              <td>
                {" "}
                <div
                  className="subj_block"
                  style={{ backgroundColor: "#CCFFFF", marginTop: "-150px" }}
                >
                  <p className="subj_name">{arrSubjItem.Mon[1].subj}</p>
                  <p className="subj_teach">{arrSubjItem.Mon[1].teach}</p>
                  <p className="subj_time">{arrSubjItem.Mon[1].time}</p>
                  <button
                    className="subj_about"
                    style={{
                      backgroundColor: arrSubjItem.Mon[1].backgroundColor,
                    }}
                  >
                    Подробнее
                  </button>
                </div>
                <div
                  className="subj_block"
                  style={{ backgroundColor: "#FFF1A1" }}
                >
                  <p className="subj_name">{arrSubjItem.Mon[2].subj}</p>
                  <p className="subj_teach">{arrSubjItem.Mon[2].teach}</p>
                  <p className="subj_time">{arrSubjItem.Mon[2].time}</p>
                  <button className="subj_about2" style={{}}>
                    Подробнее
                  </button>
                </div>
              </td>
              <td>
                <div
                  className="subj_block"
                  style={{ backgroundColor: "#CCFFFF", marginTop: "-193px" }}
                >
                  <p className="subj_name">{arrSubjItem.Tue[1].subj}</p>
                  <p className="subj_teach">{arrSubjItem.Tue[1].teach}</p>
                  <p className="subj_time">{arrSubjItem.Tue[1].time}</p>
                  <button className="subj_about">Подробнее</button>
                </div>
              </td>
              <td>
                <div
                  className="subj_block"
                  style={{ backgroundColor: "#C5FFCA", marginTop: "-193px" }}
                >
                  <p className="subj_name">{arrSubjItem.Wed[1].subj}</p>
                  <p className="subj_teach">{arrSubjItem.Wed[1].teach}</p>
                  <p className="subj_time">{arrSubjItem.Wed[1].time}</p>
                  <button className="subj_about3">Подробнее</button>
                </div>
              </td>
              <td>
                <div
                  className="subj_block"
                  style={{ backgroundColor: "#FFF1A1", marginTop: "-193px" }}
                >
                  <p className="subj_name">{arrSubjItem.Tuer[1].subj}</p>
                  <p className="subj_teach">{arrSubjItem.Tuer[1].teach}</p>
                  <p className="subj_time">{arrSubjItem.Tuer[1].time}</p>
                  <button className="subj_about2">Подробнее</button>
                </div>
              </td>
              <td></td>
              <td></td>
              <td style={{ height: "400px" }}>
                <div
                  className="subj_block"
                  style={{ backgroundColor: "#CCFFFF", marginTop: "-193px" }}
                >
                  <p className="subj_name">{arrSubjItem.Sun[1].subj}</p>
                  <p className="subj_teach">{arrSubjItem.Sun[1].teach}</p>
                  <p className="subj_time">{arrSubjItem.Sun[1].time}</p>
                  <button className="subj_about">Подробнее</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {arrSubj.map((el) => {
          return (
            <div className="cards_block">
              <div className="cards">
                <div className="cards_head">
                  <p className="weekday">Понедельник</p>{" "}
                  <p className="dayday">23 января</p>
                </div>
                <div
                  className="cards_inner"
                  style={{ backgroundColor: el.Mon[1].backgroundColor }}
                >
                  <p className="card_subj">{el.Mon[1].subj}</p>
                  <p className="card_teach">{el.Mon[1].teach}</p>
                  <p className="card_time">{el.Mon[1].time}</p>
                  <button className="cards_btn">Подробнее</button>
                </div>
              </div>
              <div className="cards">
                <div className="cards_head">
                  <p className="weekday">Вторник</p>{" "}
                  <p className="dayday">24 января</p>
                </div>
                <div
                  className="cards_inner"
                  style={{ backgroundColor: el.Tue[1].backgroundColor }}
                >
                  <p className="card_subj">{el.Tue[1].subj}</p>
                  <p className="card_teach">{el.Tue[1].teach}</p>
                  <p className="card_time">{el.Tue[1].time}</p>
                  <button
                    className="cards_btn"
                    style={{ backgroundColor: el.Tue[1].btc }}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="break"></div>
              <div className="cards">
                <div className="cards_head">
                  <p className="weekday">Среда</p>{" "}
                  <p className="dayday">25 января</p>
                </div>
                <div
                  className="cards_inner"
                  style={{ backgroundColor: el.Wed[1].backgroundColor }}
                >
                  <p className="card_subj">{el.Wed[1].subj}</p>
                  <p className="card_teach">{el.Wed[1].teach}</p>
                  <p className="card_time">{el.Wed[1].time}</p>
                  <button
                    className="cards_btn"
                    style={{ backgroundColor: el.Wed[1].btc }}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="cards">
                <div className="cards_head">
                  <p className="weekday">Среда</p>{" "}
                  <p className="dayday">25 января</p>
                </div>
                <div
                  className="cards_inner"
                  style={{ backgroundColor: el.Tuer[1].backgroundColor }}
                >
                  <p className="card_subj">{el.Tuer[1].subj}</p>
                  <p className="card_teach">{el.Tuer[1].teach}</p>
                  <p className="card_time">{el.Tuer[1].time}</p>
                  <button
                    className="cards_btn"
                    style={{ backgroundColor: el.Tuer[1].btc }}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <PopUp/> */}
    </>
  );
};

export default Timetable;
