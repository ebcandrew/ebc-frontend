import React from "react";
import "./roundStats.css";

const data = [
  { info: "GBL RANK", stats: 10 },
  { info: "GBL WINS", stats: 16 },
  { info: "SILPH ARENA", stats: "CH" },
  { info: "SILPH ARENA WIN %", stats: 48.6 },
];

const colors = ["rgb(43, 43, 43)", "rgb(65, 63, 63)"];
const roundStats = () => {
  return (
    <div className="roundStats_maindiv">
      <h4>ROUND STATS</h4>
      <table className="roundStats_table" cellSpacing="0">
        {data.map((val, key) => {
          var i = 0;
          if (key % 2 === 0) {
            i = 0;
          } else {
            i = 1;
          }
          return (
            <tbody>
              <tr
                style={{ backgroundColor: colors[i] }}
                className="roundStats"
                key={key}
              >
                <td>{val.info}</td>
                <td className="stats">{val.stats}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default roundStats;
