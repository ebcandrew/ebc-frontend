import React from "react";
import ContinentalCup from "../../layout/ContinentalCupsLayout/ContinentalCup";
import img1 from "../../components/imports/imgs/files/elite-APAC.png";

export default function ContinentalApac() {
  const data = [
    {
      id: "1",
      title: "APAC CUP",
      desc: "Welcome to the most prestigious arena of combat sports in the Asia Pacific region! Prepare to witness the ultimate test of skill, strength, and strategy as fighters from across the continent converge in a battle like no other. Welcome to the Elite Battle Championship Asia Pacific Division! ",
      regions: [
        {
          id: "1",
          img: require("../../components/imports/imgs/files/ace-APAC.png"),
        },
        {
          id: "2",
          img: require("../../components/imports/imgs/files/elite-APAC.png"),
        },
        {
          id: "3",
          img: require("../../components/imports/imgs/files/challenger-APAC.png"),
        },
        {
          id: "4",
          img: require("../../components/imports/imgs/files/rival-APAC.png"),
        },
        {
          id: "5",
          img: require("../../components/imports/imgs/files/trainee-APAC.png"),
        },
      ],
    },
  ];

  return (
    <>
      <ContinentalCup
        data={data}
        map={require("../../components/imports/imgs/files/asap_map_icon.png")}
      />
    </>
  );
}
