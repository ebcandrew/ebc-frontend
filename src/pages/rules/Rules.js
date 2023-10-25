import React from "react";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import { Tourna } from "../../components/imports/imgs/Images";
import "./Rules.css";

function Rules() {
  return (
    <div className="rules tournamentmu">
      <div className="tournament__header">
        <div className="tournament__text">
          <h3>
            our <span>rules</span>
          </h3>

          <p>
            Welcome back, seasoned players! We know you're eager to dive back
            into the gaming action, and we've made it easier than ever to get
            started. Say goodbye to the hassle of remembering usernames and
            passwords, because now you can effortlessly log in using your
            favorite social media accounts
          </p>
        </div>

        <div className="tournament__image">
          <img src={Tourna} style={{ width: "100%" }} alt="" />
        </div>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={1} />
        </div>

        <div className="other__items">
          <h3>rule 1 name</h3>
          <p>
            No Rule Changes: No modifications, additions, or subtractions to
            these standardized rules may be enacted or enforced by Tournament
            Officials in Ranked Arena tournaments or the tournament will no
            longer be accredited and contribute to player rank.
          </p>
        </div>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={2} />
        </div>

        <div className="other__items">
          <h3>rule 2 name</h3>

          <p>
            Team Selection: You may only use the 6 individual Pokémon registered
            when entering the tournament. Altering the Battle Team in any way
            after the tournament has begun is forbidden (see 1.1 Tournament
            Types).
          </p>
        </div>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={3} />
        </div>

        <div className="other__items">
          <h3>rule 3 name</h3>

          <p>
            Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
            sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
            Quisque dapibus blandit metus. Nulla rutrum sem turpis, at pretium
            quam porttitor in. Integer sodales at enim et blandit. Aliquam
            dignissim vestibulum hendrerit. Quisque dapibus blandit metus.
          </p>
        </div>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={4} />
        </div>

        <div className="other__items">
          <h3>rule 4 name</h3>

          <p>Great League: All battles must be fought in Great League.</p>
        </div>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={5} />
        </div>

        <div className="other__items">
          <h3>rule 5 name</h3>

          <p>
            Three Battles: Opponents will battle three times to determine a
            winner. The winner may only be determined through the normal
            progress of the game in play, and in the case of disputes, the
            in-game Journal and/or video evidence will be used. Opponents may
            not collude to report outcomes not achieved in battle. Competitors
            may, however, concede the match or any remaining battles at any
            point.
          </p>
        </div>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={6} />
        </div>

        <div className="other__items">
          <h3>rule 6 name</h3>

          <p>
            Ties: If a battle ends in a draw (i.e. both journal entries show a
            tie, or both show a loss), that battle is discarded and an entirely
            new battle should be played. Battles that time-out via the Pokémon
            GOTM timer do not constitute a draw, and the winner is determined by
            the Journal entries of the Competitors.
          </p>
        </div>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={7} />
        </div>

        <div className="other__items">
          <h3>rule 7 name</h3>

          <p>
            Disputes: If opponents do not agree on a match outcome, journal
            entries and any available video evidence will be reviewed by a staff
            member to determine the match outcome.
          </p>
        </div>
      </div>

      <div className="rules__load__more">
        <Button text={"load more"} />
      </div>

      <div className="register__fee__footer">
        <h3>Downloads:</h3>

        <Button text={"fines"} />

        <Button text={"waivers"} />

        <Button text={"download rules pdf"} />
      </div>
    </div>
  );
}

export default Rules;
