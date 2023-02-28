import React from "react";
import SideBarTeach from "../SideBar/SideBarTeach";
import "./__subj.scss";

const SubjTable = () => {
  const name = "< 23 янв - 30 янв >";
  const dayList = ["Mon", "Tue", "Wed", "Tuer", "Fri", "Sat", "Sun"];
  const arrSubj = [
    {
      Mon: {
        1: {
          time: "15:00",
          stud: "Ростислав Дорохин",
          backgroundColor: "#FFF1A1",
          btc: "#FFEC7E",
        },
        2: {
          time: "16:00",
          stud: "Анастасия Краснова",
          backgroundColor: "#C5FFCA",
          btc: "#AFFFB7",
        },
        3: {
          time: "18:00",
          stud: "Александр Шумец",
          backgroundColor: "#FFF1A1",
          btc: "#FFEC7E",
        },
        4: {
          time: "19:00",
          stud: "Артём Зайченко",
          backgroundColor: "#CCFFFF",
          btc: "#9fffff",
        },
        5: {
          time: "21:00",
          stud: "Екатерина Ли",
          backgroundColor: "#FFF1A1",
          btc: "#FFEC7E",
        },
      },
      Tue: {
        1: {
          time: "12:00",
          stud: "Иван Ванищенко",
          backgroundColor: "#FFF1A1",
          btc: "#FFEC7E",
        },
        2: {
          time: "14:00",
          stud: "Мария Кравец",
          backgroundColor: "#C5FFCA",
          btc: "#AFFFB7",
        },
        3: { time: "18:00", stud: "Ростлислав Дорохин" },
      },
      Wed: {},
      Tuer: {
        1: { time: "16:00", stud: "Ростислав Дорохин" },
        2: { time: "16:00", stud: "Ростислав Дорохин" },
      },
      Fri: {
        1: { time: "18:00", stud: "Артём Зайченко" },
        2: { time: "19:00", stud: "Диана Зинченко" },
      },
      Sat: {},
      Sun: {
        1: { time: "19:00", stud: "Диана Зинченко" },
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
      <SideBarTeach />
      <div className="timetable_block">
        <div className="time">
          <p className="teach_txt">Расписание</p>
          <p className="date_txt">{name}</p>
        </div>
        <table class="subjtable">
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
            <tr style={{ borderTop: "1px solid" }}>
              <td>
                {" "}
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#CCFFFF" }}
                >
                  <p className="stud_teach">{arrSubjItem.Mon[1].stud}</p>
                  <p className="stud_time">{arrSubjItem.Mon[1].time}</p>
                </div>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#FFF1A1" }}
                >
                  <p className="stud_teach">{arrSubjItem.Mon[2].stud}</p>
                  <p className="stud_time">{arrSubjItem.Mon[2].time}</p>
                </div>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#FFF1A1" }}
                >
                  <p className="stud_teach">{arrSubjItem.Mon[3].stud}</p>
                  <p className="stud_time">{arrSubjItem.Mon[3].time}</p>
                </div>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#FFF1A1" }}
                >
                  <p className="stud_teach">{arrSubjItem.Mon[4].stud}</p>
                  <p className="stud_time">{arrSubjItem.Mon[4].time}</p>
                </div>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#FFF1A1" }}
                >
                  <p className="stud_teach">{arrSubjItem.Mon[5].stud}</p>
                  <p className="stud_time">{arrSubjItem.Mon[5].time}</p>
                </div>
              </td>
              <td>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#CCFFFF", marginTop: "-245px" }}
                >
                  <p className="stud_teach">{arrSubjItem.Tue[1].stud}</p>
                  <p className="stud_time">{arrSubjItem.Tue[1].time}</p>
                </div>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#CCFFFF" }}
                >
                  <p className="stud_teach">{arrSubjItem.Tue[2].stud}</p>
                  <p className="stud_time">{arrSubjItem.Tue[2].time}</p>
                </div>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#CCFFFF" }}
                >
                  <p className="stud_teach">{arrSubjItem.Tue[3].stud}</p>
                  <p className="stud_time">{arrSubjItem.Tue[3].time}</p>
                </div>
              </td>
              <td></td>
              <td>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#FFF1A1", marginTop: "-310px" }}
                >
                  <p className="stud_teach">{arrSubjItem.Tuer[1].stud}</p>
                  <p className="stud_time">{arrSubjItem.Tuer[1].time}</p>
                </div>
              </td>
              <td>
                <div
                  className="stud_block"
                  style={{ backgroundColor: "#FFF1A1", marginTop: "-310px" }}
                >
                  <p className="stud_teach">{arrSubjItem.Tuer[2].stud}</p>
                  <p className="stud_time">{arrSubjItem.Tuer[2].time}</p>
                </div>
              </td>
              <td></td>
              <td style={{ height: "400px" }}></td>
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
                  <p className="card_stud">{el.Mon[1].stud}</p>
                  <p className="card_stud">{el.Mon[1].time}</p>
                  <button
                    className="cards_btn"
                    style={{ backgroundColor: el.Mon[1].btc }}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="cards">
                <div className="cards_head">
                  <p className="weekday">Вторник</p>{" "}
                  <p className="dayday">24 января</p>
                </div>
                <div
                  className="cards_inner"
                  style={{ backgroundColor: el.Mon[2].backgroundColor }}
                >
                  <p className="card_stud">{el.Mon[2].stud}</p>
                  <p className="card_stud">{el.Mon[2].time}</p>
                  <button
                    className="cards_btn"
                    style={{ backgroundColor: el.Mon[2].btc }}
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
                  style={{ backgroundColor: el.Mon[3].backgroundColor }}
                >
                  <p className="card_stud">{el.Mon[3].stud}</p>
                  <p className="card_stud">{el.Mon[3].time}</p>
                  <button
                    className="cards_btn"
                    style={{ backgroundColor: el.Mon[3].btc }}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="cards">
                <div className="cards_head">
                  <p className="weekday">Четверг</p>{" "}
                  <p className="dayday">25 января</p>
                </div>
                <div
                  className="cards_inner"
                  style={{ backgroundColor: el.Mon[4].backgroundColor }}
                >
                  <p className="card_stud">{el.Mon[4].stud}</p>
                  <p className="card_stud">{el.Mon[4].time}</p>
                  <button
                    className="cards_btn"
                    style={{ backgroundColor: el.Mon[4].btc }}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SubjTable;
