import React from 'react'
import { AdminHeroSectionImage } from '../../components/imports/imgs/Images'
import './ManageTournaments.css'
import './AdminPanelUsers.css'
import './AdminBlog.css'
import './AdminHostTournament.css'
import { Link } from 'react-router-dom';
import { PagesDropdown } from './ManageTournaments';
import { HeroSection } from './AdminPanelUsers';
import { HostComponent } from './AdminHostTournament';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const AdminHostLeague = () => {

    return (
        <>
            <HeroSection />
            <div className='Manage_container'>
                <PagesDropdown />
                <HostComponent title={'League'} />

                <button className='scrollToTop' onClick={scrollToTop}>
                    <i class="fa-solid fa-arrow-up mx-1"></i>
                </button>
            </div>
        </>
    )
}

export default AdminHostLeague
