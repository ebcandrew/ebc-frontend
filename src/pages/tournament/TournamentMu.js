import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import {
  MapsUgcIcon,
  OndemandVideoIcon,
  ShareIcon,
} from "../../components/imports/icons/Icons";
import {
  AD,
  Rank,
  Team1,
  AdminHeroSectionImage,
  Header1,
} from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";

function TournamentMu() {
  const [outcomes, setOutcomes] = useState([]);
  const { tournamentId } = useParams();
  useEffect(() => {
    axios
      .patch(`/tournaments/${tournamentId}/outcomes`)
      .then((response) => {
        const { outcomes } = response.data;
        setOutcomes(outcomes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const fixtures = [
    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },

    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },

    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },
  ];

  const fixtures2 = [
    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },

    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },

    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      rank: Rank,
      username: "username",
      cp: "",
    },
  ];

  return (
    <div className="tournamentmu">
      <div className="tournament__header">
        <div className="tournament__text">
          <h3>
            tournament -<span>match up</span>
          </h3>

          <p>
            We want to ensure that everyone has the opportunity to improve and
            learn from their gameplay. To make this possible, please remember to
            record your matches both in-game and on the platform you're using
            for our events.
          </p>

          <div className="tournament__text__footer">
            <div className="torunament_content">
              <p>tournament name :</p>

              <p>lorem ipsum</p>
            </div>

            <div className="torunament_content">
              <p>Opponent :</p>

              <p>lorem ipsum</p>
            </div>
          </div>
        </div>

        <div className="tournament__image">
          <img src={AdminHeroSectionImage} style={{ width: "100%" }} alt="" />
        </div>
      </div>

      <div className="tournamentmu__main">
        <h3>
          <Heading text={"what to do now"} />
        </h3>

        <section>
          <div>
            <Curved text={"1"} />
          </div>

          <div className="SectionWrapper">
            <p>
              Add <span>amaced24</span> to your <span>Friends list</span>
            </p>

            <div className="share">
              <p>12345678134</p>

              <p>
                <ShareIcon />
              </p>
            </div>

            <div className="add">
              <p>
                Enter your own <span>Friend code</span> to share with his
                opponents
              </p>
              <p>
                <Button text={"add my friend code"} />
              </p>{" "}
            </div>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"2"} />
          </div>

          <div className="SectionWrapperTwo">
            <span>
              If you are not yet <span> Good Friends </span>, send a gift to
              <span> amaced24</span> or open the gift they send you.
            </span>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"3"} />
          </div>

          <div className="SectionWrapperTwo">
            <span>
              Challenge each other to Battle via the button on Friend screen.
            </span>
          </div>
        </section>

        <section>
          <div className="SectionWrapperTwo">
            <Curved text={"4"} />
          </div>

          <div className="SectionWrapperTwo">
            <span>
              Select the <span> Great League </span> for battle.
            </span>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"5"} />
          </div>

          <div className="SectionWrapperTwo">
            <span>Select 3 Pokemon from your registered team of 6.</span>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"6"} />
          </div>

          <div className="SectionWrapperTwo">
            <span>Battle 3 times!</span>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"7"} />
          </div>

          <div className="SectionWrapperTwo">
            <span>Report your outcome below! (FAQ & rules below)</span>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"8"} />
          </div>

          <div className="SectionWrapperTwo">
            <span>
              After battle, congratulate your opponent for a fight well fought!
            </span>
          </div>
        </section>

        <div className="tournamentmu__main__accept">
          <Button text={"accept"} />
        </div>
      </div>

      <Heading text={"REPORT YOUR 3 BATTLES OUTCOME"} />
      <div className="tournamentmu__battles">
        <p>
          After you complete three battles, report the outcome of each battle.
          Question? Scroll down to the FAQ & rules!
        </p>

        <div className="battle__table">
          <section>#1</section>

          <section>
            <div className="first">i won battle #1</div>

            <div className="second">AMaced24 won battle #1</div>
          </section>
        </div>

        <div className="battle__table">
          <section>#2</section>

          <section>
            <div className="first">i won battle #2</div>

            <div className="second">AMaced24 won battle #2</div>
          </section>
        </div>

        <div className="battle__table">
          <section>#3</section>

          <section>
            <div className="first">i won battle #3</div>

            <div className="second">i lost battle #3</div>
          </section>
        </div>

        <div className="battle__table__btn">
          <button>Report All 3 Battles To Procees</button>
        </div>
      </div>

      <div className="username">
        <Curved text={"player a"} />
      </div>
      <div className="tournament__fixtures">
        {fixtures.map((fix, index) => {
          return (
            <div className="tournament__fixtures__card" key={index}>
              <div className="tournament__fixtures__card__logo">
                <img src={fix.clubImg} alt="" />
              </div>

              <div className="tournament__fixtures__card__other">
                <p className="clubname">
                  {fix.clubName}

                  <img src={fix.rank} alt="" />
                </p>

                <p className="username">{fix.username}</p>

                <p className="cp">cp:{fix.cp}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="username">
        <Curved text={"player b"} />
      </div>
      <div className="tournament__fixtures">
        {fixtures2.map((fix, index) => {
          return (
            <div className="tournament__fixtures__card" key={index}>
              <div className="tournament__fixtures__card__logo">
                <img src={fix.clubImg} alt="" />
              </div>

              <div className="tournament__fixtures__card__other">
                <p className="clubname">
                  {fix.clubName}

                  <img src={fix.rank} alt="" />
                </p>

                <p className="username">{fix.username}</p>

                <p className="cp">cp:{fix.cp}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="tournamentmu__video__upload">
        <OndemandVideoIcon />
        <Button text={"upload video for review"} />
      </div>

      <div className="msg__cta">
        <MapsUgcIcon />
      </div>
    </div>
  );
}

export default TournamentMu;
