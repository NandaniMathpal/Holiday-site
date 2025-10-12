import React from 'react'
import './Inter.css'

const Inter = () => {
    return (
        <div>
            <div className="heading">
                <h2>POPULAR DESTINATION INTERNATIONAL</h2>
                <p>Mother Earth along with mankind have co-created some of the most spectacular places on this planet.
                    From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind
                    iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!</p>
            </div>

            <div className="popular-inter-content">
                
                <div className="pinter-imgPart1">
                        <img src="https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg" alt="" />
                </div>

                <div className="pinter-imgPart2">
                    <div className="img1">
                        <img src="https://jingleholidaybazar.com/images/Taj-mahal.jpg" alt="" />
                    </div>
                    <div className="img2">
                        <img src="https://jingleholidaybazar.com/images/Taj-mahal.jpg" alt="" />
                    </div>
                </div>
            </div>

             <div className="pinter-btn">
                <button> All Destination</button>
            </div>
        </div>
        )
}

export default Inter
