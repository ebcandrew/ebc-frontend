import React from "react";
import "./Stats.css";

function Stats1() {
  const data = [
    {
      pokemon: "Medicham",
      usage: 78,
      teams: "70%",
      top_usage: 11,
      top: "69% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Stunfusk",
      usage: 69,
      teams: "62%",
      top_usage: 8,
      top: "50% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Noctowl",
      usage: 68,
      teams: "61",
      top_usage: 12,
      top: "75% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Lanturn",
      usage: 40,
      teams: "36%",
      top_usage: 4,
      top: "25% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Registeel",
      usage: 38,
      teams: "34%",
      top_usage: 7,
      top: "44% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Trevenant",
      usage: 34,
      teams: "31%",
      top_usage: 4,
      top: "25% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Lickitung",
      usage: 34,
      teams: "31%",
      top_usage: 3,
      top: "19% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Sableye",
      usage: 31,
      teams: "28%",
      top_usage: 2,
      top: "13% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Azumarill",
      usage: 25,
      teams: "23%",
      top_usage: 3,
      top: "19% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Altair",
      usage: 21,
      teams: "19%",
      top_usage: 1,
      top: "6% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Swampert(Shadow)",
      usage: 17,
      teams: "15%",
      top_usage: 4,
      top: "25% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Ninetales(Alolan)",
      usage: 17,
      teams: "15%",
      top_usage: 2,
      top: "13% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Umbreon",
      usage: 13,
      teams: "12%",
      top_usage: 4,
      top: "25% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Swampert",
      usage: 12,
      teams: "11%",
      top_usage: 3,
      top: "13% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "pelipper",
      usage: 12,
      teams: "11%",
      top_usage: 1,
      top: "25% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Froslass",
      usage: 11,
      teams: "10%",
      top_usage: 6,
      top: "19% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Scrafty",
      usage: 8,
      teams: "7%",
      top_usage: 1,
      top: "6% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Walrein",
      usage: 8,
      teams: "7%",
      top_usage: 1,
      top: "6% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Toxapex",
      usage: 7,
      teams: "6%",
      top_usage: 2,
      top: "13% ",
      teams1: "",
      one: "",
    },
    {
      pokemon: "Venusaur(Shadow)",
      usage: 6,
      teams: "5%",
      top_usage: 3,
      top: "19% ",
      teams1: "",
      one: "",
    },
  ];

  const colors = ["#e6f2f8", "#98cbe2"];

  return (
    <div className="stats">
      <div className="page58_div">
        <div className="page58_h2_div">
          <h2>GS PlayPokemon 2023 Data : Toronto Data</h2>
        </div>
        <div className="table_wrapper">
          <table className="page58_table" cellSpacing="0">
            <thead>
              <tr>
                <th>POKEMON</th>
                <th>USAGE</th>
                <th>% TEAMS</th>
                <th>TOP USAGE</th>
                <th>% TOP</th>
                <th>TEAMS</th>
                <th>111</th>
              </tr>
            </thead>
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
                    className="page58_rows"
                    key={key}
                  >
                    <td>{val.pokemon}</td>
                    <td>{val.usage}</td>
                    <td>{val.teams}</td>
                    <td>{val.top_usage}</td>
                    <td>{val.top}</td>
                    <td>{val.teams1}</td>
                    <td>{val.one}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stats1;
