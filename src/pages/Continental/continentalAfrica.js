import React from "react";
import ContinentalCup from "../../layout/ContinentalCupsLayout/ContinentalCup";

export default function ContinentalAfrica() {
  const data = [
    {
      id: "1",
      title: "AFRICA CUP",
      desc: "Welcome to the pinnacle of combat sports on the African continent, where the fiercest warriors from across the region converge to showcase their skills and determination. Welcome to the Elite Battle Championship Africa Division!",
      regions: [
        {
          id: "1",
          img: require("../../components/imports/imgs/files/ace-AF.png"),
        },
        {
          id: "2",
          img: require("../../components/imports/imgs/files/elite-AF.png"),
        },
        {
          id: "3",
          img: require("../../components/imports/imgs/files/challenger-AF.png"),
        },
        {
          id: "4",
          img: require("../../components/imports/imgs/files/rival-AF.png"),
        },
        {
          id: "5",
          img: require("../../components/imports/imgs/files/trainee-AF.png"),
        },
      ],
    },
  ];

  return (
    <>
      <ContinentalCup
        data={data}
        map={require("../../components/imports/imgs/files/africa_map_icon.png")}
      />
    </>
  );
}
