import React from 'react'
import Canimg from '../../InternationalPage/Canada/Canimg'
import VisitTime from './VisitTime'

const Chardham = () => {

    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-badrinath-tour-package.png",
            title: "Badrinath",
            desc: "Badrinath, located in Uttarakhand, India, is a renowned pilgrimage destination known for the Badrinath Temple. The temple is one of the four sacred shrines in the Char Dham Yatra of Hinduism. Apart from the temple, visitors can explore other attractions like Mana Village, Vasudhara Falls, Tapt Kund, and Narad Kund while touring Badrinath."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-kedarnath-tour-package.png",
            title: "Kedatnath Temple",
            desc: "The Kedarnath Temple is a highly frequented pilgrimage site located in the Rudraprayag district of Uttarakhand, India. It is considered to be one of the four sacred shrines in the Chota Char Dham Yatra of Hinduism. Visitors must undertake a 14 km trek from Gaurikund to reach the temple, which is situated at an elevation of 3,583 meters above sea level. The temple is dedicated to Lord Shiva and is considered to be of great importance to Hindus."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-gangotri-tour-package.png",
            title: "Gangotri",
            desc: "Gangotri is a town located in the Uttarkashi district of Uttarakhand, India, known for its natural beauty and religious significance. The town has several popular tourist attractions such as the Gangotri Temple, Bhagirathi Shila, Gaumukh Glacier, Kedar Tal, and Pandava Gufa. Additionally, tourists can also engage in outdoor activities like trekking and camping while visiting the area."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-yamunotri-tour-package.png",
            title: "Yamunotri",
            desc: "Yamunotri, situated in Uttarakhand, India, is a well-known pilgrimage destination with a temple dedicated to the goddess Yamuna and hot springs located at Janki Chatti. Visitors can trek to Saptarishi Kund and witness the stunning waterfalls. The natural beauty of the region is a major draw for tourists who come to visit."
        },
    ]

  return (
    <div>
        <div className="topimg">
            <img src="https://th.bing.com/th/id/OIP.ywHJvmDRv_Dgag-BchgGNQHaE8?w=242&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />


            <div className="toptext">
                <h2>Chardham Yatra </h2>
                <a href="/">Home</a>
            </div>
        </div>

        <div className="head">
            <h2>Char Dham Yatra Tour Package</h2>
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

export default Chardham
