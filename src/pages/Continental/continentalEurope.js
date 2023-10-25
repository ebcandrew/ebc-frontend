import React from "react";
import ContinentalCup from "../../layout/ContinentalCupsLayout/ContinentalCup";

export default function ContinentalEurope() {
  const data = [
    {
      id: "1",
      title: "EUROPE CUP",
      desc: "Welcome to the Elite Battle Championship European Division, where the fiercest warriors from across the continent converge to test their mettle in a clash of skill, strategy, and determination. This premier competition welcomes fighters of all backgrounds and skill levels, making it a true battleground for both seasoned veterans and rising stars.",
      regions: [
        {
          id: "1",
          img: require("../../components/imports/imgs/files/ace-EU.png"),
        },
        {
          id: "2",
          img: require("../../components/imports/imgs/files/elite-EU.png"),
        },
        {
          id: "3",
          img: require("../../components/imports/imgs/files/challenger-EU.png"),
        },
        {
          id: "4",
          img: require("../../components/imports/imgs/files/rival-EU.png"),
        },
        {
          id: "5",
          img: require("../../components/imports/imgs/files/trainee-EU.png"),
        },
      ],
    },
  ];

  return (
    <>
      <ContinentalCup
        data={data}
        map={require("../../components/imports/imgs/files/europe_map_icon.png")}
      />
    </>
  );
}
