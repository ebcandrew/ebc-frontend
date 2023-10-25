import React from "react";
import ContinentalCup from "../../layout/ContinentalCupsLayout/ContinentalCup";

export default function ContinentalNAmerica() {
  const data = [
    {
      id: "1",
      title: "N.AMERICA CUP",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      regions: [
        {
          id: "1",
          img: require("../../components/imports/imgs/files/ace-na.png"),
        },
        {
          id: "2",
          img: require("../../components/imports/imgs/files/elite-na.png"),
        },
        {
          id: "3",
          img: require("../../components/imports/imgs/files/challenger-na.png"),
        },
        {
          id: "4",
          img: require("../../components/imports/imgs/files/rival-na.png"),
        },
        {
          id: "5",
          img: require("../../components/imports/imgs/files/trainee-na.png"),
        },
      ],
    },
  ];

  return (
    <>
      <ContinentalCup
        data={data}
        map={require("../../components/imports/imgs/files/na_map.png")}
      />
    </>
  );
}
