import React from "react";
import Contact from "../contact/Contact";
import FeaturedEvents from "../featured events/FeaturedEvents";
import Featured from "../featured/Featured";
import Header from "../head banner/Header";
import QA from "../QA/QA";
import TopPlayers from "../top players/TopPlayers";
import Upcoming from "../upcoming/Upcoming";

function Home() {
  return (
    <>
      <Header />
      <Featured />
      <Upcoming />
      <FeaturedEvents />
      <TopPlayers />
      <QA />
      <Contact />
    </>
  );
}

export default Home;
