import React from 'react'
import './Uk.css'
import Canimg from '../../InternationalPage/Canada/Canimg'
import VisitTime from './VisitTime'

const Uk = () => {

    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-nainital-tour-package.png",
            title: "Nainital",
            desc: "Nainital is a picturesque hill station located in Uttarakhand, India. It is famous for its serene lakes, lush forests, and stunning views of the Himalayan range. Some of the popular tourist spots in Nainital are Naini Lake, Naina Devi Temple, Tiffin Top, Eco Cave Gardens, and Snow View Point. Tourists can engage in various activities like boating, trekking, and shopping in the local markets."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-naina-devi-tour-package.png",
            title: "Naina Devi",
            desc: "Naina Devi Temple is a Hindu shrine located on the Naina hill in Nainital, Uttarakhand, India. The temple offers breathtaking views of the nearby mountains and valleys. Dedicated to Goddess Naina Devi, it attracts numerous visitors annually and is a famous attraction in Nainital."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-dehradun-tour-package.png",
            title: "Dehradun",
            desc: "Dehradun, the capital of Uttarakhand, is situated at the foothills of the majestic Himalayas. It is a popular tourist destination with attractions like the Forest Research Institute, Robber's Cave, Tapkeshwar Temple, Malsi Deer Park, and the Clock Tower. Additionally, it serves as the gateway to the famous hill stations of Mussoorie and Dhanaulti."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-mussoorie-tour-package.png",
            title: "Mussoorie",
            desc: "Mussoorie, located in Uttarakhand, India, is a charming hill station known for its picturesque landscapes and comfortable weather. Popular tourist attractions in Mussoorie comprise Kempty Falls, Gun Hill, Lal Tibba, Mussoorie Lake, and Mall Road. In addition, tourists can indulge in exciting activities such as trekking and camping in the nearby mountains."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-rishikesh-tour-package.png",
            title: "Rishikesh",
            desc: "Located in the northern Indian state of Uttarakhand, Rishikesh is a popular destination for both spiritual seekers and adventure enthusiasts. The city is renowned for its numerous ashrams and yoga centers, as well as its proximity to the holy river Ganges. Some of the must-see sights in Rishikesh include Triveni Ghat, Laxman Jhula Bridge, and the Beatles Ashram."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-haridwar-tour-package.png",
            title: "Haridwar",
            desc: "Haridwar, located in the Indian state of Uttarakhand, is a renowned destination for pilgrims. The city features several notable attractions, such as the Har Ki Pauri ghat, Chandi Devi Temple, Mansa Devi Temple, and Daksha Mahadev Temple. Additionally, visitors should not miss the evening Ganga Aarti ceremony at Har Ki Pauri"
        },
    ]

  return (
    <div>
        <div className="topimg">
            <img src="https://jingleholidaybazar.com/banner/jingle-holiday-bazar-banner-uttarakhand-tour-package.webp" alt="" />
        </div>

        <div className="head">
            <h2>Uttrakhand Tour Package</h2>
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
                    <button>Read Blog</button>
                    <button>Enquiry</button>
                </div>
            )}
        </div>

    </div>
  )
}

export default Uk
