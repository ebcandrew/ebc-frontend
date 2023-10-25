import React from 'react'
import { AdminHeroSectionImage } from '../../components/imports/imgs/Images';
import './ManageTournaments.css'
import './AdminPanelUsers.css'
import { Link } from 'react-router-dom';
import { PagesDropdown } from './ManageTournaments';
import { HeroSection } from './AdminPanelUsers';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const AdminPanelStaff = () => {
    const EditableSection = () => {
        return (
            <>
                <div className='User_EditFields'>
                    <input type="text" name='username' /> <div className='line'></div>
                    <input type="text" name='name' /><div className='line'></div>
                    <input type="email" name='email' /><div className='line'></div>
                    <span className='Staff_checkbox'>
                        <select className='StaffRoles_Dropdown'>
                            <option value="">Select a Rank</option>
                            <option value="users">
                                <p to="#">Admin</p>
                            </option>
                            <option value="staff">
                                <p to="#">Moderator</p>
                            </option>
                            <option value="pokemon">
                                <p to="#">Staff</p>
                            </option>

                        </select>
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
                <div className='Staff'>
                    <h1>STAFF</h1>
                    <div className='Staff_Container'>
                        <div className='Staff_labels'>
                            <h5>User Name</h5>

                            <h5>First & Last Name</h5>
                            <h5 style={{ marginRight: "10%" }}>Email</h5>
                            <h5>Rank</h5>
                        </div>

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

export default AdminPanelStaff
