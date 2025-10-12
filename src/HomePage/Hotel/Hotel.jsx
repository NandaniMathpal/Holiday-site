import React from 'react'
import './Hotel.css'

const Hotel = () => {
  return (
    <div>
        <div className="heading">
            <h2>POPULAR HOTELS</h2>
            <p>At Jingle Holiday Bazar Brovide Best Hotel facilty National And International</p>
        </div>

        <div className="about-hotels">

            <div className="hotel-div1">

                <div className="div1first">
                    <img src="https://jingleholidaybazar.com/images/Taj-Aravali-Resort-Spa.jpg" alt="" />
                    <div className="hotel-text">
                        <h3>Taj Aravali Resort & Spa</h3>
                        <p>Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at ₹ 12999+ per night</p>
                    </div>
                </div>

                <div className="div1second">
                    <img src="https://jingleholidaybazar.com/images/172808300.jpg" alt="" />
                    <div className="hotel-text">
                        <h3>Taj Aravali Resort & Spa</h3>
                        <p>Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking, a shared lounge and a garden.₹ 1,440+ per night</p>
                    </div>
                </div>
            </div>

            <div className="hotel-div2">

                <div className="hotel-text">
                    <img src="https://jingleholidaybazar.com/images/5.jpg" alt="" />
                    <h3>Hideout Premiere</h3>
                    <p>Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to enjoy Goa in all her glory. Whether it’s the beaches ₹ 4499+</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hotel
