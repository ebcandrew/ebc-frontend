import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const barchart = () => {
  const state = {
    labels: [
      "raichu(alolan)",
      "toxicroak",
      "stunfisk",
      "mantine",
      "gliscor",
      "ferrothorn",
      "drapion",
      "ninetales",
      "airorus",
      "tapufini",
      "lapras",
      "diggersby",
      "jumpluff",
      "cresselia",
      "skarmory",
      "obstagoon",
      "abomasnow",
      "toxapex",
      "scrafty",
      "venesaur",
      "froslass",
      "pelipper",
      "umbreon",
      "walrein",
      "ninetales(alolan)",
      "altaria",
      "azumarill",
      "swampert",
      "sableye",
      "lickitung",
      "trevenant",
      "registeel",
      "lanturn",
      "noctowl",
      "stunfisk(galarian)",
      "medicham",
    ],
    datasets: [
      {
        label: "usage % (top 16)",
        backgroundColor: "rgb(185, 148, 154)",
        borderWidth: "2",
        barPercentage: "1",
        barThickness: "10",
        data: [
          5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 10, 0, 0, 0, 0, 10, 5, 15, 25, 5,
          20, 12, 12, 5, 15, 30, 15, 20, 25, 15, 40, 35, 38, 40,
        ],
      },
      {
        label: "usage % (All)",
        backgroundColor: "rgb(104, 221, 104)",
        borderWidth: "2",
        barPercentage: "1",
        barThickness: "10",

        data: [
          1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 7, 7, 8, 9, 10, 11,
          12, 13, 15, 17, 18, 19, 20, 20, 22, 23, 24, 30, 31, 35,
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    aspectRatio: 0.9,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        text: "Usage (%)",
        display: true,
        fontSize: 30,
      },
    },
  };
  return (
    <>
      <div style={{ position: "relative", margin: "auto", width: "95vw"}}>
        <Bar data={state} options={options} />
      </div>
    </>
  );
};

export default barchart;
