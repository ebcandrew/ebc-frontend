import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Region from "./pages/auth/register/Region";
import Skills from "./pages/auth/register/Skills";
import Fee from "./pages/auth/register/Fee";
import Leagues from "./pages/leagues/Leagues";
import Tournament from "./pages/tournament/Tournament";
import TournamentPs from "./pages/tournament/TournamentPs";
import TournamentBt from "./pages/tournament/TournamentBt";
import TournamentTable from "./pages/tournament/TournamentTable";
import TournamentMu from "./pages/tournament/TournamentMu";
import TournamentMu2 from "./pages/tournament/TournamentMu2";
import LeagueTable from "./pages/leagues/LeagueTable";
import Gameselect from "./pages/game select/Gameselect";
import Rsvp from "./pages/tournament/rsvp/Rsvp";
import RsvpComp from "./pages/tournament/rsvp/RsvpComp";
import Playermatch from "./pages/player match/Playermatch";
import EventMap from "./pages/event map/EventMap";
import Esporttheme from "./pages/esport theme/Esporttheme";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Halloffame from "./pages/hall/Halloffame";
import Profile from "./pages/profile/Profile";
import Regional from "./pages/leaderboard/Regional";
import Profile2 from "./pages/profile/Profile2";
import Shop from "./pages/shop/Shop";
import Teammanager from "./pages/team/Teammanager";
import Rules from "./pages/rules/Rules";
import Blog from "./pages/blogs/Blog";
import Content from "./pages/blog single/Content";
import Tournamentmanage from "./pages/tournament/manage/Tournamentmanage";
import Tournamenthost from "./pages/tournament/Tournamenthost";
import Stats1 from "./pages/stats/Stats1";
import Stat2 from "./pages/stats/Stat2";
import Stats3 from "./pages/stats/Stats3";
import Charts from "./pages/stats/Charts";
import Continental from "./pages/leaderboard/Continental";
import AllTournaments from "./pages/tournament/AllTournaments";
import AddBlog from "./pages/blogs/AddBlog";
import { AlertError, AlertSuccess } from "./components/Alerts/Alert";
import CreateLeague from "./pages/leagues/CreateLeague";
import CreateTeam from "./pages/create team/CreateTeam";
import EditBlog from "./pages/blogs/EditBlog";
import AddProduct from "./pages/shop/AddProduct";
import EditProducts from "./pages/shop/EditProducts";
import Checkout from "./pages/checkout/Checkout";
import Any from "./pages/profile/Any";
import AdminReg from "./pages/auth/admin/AdminReg";
import AdminLogin from "./pages/auth/admin/AdminLogIn";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import DraftBt from "./pages/draft/DraftBt";
import Search from "./pages/search/Search";
import { regionalData } from "./components/imports/data/regionalData";
import { tournamentsData } from "./components/imports/data/tournamentData";
import AllUsers from "./pages/users/AllUsers";
import EditTournament from "./pages/tournament/edit/EditTournament";
import AdminDashboard from "./pages/AdminBoard/Dashboard";
import EBCTournaments from "./pages/tournament/EBCTournaments";
import LeagueByRegion from "./pages/LeagueByRegion";

import ManageTournaments from "./pages/AdminComponents/ManageTournaments";
import AdminBlog from "./pages/AdminComponents/AdminBlog";
import AdminPanelUsers from "./pages/AdminComponents/AdminPanelUsers";
import AdminEcommerce from "./pages/AdminComponents/AdminEcommerce";
import EcommerceRSVPCode from "./pages/AdminComponents/EcommerceRSVPCode";
import EcommerceJersey from "./pages/AdminComponents/EcommerceJersey";
import AdminFeaturedVideo from "./pages/AdminComponents/AdminFeaturedVideo";
import AdminHallOfFame from "./pages/AdminComponents/AdminHallOfFame";
import AdminHostLeague from "./pages/AdminComponents/AdminHostLeague";
import AdminHostTournament from "./pages/AdminComponents/AdminHostTournament";
import AdminPanelPokemon from "./pages/AdminComponents/AdminPanelPokemon";
import AdminPanelStaff from "./pages/AdminComponents/AdminPanelStaff";
import ManageLeagues from "./pages/AdminComponents/ManageLeagues";

