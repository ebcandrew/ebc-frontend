import React from "react";
import {
  Trophy,
  TeamIcon1,
  TeamIcon2,
  HeroSectionImage,
} from "../../components/imports/imgs/Images";
import "./ManageTournaments.css";
import { Link } from "react-router-dom";
import Dropdowns from "./Dropdown";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// export const PagesDropdown = () => {
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <select
//           className="Selection_Dropdown"
//           onChange={(event) => (window.location.href = event.target.value)}
//         >
//           <option value="admin">ManageTournaments</option>
//           <option value="/admin/manageleages">ManageLeagues</option>
//           <option value="/admin/users">Users</option>
//           <option value="/admin/staff">Staff</option>
//           <option value="/admin/pokemon">Pokemon</option>
//           <option value="/admin/blogs">Blog</option>
//           <option value="/admin/selecttournament">Tournament</option>
//           <option value="/admin/selectleague">League</option>
//           <option value="/admin/ecommercejersey">Ecommerce</option>
//           <option value="/admin/featuredvideo">Featured Video</option>
//           <option value="/admin/halloffame">Hall Of Fame</option>
//           <option value="/admin/ecommercersvpcode">EcommerceRSVPCode</option>
//           <option value="/admin/ecommercejersey">EcommerceJersey</option>
//         </select>
//       </div>
//     </>
//   );
// };

