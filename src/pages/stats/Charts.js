import React from "react";
import Barchart from "../../components/barchart/barchart";

function Charts() {
  return (
    <div className="charts">
      <div className="page59_maindiv">
        <Barchart />
        <div className="page59_p">
          <p>
            Frequency of 4 across All Teams and none in top 16: <br />
            Bastiodon(3), Golbat (3; 1Shadow), Victreebel(3;3 Shadow), Vigoroth
            (3), Ampharos(2;2 Shadow), Cofogrigus(2), Deoxys(Defence)(2),
            Dragonite(2;1Shadow), Guzzlord(2), Pidgeot(2), Steelix(2;1Shadow),
            Wigglytuff(2)
          </p>
          <p>
            Frequency of 1 across All Teams and none in top 16: <br />
            Ariados, Buzzwole, Chesnaught, Cubone, Dewgong, Drifblim, Lucario,
            Lurantis, Machamp(Shadow), Marowak(Alolan),Mew, Moltres, Munchlax,
            Nidoqueen, Oricorio, Runerigus, Shiftry(Shadow), Sirfetch'd,
            TalonFlame,Zapdos(Shadow)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charts;
