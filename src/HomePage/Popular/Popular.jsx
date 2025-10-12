import React from 'react';
import './Popular.css'

const Popular = () => {
    return (
        <>
        <div className="heading">
            <h2>POPULAR DESTINATION IN INDIA</h2>
            <p>India is a vibrant land of startling contrasts where both the traditional and modern worlds meet.
The world's seventh largest nation by area and the second largest in terms of population, India boasts a rich
heritage that's the result of centuries of different cultures and religions leaving their mark</p>
        </div>

        <div className="popular-india-content">
            <div className="pindia-imgPart1">
                <img src="https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg" alt="" />
            </div>
            <div className="pindia-imgPart2">
                <div className="img1">
                    <img src="https://jingleholidaybazar.com/images/Taj-mahal.jpg" alt="" />
                </div>
                <div className="img2">
                    <img src="https://jingleholidaybazar.com/images/Gangtok.jpg" alt="" />
                </div>
            </div>
        </div>

    </>
    );
};

export default Popular;
