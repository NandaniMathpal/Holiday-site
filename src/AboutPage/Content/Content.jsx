import React from 'react'
import './Content.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Content = () => {
    return (
        <div>
            <div className="aboutuspage-content">
                <h2>Jingle Holiday Bazar Pvt Ltd</h2>
                <p><span>Jingle Holiday Bazar Pvt Ltd</span> is pleased to announce the opening of their first office in Ghaziabad. I here by in conjunction with the Jingle Holiday Bazar Pvt Ltd takes great pleasure in announcing the formation of our company to serve the needs of travellers in all aspects of their requirement.<b>I have the pleasure of announcing the formation of Jingle Holiday Bazar Pvt Ltd, Ghaziabad specializing in Hotel Packages, Pilgrimage Packages,Honeymoon Packages, Corporate Tours, Airline / Train Ticket, Transportation etc.</b> Pleased to be our client and support us to promote our new venture Jingle Holiday Bazar Pvt Ltd & in return we will give you the memorable services that you will never forget.</p>

                <div className="aboutus-list">
                    <ul className='list1'>
                        <li><i class="ri-checkbox-line"></i>Lorem, ipsum dolor.</li>
                        <li><i class="ri-checkbox-line"></i>Lorem, ipsum dolor.</li>
                        <li><i class="ri-checkbox-line"></i>Lorem, ipsum dolor.</li>
                    </ul>

                    <ul className='list2'>
                        <li><i class="ri-checkbox-line"></i>Lorem, ipsum dolor.</li>
                        <li><i class="ri-checkbox-line"></i>Lorem, ipsum dolor.</li>
                        <li><i class="ri-checkbox-line"></i>Lorem, ipsum dolor.</li>
                    </ul>
                </div>
            </div>

            <div className="aboutus-client">
                <h2>Our Client Review</h2>
                <p>Being a product of the renowned Holidays by Jingle Holiday Bazar, which is an ``ISO`` certified travel company that has the record of being the leading travel & tours company in the B2B sector, Travkart is a name that breeds trust. A 24*7 emergency and crisis support system and complete transparency regarding pricing, policy and procedures make Jingle Holiday Bazar a trusted name for safe & easy travel around the world</p>
            </div>
        </div>
    )
}

export default Content
