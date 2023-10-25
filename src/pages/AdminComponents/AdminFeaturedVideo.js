import React from 'react'
import { AdminHeroSectionImage } from '../../components/imports/imgs/Images'
import './ManageTournaments.css'
import './AdminPanelUsers.css'
import './AdminBlog.css'
import { Link } from 'react-router-dom';
import { PagesDropdown } from './ManageTournaments';
import { HeroSection } from './AdminPanelUsers';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const AdminFeaturedVideo = () => {
    return (
        <>
            <HeroSection />
            <div className='Manage_container'>
                <PagesDropdown />
                <div className='Blog_container'>
                    <h1>FEATURED VIDEO</h1>
                    <div className='BlogItem_Container'>

                        <div style={{ display: 'flex', flexDirection: "row", marginTop: "7vh" }}>
                            <div className='FeaturedVideo_labels'>
                                <h2>Event</h2>
                                <h2>Battle Page</h2>
                                <h2>Player1</h2>
                                <h2>Player2</h2>
                                <h2>Media URL</h2>

                            </div>
                            <div className="FeaturedVideo_inputs">
                                <input type="text" placeholder='Type Your Event Name' />
                                <input type="text" placeholder='Type Your Battle Page' />
                                <input type="text" placeholder='Player1' />
                                <input type="text" placeholder='PLayer2' />
                                <input type="text" placeholder='Media URL' />

                            </div>
                        </div>


                        <button className='CreateLeagueCode_btn'>Create League Code</button>

                    </div>

                </div>

                <button className='scrollToTop' onClick={scrollToTop}>
                    <i class="fa-solid fa-arrow-up mx-1"></i>
                </button>
            </div>
        </>
    )
}

export default AdminFeaturedVideo