export const PagesDropdown = () => {
  const userItems = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/users">
          All Users
        </Link>
      ),
      key: "0",
    },
  ];

  const staffItems = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/staff">
          All Staff
        </Link>
      ),
      key: "0",
    },
  ];

  const pokemonStaff = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/pokemon">
          All Pokemons
        </Link>
      ),
      key: "0",
    },
  ];

  const blogItems = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/blogs">
          Create Blogs
        </Link>
      ),
      key: "0",
    },
  ];

  const tournamentItems = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/selecttournament">
          Host Tournaments
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/tournamentmanage">
          Manage Tournaments
        </Link>
      ),
      key: "1",
    },
  ];

  const leagueItems = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/selectleague">
          Host League
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/manageleages">
          Manage League
        </Link>
      ),
      key: "1",
    },
  ];

  const ecommerceItems = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/ecommerce">
          Ecommerce
        </Link>
      ),
      key: "4",
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/ecommercejersey">
          Create Jersey
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          style={{ textDecoration: "none" }}
          to="/admin/one-size-item-template"
        >
          One Sized Item
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link
          style={{ textDecoration: "none" }}
          to="/admin/multi-size-item-template"
        >
          Multi Sized Item
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/ecommercersvpcode">
          RSVP Code
        </Link>
      ),
      key: "3",
    },
  ];

  const featureVideoItems = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/featuredvideo">
          Manage Featured Video
        </Link>
      ),
      key: "0",
    },
  ];

  const hallofFameItems = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to="/admin/halloffame">
          Manage Hall of Fame
        </Link>
      ),
      key: "0",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        <Dropdowns title="Users" items={userItems} />
        <Dropdowns title="Staff" items={staffItems} />
        <Dropdowns title="Pokemon" items={pokemonStaff} />
        <Dropdowns title="Blog" items={blogItems} />
        <Dropdowns title="Tournament" items={tournamentItems} />
        <Dropdowns title="League" items={leagueItems} />
        <Dropdowns title="Ecommerece" items={ecommerceItems} />
        <Dropdowns title="Featured Videos" items={featureVideoItems} />
        <Dropdowns title="Hall Of Fame" items={hallofFameItems} />
      </div>
    </>
  );
};
const ManageTournaments = () => {
  const HeroSection = ({ title }) => {
    return (
      <>
        <div className="ManageTournament_HeroSection">
          <div className="HeroSection_Left">
            <h1 className="Title-HeroSection">
              Manage
              <h1>{title}</h1>
            </h1>

            <button className="Host-btn">Host A {title}</button>
          </div>
          <div className="HeroSection_Right">
            <img src={HeroSectionImage} alt="" />
          </div>
        </div>
      </>
    );
  };

  const CurrentTournaments = ({ tournamentName, date, location }) => {
    return (
      <>
        <div className="Current_Records">
          <div className="Current_Record_trophy">
            <img src={Trophy} alt="" />
          </div>
          <div className="Tournament_info">
            <h2>{tournamentName}</h2>
            <div>
              <p>
                <i class="fa-regular fa-calendar-days"></i> {date}
              </p>
              <p style={{ marginLeft: "6vh" }}>
                <i class="fa-solid fa-location-dot"></i> {location}
              </p>
            </div>
          </div>
          <button className="Manage-btn">Manage</button>
        </div>
      </>
    );
  };
  const UpcomingTournaments = ({ tournamentName, date }) => {
    return (
      <>
        <div class="image-box">
          <img src={HeroSectionImage} alt="Image 1" />
          <div class="text-bottom-left">
            <p style={{ color: "#bc0b1e", fontWeight: "bold", margin: "0" }}>
              {date}
            </p>
            <h5>{tournamentName}</h5>
          </div>
          <div class="hover-window">
            <div class="hover-content">
              <p>{date}</p>
              <h5>{tournamentName}</h5>
              <button className="Manage-hover-btn">Manage</button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const ConcludedTournaments = ({
    teamName1,
    teamName2,
    tournamentName,
    date,
  }) => {
    return (
      <>
        <div className="Concluded_Records">
          <div className="Concluded_tournament_info">
            <p className="Concluded_tournament_teams">
              {teamName1} VS {teamName2}
            </p>
            <h4>{tournamentName}</h4>
            <p className="Concluded_tournament_date">{date}</p>
          </div>
          <div className="Concluded_Teams">
            <img src={TeamIcon1} alt="" />
            <div
              style={{
                display: "flex",
                padding: "1vh",
                border: "1px solid red",
              }}
            >
              <h6 style={{ color: "white", margin: "0" }}>VS</h6>
            </div>
            <img src={TeamIcon2} alt="" />
            <button className="Manage-btn" style={{ padding: "4% 9% 4% 9%" }}>
              Manage
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <HeroSection title={"Tournament"} />
      <div className="Manage_container">
        <PagesDropdown />
        <div className="Current_Tournament_League">
          <h1>CURRENT TOURNAMENT</h1>
          <CurrentTournaments
            tournamentName={"INDIESPORT"}
            date={"August 8-15"}
            location={"Jakarta  Auditorium"}
          />
          <CurrentTournaments
            tournamentName={"INDIESPORT"}
            date={"August 8-15"}
            location={"Jakarta  Auditorium"}
          />
          <CurrentTournaments
            tournamentName={"INDIESPORT"}
            date={"August 8-15"}
            location={"Jakarta  Auditorium"}
          />
          <CurrentTournaments
            tournamentName={"INDIESPORT"}
            date={"August 8-15"}
            location={"Jakarta  Auditorium"}
          />
        </div>

        <div className="Upcoming_Tournament_League">
          <h1>UPCOMING TOURNAMENT</h1>
          <div class="image-container">
            <UpcomingTournaments
              tournamentName={"SINGAPORE OPEN 2020"}
              date={"25TH SEPTEMBER 2020"}
            />
            <UpcomingTournaments
              tournamentName={"SINGAPORE OPEN 2020"}
              date={"25TH SEPTEMBER 2020"}
            />
            <UpcomingTournaments
              tournamentName={"SINGAPORE OPEN 2020"}
              date={"25TH SEPTEMBER 2020"}
            />
          </div>
        </div>

        <div className="Concluded_Tournament_League">
          <h1>CONCLUDED TOURNAMENTS</h1>
          <div className="See_All_Link">
            <div className="All_tournaments">
              <h2>ALL TOURNAMENTS</h2>
            </div>
            <div className="See_All">
              <Link to="#" style={{ textDecoration: "none" }}>
                <p>SEE ALL</p>
              </Link>
            </div>
          </div>
          <ConcludedTournaments
            teamName1={"KNIGHT GAMING "}
            teamName2={"ENGEANCE GAMING"}
            tournamentName={"MASTER LEAGUE - ONLINE"}
            date={"july 29th,2020 9:00 PM"}
          />
          <ConcludedTournaments
            teamName1={"KNIGHT GAMING "}
            teamName2={"ENGEANCE GAMING"}
            tournamentName={"MASTER LEAGUE - ONLINE"}
            date={"july 29th,2020 9:00 PM"}
          />
          <ConcludedTournaments
            teamName1={"KNIGHT GAMING "}
            teamName2={"ENGEANCE GAMING"}
            tournamentName={"MASTER LEAGUE - ONLINE"}
            date={"july 29th,2020 9:00 PM"}
          />
          <ConcludedTournaments
            teamName1={"KNIGHT GAMING "}
            teamName2={"ENGEANCE GAMING"}
            tournamentName={"MASTER LEAGUE - ONLINE"}
            date={"july 29th,2020 9:00 PM"}
          />
        </div>
        <button className="scrollToTop" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up mx-2"></i>
        </button>
      </div>
    </>
  );
};

export default ManageTournaments;
