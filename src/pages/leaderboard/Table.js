import React from "react";
import "./Table.css";

function Table() {
  const tabeData = [
    {
      trainer: "skadoodle",
      team: "mystic",
      w: "33",
      l: "32",
      tts: "343",
    },
  ];
  return (
    <div className="table">
      <div className="table__heading">leaderboard</div>

      <div className="table__body">
        <table>
          <tr>
            <th>#</th>

            <th></th>

            <th>tabeData.trainer</th>

            <th>tabeData.team</th>

            <th>tabeData.w</th>

            <th>tabeData.l</th>

            <th>tabeData.tts</th>
          </tr>

          <div className="table__data">
            {tabeData.map((data, index) => {
              return <div className="table__data__item"></div>;
            })}
          </div>
        </table>
      </div>
    </div>
  );
}

export default Table;
