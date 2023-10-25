import React from 'react'
import { AdminHeroSectionImage } from '../../components/imports/imgs/Images';
import './ManageTournaments.css'
import './AdminPanelUsers.css'
import { Link } from 'react-router-dom';
import { PagesDropdown } from './ManageTournaments';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

export const HeroSection = () => {
    return (
        <>
            <div className='ManageTournament_HeroSection'>
                <div className='HeroSection_Left'>

                    <h1 className='Title-HeroSection'>
                        ADMIN
                        <h1>
                            PANEL
                        </h1>
                    </h1>
                    <p className='live_demo'>See how it  works?
                        <Link to="#" style={{ color: "#E00016" }}>
                            Live Demo.
                        </Link>

                    </p>
                </div>
                <div className='HeroSection_Right'>
                    <img src={AdminHeroSectionImage} alt="" />
                </div>

            </div>
        </>
    )
}
const AdminPanelUsers = () => {

    const EditableSection = () => {
        return (
            <>
                <div className='User_EditFields'>
                    <input type="text" name='username' /> <div className='line'></div>
                    <input type="text" name='name' /><div className='line'></div>
                    <input type="email" name='email' /><div className='line'></div>
                    <span className='User_checkbox'>
                        <label for="myCheckbox1" class="custom-checkbox">
                            <input type="checkbox" id="myCheckbox1" />
                            <span class="checkmark"></span>

                        </label>
                    </span>
                </div>
            </>
        )
    }
    return (
        <>
            <HeroSection />
            <div className='Manage_container'>
                <PagesDropdown />
                <div className='Users'>
                    <h1>USERS</h1>
                    <div className='User_Container'>
                        <div className='User_labels'>
                            <h5>User Name</h5>

                            <h5>First & Last Name</h5>
                            <h5 style={{ marginRight: "5%" }}>Email</h5>
                            <h5>Subscription</h5>
                        </div>
                        <EditableSection />
                        <EditableSection />
                        <EditableSection />
                        <EditableSection />
                        <EditableSection />
                        <EditableSection />
                        <EditableSection />
                        <EditableSection />
                        <EditableSection />
                        <EditableSection />

                        <button className='Load_btn'>Load More</button>

                    </div>

                </div>
                <button className='scrollToTop' onClick={scrollToTop}>
                    <i class="fa-solid fa-arrow-up mx-1"></i>
                </button>
            </div>
        </>
    )
}

export default AdminPanelUsers
