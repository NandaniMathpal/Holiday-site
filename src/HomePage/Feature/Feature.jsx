import React from 'react'
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <div className="feature-whole">
            <div className="heading">
                <h2>FEATURED TOURS IN INDIA</h2>
                <p>India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world's seventh
                    largest tourist nation by area and the second largest in terms of population</p>
            </div>

            <div className="feature-div1">
                <div className="feature-blog1">
                    <img src="https://jingleholidaybazar.com/images/Leh03.jpg" alt="" />

                <div className="feature-blog2">
                    <a href='#' className='head'>Week At Thiksey Monastery</a>
                    <p>This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.</p>
                </div>
                
                <a href='#' className='feature-link'>Whatsapp Now for More Details</a>
            </div>

                <div className="feature-div2">

                    <div className="divimg">
                        <img src="https://jingleholidaybazar.com/images/Solang-Valley.jpg" alt="" />
                        <div className="feature-blog3">
                            <a href='#' className='head'>Week At Solang Valley, Manali</a>
                            <p>A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit</p>
                            <a href='#' className='feature-link'>Contact</a>
                        </div>
                    </div>

                    <div className="divimg2">    
                        <img src="https://jingleholidaybazar.com/images/india-goa-best-beaches-vagator-beach.jpg" alt="" />
                        <div className="feature-blog4">
                            <a href='#' className='head'>Week At Beach in Goa</a>
                            <p>Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa</p>
                            <a href='#' className='feature-link' >Contact</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Feature
