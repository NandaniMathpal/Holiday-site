import React from 'react'
import './Badrinath.css'
import Canimg from '../../InternationalPage/Canada/Canimg'
import VisitTime from './VisitTime'

const Badrinath = () => {

    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-vasudhara-falls-tour-package.png",
            title: "Vasudhara Falls",
            desc: "Vasudhara Falls is a stunning waterfall located in the Chamoli district of Uttarakhand, India. This picturesque destination is situated at an altitude of 12,000 feet above sea level and is surrounded by majestic snow-capped peaks. It is a popular spot among tourists who seek to admire its breathtaking beauty and serene atmosphere. Visitors can engage in trekking activities to reach the falls and immerse themselves in the natural splendor of the surroundings."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-mana-village-tour-package.png",
            title: "Mana Village",
            desc: "Mana Village is a picturesque hamlet located in the Chamoli district of Uttarakhand, India. Situated at an altitude of 3,200 meters, it is known for its scenic beauty, ancient caves, and the legendary Saraswati temple. It is also the last inhabited village on the Indian side before the Indo-China border, making it a popular destination for tourists. Additionally, Mana Village serves as a starting point for treks to the famous Vasudhara falls."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-tapt-kund-tour-package.png",
            title: "Tapt Kund",
            desc: "Tapt Kund is a natural hot spring located in the Chamoli district of Uttarakhand, India, close to the Badrinath Temple. It is considered sacred by Hindus, who believe that taking a dip in its waters before entering the temple purifies the soul. Tapt Kund is also a popular tourist attraction in the region."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-narad-kund-tour-package.png",
            title: "Narad Kund",
            desc: "Narad Kund is a natural hot water spring located in Uttarakhand, India's Chamoli district. According to legend, sage Narad performed penance and meditation at this location while praying to Lord Vishnu. The water from the Kund is said to have medicinal benefits, making it a popular spot for tourists and locals to visit."
        }
    ]

  return (
    <div>
        <div className="topimg">
            <img src="https://th.bing.com/th/id/OIP.R6uQ2BkAEIeZ2hPJVXHJLQHaEc?w=288&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />

            <div className="toptext">
                <h2>Badrinath</h2>
                <a href="/">Home</a>
            </div>
        </div>

        <div className="head">
            <h2>Badrinath Tour Package</h2>
        </div>

        <Canimg/>
        <VisitTime/>

        <div className="blogpost">
            {Blogs.map((item,index)=>
                <div className="blogcards">
                    <div className="cardimg">
                        <img src={item.img} alt="" />
                    </div>

                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>Read Blogs</button>
                    <button>Enquiry</button>
                </div>
            )}
        </div>

    </div>
  )
}

export default Badrinath
