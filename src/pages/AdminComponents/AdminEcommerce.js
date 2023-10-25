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

const AdminEcommerce = () => {
    const EditableSection = () => {
        return (
            <>
                <div className='User_EditFields'>
                    <input type="text" name='product' /> <div className='line'></div>
                    <input type="text" name='price' /><div className='line'></div>
                    <input type="text" name='inventory' /><div className='line'></div>
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
                    <h1>ECOMMERCE</h1>
                    <div className='User_Container'>
                        <div className='User_labels'>
                            <h5>Product</h5>

                            <h5>Price</h5>
                            <h5 style={{ marginRight: "5%" }}>Inventory</h5>
                            <h5>Active</h5>
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

export default AdminEcommerce