import axiosAuth from "./axiosAuth";
import axios from "axios";
import Cookies from "universal-cookie";
import TournamentLayout from "./layout/TournamentLayout/TournamentLayout";
import TournamnetMatchUp from "./pages/tournament/TournamnetMatchUp";
import ContinentalApac from "./pages/Continental/continentalApac";
import ContinentalNAmerica from "./pages/Continental/continentalN.America";
import ContinentalSAmerica from "./pages/Continental/continentalS.America";
import ContinentalAfrica from "./pages/Continental/continentalAfrica";
import ContinentalEurope from "./pages/Continental/continentalEurope";
import AdminJerseyTemplate from "./layout/AdminJerseyTemplate/AdminJerseyTemplate";
import SingleSizedItem from "./pages/admin/SingleSizeditem";
import MulltiSizedItem from "./pages/admin/MultieSizedItem";
import MultiSizedItem from "./pages/admin/MultieSizedItem";

function App() {
  const [users, setUsers] = useState([]);

  const { user } = useContext(AuthContext);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    try {
      function getCookie(name) {
        // Split cookie string and get all individual name=value pairs in an array
        var cookieArr = document.cookie.split(";");

        // Loop through the array elements
        for (var i = 0; i < cookieArr.length; i++) {
          var cookiePair = cookieArr[i].split("=");

          /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
          if (name == cookiePair[0].trim()) {
            setUsers(decodeURIComponent(cookiePair[1]));

            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
          }
        }

        // Return null if not found
        return null;
      }
      const testing = () => {
        const user = localStorage.getItem("user");
        localStorage.setItem("users", user);
      };

      getCookie("user");
      testing();

      const newUser = getCookie("user");

      localStorage.setItem("users", newUser || null);
      localStorage.setItem("user", newUser || null);

      console.log(newUser);

      console.log(JSON.parse(getCookie("user")));

      // const parsedUser = JSON.parse(users);
      // console.log(parsedUser);

      // console.log(users);

      console.log(user);

      // localStorage.getItem(JSON.parse(user));

      // console.log(user.stats);

      const mainUserData = JSON.parse(localStorage.getItem("users"));
      // console.log(mainUserData);
    } catch (error) {
      // setError(true);
      // error && setErrorMessage(error.response.data?.error._message);
      console.log(error);
    }
  }, [user, users]);

  // useEffect(() => {
  //   if (getCookie(user)) {

  //    const newUser = JSON.parse(getCookie("user"))

  //     localStorage.setItem("users", newUser || null);
  //     localStorage.setItem("user", newUser || null);

  //     console.log(user);
  //   }
  // });

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  console.log(user?.role);

  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    try {
      const checkRole = () => {
        if (user?.role === "admin") {
          setAdmin(true);
        }
      };

      checkRole();
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (
    <div className="App">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <Nav />

      <Routes>
        //New Page Route
        <Route path="/tournament-match-up" element={<TournamnetMatchUp />} />
        <Route path="/apac-cup" element={<ContinentalApac />} />
        <Route path="/namerica-cup" element={<ContinentalNAmerica />} />
        <Route path="/samerica-cup" element={<ContinentalSAmerica />} />
        <Route path="/africa-cup" element={<ContinentalAfrica />} />
        <Route path="/europe-cup" element={<ContinentalEurope />} />
        <Route
          path="/admin/one-size-item-template"
          element={<SingleSizedItem />}
        />
        <Route
          path="/admin/multi-size-item-template"
          element={<MultiSizedItem />}
        />
        ///
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/tournamenttable" element={<TournamentTable />} />
        <Route path="/tournamentps" element={<TournamentPs />} />
        <Route path="/tournamentbt/:id" element={<TournamentBt />} />
        <Route path="/tournamentmu" element={<TournamentMu />} />
        <Route path="/tournamentmu2" element={<TournamentMu2 />} />
        <Route path="/leaguestable" element={<LeagueTable />} />
        <Route path="/gameselect" element={<Gameselect />} />
        <Route path="/rsvp/:id" element={<Rsvp />} />
        <Route path="/rsvpcomp/:id" element={<RsvpComp />} />
        <Route path="/playermatch/:id" element={<Playermatch />} />
        <Route path="/eventmap" element={<EventMap />} />
        <Route path="/esporttheme" element={<Esporttheme />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/halloffame" element={<Halloffame />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile2" element={<Profile2 />} />
        <Route path="/view-user/:id" element={<Any />} />
        <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/teammanager" element={<Teammanager />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<Content />} />
        <Route path="/tournamentmanage" element={<Tournamentmanage />} />
        <Route path="/tournamenthost" element={<Tournamenthost />} />
        <Route path="/alltournaments" element={<AllTournaments />} />
        <Route
          path="/addblog"
          element={
            // admin &&
            <AddBlog />
          }
        />
        <Route
          path="/editblog/:id"
          element={
            // admin &&
            <EditBlog />
          }
        />
        <Route
          path="/editproducts/:id"
          element={
            // admin &&

            <EditProducts />
          }
        />
        <Route
          path="/edit-tournament/:id"
          element={
            // admin &&
            <EditTournament />
          }
        />
        <Route path="/draftbt" element={<DraftBt />} />
        <Route path="/products/:id" element={<Checkout />} />
        <Route path="/addproducts" element={admin && <AddProduct />} />
        <Route path="/createleague" element={<CreateLeague />} />
        <Route path="/regional" element={<Regional />} />
        <Route path="/continental" element={<Continental />} />
        <Route path="/adminboard" element={<AdminDashboard />} />
        <Route path="/stats1" element={<Stats1 />} />
        <Route path="/stats2" element={<Stat2 />} />
        <Route path="/stats3" element={<Stats3 />} />
        <Route path="/charts" element={<Charts />} />
        {/* <Route path="/admin/register" element={<AdminReg />} /> */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ManageTournaments />} />
        <Route path="/admin/blogs" element={<AdminBlog />} />
        <Route path="/admin/users" element={<AdminPanelUsers />} />
        <Route path="/admin/ecommerce" element={<AdminEcommerce />} />
        <Route
          path="/admin/ecommercersvpcode"
          element={<EcommerceRSVPCode />}
        />
        <Route path="/admin/ecommercejersey" element={<EcommerceJersey />} />
        <Route path="/admin/featuredvideo" element={<AdminFeaturedVideo />} />
        <Route path="/admin/halloffame" element={<AdminHallOfFame />} />
        <Route path="/admin/selectleague" element={<AdminHostLeague />} />
        <Route
          path="/admin/selecttournament"
          element={<AdminHostTournament />}
        />
        <Route path="/admin/pokemon" element={<AdminPanelPokemon />} />
        <Route path="/admin/staff" element={<AdminPanelStaff />} />
        <Route path="/admin/manageleages" element={<ManageLeagues />} />
        <Route path="/users/all" element={<AllUsers />} />
        <Route path="/search/:query" element={<Search />} />
        {/* registration abstract */}
        <Route path="/region" element={<Region />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/fee" element={<Fee />} />
        <Route exact path={"/ebc-tournaments"} element={<EBCTournaments />} />
        <Route exact path="/league" element={<LeagueByRegion />} />
        <Route exact path="/*" element={<h1>404</h1>} />
        {regionalData.regions.map((region) => {
          return (
            <Route
              exact
              path={region.link_to}
              element={
                <LeagueByRegion
                  regionalData={region.leagues}
                  mainIcon={region.icon}
                  name={region.name + " LEAGUES"}
                />
              }
            />
          );
        })}
        {tournamentsData.tournaments.map((region) => {
          return (
            <Route
              exact
              path={region.link_to}
              element={
                <LeagueByRegion
                  regionalData={region.leagues}
                  mainIcon={region.icon}
                  name={region.name}
                />
              }
            />
          );
        })}
      </Routes>

      {/* <AlertError /> */}

      <Footer />
    </div>
  );
}

export default App;
