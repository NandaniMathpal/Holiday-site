import React from 'react'
import './Dub.css'
import VisitTime from './VisitTime'
import Canimg from '../Canada/Canimg'

const Dub = () => {

    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-burj-khalifa-tour-package.png",
            title: "Burj Khalifa",
            desc: "The Burj Khalifa, located in Dubai, United Arab Emirates, is the tallest building in the world, reaching a height of 828 meters (2,716 feet). Visitors can experience breathtaking views of the city from the observation deck on the 124th floor. Additionally, the building features a large shopping mall located at its base."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-dubai-fountain-tour-package.png",
            title: "Dubai Fountain",
            desc: "The Dubai Fountain is a popular attraction located in Dubai, United Arab Emirates, situated at the base of the iconic Burj Khalifa. The fountain system features a spectacular water and light show that is synchronized with music. The water dances in various ways, creating an enchanting display. Visitors can enjoy the free shows every day from 6 PM to 11 PM."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-palm-jumeirah-tour-package.png",
            title: "Palm Jumeirah",
            desc: "Palm Jumeirah is an artificial archipelago situated in Dubai, UAE, which has been designed to resemble a palm tree. The island is home to opulent resorts, hotels, villas, and dining establishments, and offers a variety of activities like water sports, shopping, and dining. Moreover, the Palm Jumeirah provides breathtaking views of the Dubai skyline and the Arabian Gulf."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-creek-tour-package.png",
            title: "Dubai Creek",
            desc: "Dubai Creek is a renowned destination among tourists due to its stunning scenery and historical significance. Visitors can enjoy a traditional abra boat ride to witness the old trading ports and historic buildings, explore the Dubai Museum, and shop for souvenirs and authentic Emirati products in nearby markets."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-miracle-garden-tour-package.png",
            title: "Dubai Miracle Garden",
            desc: "Dubai Miracle Garden is a well-known attraction that boasts breathtaking floral displays consisting of over 45 million flowers arranged in intricate patterns and designs. The garden has several themed areas, such as the Butterfly Garden and the Floral Castle, that visitors can explore. Additionally, visitors can marvel at the sight of an Emirates A380 plane covered in flowers and appreciate the garden's intricate beauty."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-opera-tour-package.png",
            title: "Dubai Opera",
            desc: "Dubai Opera is a stunning performing arts center located in the heart of Dubai, featuring a distinctive boat-shaped design. The venue presents a wide range of world-class performances, including operas, concerts, ballets, and theater shows. Visitors have the option to take guided tours to discover the history and architecture of the building, or attend one of the numerous events held throughout the year."
        },
    ]

  return (
    <div>
        <div className="dub-topimg">
            <img src="	https://jingleholidaybazar.com/images/Group-Learning-Tours-1024x587.jpg" alt="" />

            <div className="dub-toptext">
                <h2>Dubai</h2>
                <a href="/">Home</a>
            </div>

        </div>

        <div className="head">
            <h2>Canada tour package</h2>
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

export default Dub  