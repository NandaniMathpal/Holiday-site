import React from 'react'
import Canimg from '../../InternationalPage/Canada/Canimg'
import VisitTime from './VisitTime'

const Mavaishno = () => {

    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-katra-tour-package.png",
            title: "Katra",
            desc: "Katra is a city located in the Jammu and Kashmir state of India that serves as a pilgrimage destination and base camp for the Vaishno Devi Temple. Visitors can enjoy several popular sights such as Bhairavnath Temple, Adhkunwari, Himkoti, and Baba Dhansar. The Ardh Kuwari Cave and Katra Museum are also recommended places to visit."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-banganga-tour-package.png",
            title: "Banganga",
            desc: "Beauty of the Himalayas, Banganga Mata Vaisno Devi is a divine sightseeing spot. The tranquil atmosphere and awe-inspiring surroundings make it a must-visit destination. With its sacred Banganga River, cascading waterfalls, and lush greenery, this place offers a spiritual retreat like no other. Immerse yourself in the serenity and experience a profound connection with the divine."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-charan-paduka-tour-package.png",
            title: "Charan Paduka",
            desc: "Mata Vaishno Devi with Charan Paduka, offered exclusively by Jingle Holiday Bazar. Immerse yourself in the enchanting beauty of the surroundings as you embark on this spiritual adventure. Witness breathtaking sights, serene landscapes, and the sacred Charan Paduka, believed to bear the foot imprints of the goddess. Trust Jingle Holiday Bazar to make your pilgrimage an unforgettable experience."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-bhawan-tour-package.png",
            title: "Bhawan",
            desc: "Bhawan, located in Jammu and Kashmir, India, is a highly sought-after tourist destination that boasts of breathtaking scenery and an array of outdoor activities such as hiking and trekking. The town is well-known for its local markets that offer a wide range of products and mouth-watering cuisine. The Vaishno Devi and Bhairon Temples are among the popular attractions that visitors should not miss out on."
        },
    ]

  return (
    <div>
        <div className="topimg">
            <img src="https://images.unsplash.com/photo-1719377678428-d9bcec6976f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFpc2hubyUyMGRldml8ZW58MHx8MHx8fDA%3D" alt="" />

            <div className="toptext">
                <h2>Mata Vaishno Devi</h2>
                <a href="/">Home</a>
            </div>
        </div>

        <div className="head">
            <h2>Mata Vaishno Devi Tour Package</h2>
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

export default Mavaishno
