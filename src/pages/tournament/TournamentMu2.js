import React from "react";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import {
  MapsUgcIcon,
  OndemandVideoIcon,
  ShareIcon,
} from "../../components/imports/icons/Icons";
import { AD, Rank, Team1, Tourna } from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";

function TournamentMu2() {
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
            Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
            sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
          </p>

          <div className="tournament__text__footer">
            <div className="content">
              <p>tournament name :</p>

              <p>lorem ipsum</p>
            </div>

            <div className="content">
              <p>Opponent :</p>

              <p>lorem ipsum</p>
            </div>
          </div>
        </div>

        <div className="tournament__image">
          <img src={Tourna} alt="" />
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

          <div>
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

          <div>
            <p>
              If you are not yet <span> Good Friends </span>, send a gift to
              <span> amaced24</span> or open the gift they send you.
            </p>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"3"} />
          </div>

          <div>
            <p>
              Challenge each other to Battle via the button on Friend screen.
            </p>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"4"} />
          </div>

          <div>
            <p>
              Select the <span> Great League </span> for battle.
            </p>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"5"} />
          </div>

          <div>
            <p>Select 3 Pokemon from your registered team of 6.</p>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"6"} />
          </div>

          <div>
            <p>Battle 3 times!</p>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"7"} />
          </div>

          <div>
            <p>Report your outcome below! (FAQ & rules below)</p>
          </div>
        </section>

        <section>
          <div>
            <Curved text={"8"} />
          </div>

          <div>
            <p>
              After battle, congratulate your opponent for a fight well fought!
            </p>
          </div>
        </section>

        <div className="tournamentmu__main__accept">
          <Button text={"accept"} />
        </div>
      </div>

      <Heading text={"REPORT YOUR 5 BATTLES OUTCOME"} />
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

        <div className="battle__table">
          <section>#4</section>

          <section>
            <div className="first">i won battle #4</div>

            <div className="second">AMaced24 won battle #4</div>
          </section>
        </div>

        <div className="battle__table">
          <section>#5</section>

          <section>
            <div className="first">i won battle #5</div>

            <div className="second">i lost battle #5</div>
          </section>
        </div>

        <div className="battle__table__btn">
          <Button text={"report all 5 battles to proceed"} />
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

export default TournamentMu2;
