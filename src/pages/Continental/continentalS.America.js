import React from "react";
import ContinentalCup from "../../layout/ContinentalCupsLayout/ContinentalCup";

export default function ContinentalSAmerica() {
  const data = [
    {
      id: "1",
      title: "S.AMERICA CUP",
      desc: "Welcome to the most electrifying spectacle in the world of combat sports! The stage is set, the contenders are primed, and the adrenaline is pumping as we proudly present the Elite Battle Championship South America Division. In this thrilling competition, warriors from all walks of life and varying skill levels converge to showcase their prowess in a battle like no other.",
      regions: [
        {
          id: "1",
          img: require("../../components/imports/imgs/files/ace-SA.png"),
        },
        {
          id: "2",
          img: require("../../components/imports/imgs/files/elite-SA.png"),
        },
        {
          id: "3",
          img: require("../../components/imports/imgs/files/challenger-SA.png"),
        },
        {
          id: "4",
          img: require("../../components/imports/imgs/files/rival-SA.png"),
        },
        {
          id: "5",
          img: require("../../components/imports/imgs/files/trainee-SA.png"),
        },
      ],
    },
  ];

  return (
    <>
      <ContinentalCup
        data={data}
        map={require("../../components/imports/imgs/files/sa_map_icon.png")}
      />
    </>
  );
}
