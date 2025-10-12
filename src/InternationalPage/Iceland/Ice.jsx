import React from 'react'
import Canimg from '../Canada/Canimg'
import VisitTime from './VisitTime'

const Ice = () => {
  
        const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-reykjavik-Iceland-tour-package.png",
            title: "Reykjavik",
            desc: "Reykjavik is the capital of Iceland and offers plenty of attractions for tourists. One must-see spot is Hallgrimskirkja, a unique church that provides stunning views of the city. Another recommendation is strolling down Laugavegur, the city's main shopping street. Visitors should also make sure to visit Harpa, a beautiful concert hall and conference center. Additionally, the sculptures of Sun Voyager and the historic settlement of Perlan are not to be missed."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-golden-circle-Iceland-tour-package.png",
            title: "Golden Circle",
            desc: "The Golden Circle is a popular 300-kilometer tour route in Iceland that features three main attractions: Þingvellir National Park, the Geysir Geothermal Area, and Gullfoss waterfall. These natural wonders offer a glimpse into Iceland's unique landscape and geology. Visitors can explore the Golden Circle through organized tours or self-driving."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-jokulsarlon-Iceland-tour-package.png",
            title: "Jokulsarlon Glacier Lagoon",
            desc: "Jokulsarlon Glacier Lagoon is a stunning tourist spot located in southeastern Iceland. The lagoon is filled with icebergs that have broken off from the nearby Breiðamerkurjökull glacier, creating a breathtaking landscape. Tourists can take a boat tour to observe the icebergs up close, go hiking in the surrounding area, or simply appreciate the amazing natural beauty of the glacier lagoon."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-blue-lagoon-Iceland-tour-package.png",
            title: "Blue Lagoon",
            desc: "The Blue Lagoon is a unique geothermal spa located in Iceland, renowned for its stunning crystal clear blue waters that are rich in minerals and have therapeutic properties. Visitors can relax and soak in the warm water while surrounded by a rugged volcanic landscape. This popular destination is a must-visit when traveling to Iceland and provides an unforgettable experience."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-akureyri-Iceland-tour-package.png",
            title: "Akureyri",
            desc: "Akureyri is a charming town located in the northern part of Iceland that is renowned for its stunning natural beauty and vibrant culture. One of the main attractions in the area is the Vatnajökull National Park, which features glaciers, waterfalls, and geothermal hot springs. Sightseeing in this region provides an excellent opportunity to experience Iceland's breathtaking landscapes and unique geological features."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-westfjords-Iceland-tour-package.png",
            title: "Westfjords",
            desc: "The Westfjords region in Iceland is a breathtaking destination that offers visitors a chance to experience the incredible beauty of nature. Among the must-see attractions are the stunning Dynjandi waterfall, the picturesque village of Ísafjörður, and the unique red sand beach of Rauðasandur. In addition to sightseeing, visitors can also enjoy hiking, observing wildlife, and unwinding in natural hot springs."
        },
    ]

  return (
    <div>
        <div className="ger-topimg">
            <img src="	https://jingleholidaybazar.com/images/Group-Learning-Tours-1024x587.jpg" alt="" />

            <div className="ger-toptext">
                <h2>Iceland</h2>
                <a href="/">Home</a>
            </div>

        </div>

        <div className="head">
            <h2>Iceland tour package</h2>
        </div>

        <Canimg/>
        <VisitTime/>

        <div className="tour">
            <h2>Latest Tour Package</h2>
        </div>

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

export default Ice
