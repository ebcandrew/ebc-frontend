import React from 'react';
import { AdminHeroSectionImage, Trophy, TeamIcon1, TeamIcon2 } from '../../components/imports/imgs/Images'
import { PagesDropdown } from './ManageTournaments';

import './ManageTournaments.css'
import { Link } from 'react-router-dom';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};


const ManageLeagues = () => {
    const HeroSection = ({ title }) => {
        return (
            <>
                <div className='ManageTournament_HeroSection'>
                    <div className='HeroSection_Left'>

                        <h1 className='Title-HeroSection'>Manage
                            <h1>{title}</h1>
                        </h1>

                        <button className='Host-btn'>Host A {title}</button>
                    </div>
                    <div className='HeroSection_Right'>
                        <img src={AdminHeroSectionImage} alt="" />
                    </div>

                </div>
            </>
        )
    }

    const CurrentLeagues = ({ tournamentName, date, location }) => {
        return (
            <>
                <div className='Current_Records'>
                    <div className='Current_Record_trophy'>
                        <img src={Trophy} alt="" />
                    </div>
                    <div className='Tournament_info'>
                        <h2>{tournamentName}</h2>
                        <div >
                            <p><i class="fa-regular fa-calendar-days"></i> {date}</p>
                            <p style={{ marginLeft: "6vh" }}><i class="fa-solid fa-location-dot"></i> {location}</p>
                        </div>
                    </div>
                    <button className='Manage-btn'>Manage</button>
                </div>
            </>
        )

    }
    const UpcomingLeagues = ({ tournamentName, date }) => {
        return (
            <>
                <div class="image-box">
                    <img src={AdminHeroSectionImage} alt="Image 1" />
                    <div class="text-bottom-left">
                        <p style={{ color: '#bc0b1e', fontWeight: "bold", margin: '0' }}>{date}</p>
                        <h5>{tournamentName}</h5>
                    </div>
                    <div class="hover-window">
                        <div class="hover-content">
                            <p>{date}</p>
                            <h5>{tournamentName}</h5>
                            <button className='Manage-hover-btn'>Manage</button>
                        </div>
                    </div>
                </div>
            </>
        )


    }
    const ConcludedLeagues = ({ teamName1, teamName2, tournamentName, date }) => {
        return (
            <>

                <div className='Concluded_Records'>
                    <div className='Concluded_tournament_info'>
                        <p className='Concluded_tournament_teams'>{teamName1} VS {teamName2}</p>
                        <h4>{tournamentName}</h4>
                        <p className='Concluded_tournament_date'>{date}</p>
                    </div>
                    <div className='Concluded_Teams'>
                        <img src={TeamIcon1} alt="" />
                        <div style={{ display: "flex", padding: '1vh', border: "1px solid red" }}><h6 style={{ color: "white", margin: "0" }}>VS</h6></div>
                        <img src={TeamIcon2} alt="" />
                        <button className='Manage-btn' style={{ padding: "4% 9% 4% 9%" }}>Manage</button>

                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <HeroSection title={"League"} />
            <div className='Manage_container'>
                <PagesDropdown />
                <div className='Current_Tournament_League'>
                    <h1>CURRENT LEAGUES</h1>
                    <CurrentLeagues tournamentName={'INDIESPORT'} date={'August 8-15'} location={'Jakarta  Auditorium'} />
                    <CurrentLeagues tournamentName={'INDIESPORT'} date={'August 8-15'} location={'Jakarta  Auditorium'} />
                    <CurrentLeagues tournamentName={'INDIESPORT'} date={'August 8-15'} location={'Jakarta  Auditorium'} />
                    <CurrentLeagues tournamentName={'INDIESPORT'} date={'August 8-15'} location={'Jakarta  Auditorium'} />

                </div>

                <div className='Upcoming_Tournament_League'>
                    <h1>UPCOMING LEAGUES</h1>
                    <div class="image-container">
                        <UpcomingLeagues tournamentName={'SINGAPORE OPEN 2020'} date={'25TH SEPTEMBER 2020'} />
                        <UpcomingLeagues tournamentName={'SINGAPORE OPEN 2020'} date={'25TH SEPTEMBER 2020'} />
                        <UpcomingLeagues tournamentName={'SINGAPORE OPEN 2020'} date={'25TH SEPTEMBER 2020'} />

                    </div>

                </div>

                <div className='Concluded_Tournament_League'>
                    <h1>CONCLUDED LEAGUES</h1>
                    <div className='See_All_Link'>
                        <div className='All_tournaments'>
                            <h2>ALL LEAGUES</h2>
                        </div>
                        <div className='See_All'>
                            <Link to="#" style={{ textDecoration: "none" }}>
                                <p>SEE ALL</p>
                            </Link>
                        </div>
                    </div>
                    <ConcludedLeagues teamName1={'KNIGHT GAMING '} teamName2={'ENGEANCE GAMING'} tournamentName={'MASTER LEAGUE - ONLINE'} date={'july 29th,2020 9:00 PM'} />
                    <ConcludedLeagues teamName1={'KNIGHT GAMING '} teamName2={'ENGEANCE GAMING'} tournamentName={'MASTER LEAGUE - ONLINE'} date={'july 29th,2020 9:00 PM'} />
                    <ConcludedLeagues teamName1={'KNIGHT GAMING '} teamName2={'ENGEANCE GAMING'} tournamentName={'MASTER LEAGUE - ONLINE'} date={'july 29th,2020 9:00 PM'} />
                    <ConcludedLeagues teamName1={'KNIGHT GAMING '} teamName2={'ENGEANCE GAMING'} tournamentName={'MASTER LEAGUE - ONLINE'} date={'july 29th,2020 9:00 PM'} />

                </div>
                <button className='scrollToTop' onClick={scrollToTop}>
                    <i class="fa-solid fa-arrow-up mx-1"></i>
                </button>
            </div>
        </div>
    )
}

export default ManageLeagues
