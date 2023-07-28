import React from "react";
import './__table.scss'

const Table = () => {
  return (
    <div className="all_res_table">
        <div className="time_res">
        <p style={{marginTop:"10px"}}>12:00</p>
        <p className="mt">13:00</p>
        <p className="mt">14:00</p>
        <p className="mt">15:00</p>
        <p className="mt">16:00</p>
        <p className="mt">17:00</p>
        <p className="mt">18:00</p>
        <p className="mt">19:00</p>
        <p className="mt">20:00</p>
        <p className="mt">21:00</p>

        </div>
      <table class="table">
        <tbody>
          <tr className="date_res" style={{backgroundColor:"#F6FAFC"}}>
            <th>23,пн</th>
            <th>24,вт</th>
            <th>25,ср</th>
            <th>26,чт</th>
            <th>27,пт</th>
            <th>28,сб</th>
            <th>29,вс</th>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}} className="in_table">Выбрано</td>
            <td></td>
            <td className="in_table">Выбрано</td>
            <td className="in_table">Выбрано</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{borderLeft:"none"}}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
