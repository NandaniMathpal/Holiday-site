import React from 'react'
import './Kedarnath.css'
import Canimg from '../../InternationalPage/Canada/Canimg'
import VisitTime from './VisitTime'
const Kedarnath = () => {

    const Blogs =[
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-vasuki-tal-tour-package.png",
            title: "Vasuki Tal",
            desc: "Embark on a breathtaking journey to Kedarnath in Uttarakhand with Vasuki Tal as your guide. Experience an unforgettable sightseeing adventure by joining Jingle Holiday Bazar. Uncover the captivating natural beauty and tranquil atmosphere of this region. Be awestruck by the majestic vistas and immerse yourself in the spiritual essence. Seize this chance to make lifelong memories and secure your trip with Jingle Holiday Bazar today."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-shankaracharya-samadhi-tour-package.png",
            title: "Shankaracharya Samadhi",
            desc: "Discover the sacred Shankaracharya Samadhi in the picturesque town of Kedarnath, Uttarakhand, with Jingle Holiday Bazar! Marvel at the serene beauty of this renowned sightseeing spot, where the revered Shankaracharya rests eternally. Immerse yourself in spirituality and behold breathtaking panoramic views. Reserve your tour today and embrace the divine tranquility of Kedarnath through Jingle Holiday Bazar. Don't miss this extraordinary expedition!"
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-gandhi-sarovar-tour-package.png",
            title: "Gandhi Sarovar",
            desc: "Gandhi Sarovar is a peaceful lake situated in the Kedarnath Wildlife Sanctuary, Uttarakhand, India. The lake is located at a height of 4,000 meters above sea level and is a famous tourist spot. It offers breathtaking views of the lake and the nearby mountains. Visitors can go trekking through the sanctuary to enjoy the natural beauty of the area."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-sonprayag-tour-package.png",
            title: "Sonprayag",
            desc: "Sonprayag is a small town in Uttarakhand, India that is popular for its natural beauty and religious significance. The town is situated at the confluence of the Mandakini and Basuki rivers, making it a great place for sightseeing. Nearby attractions include the Triyuginarayan Temple and Kedarnath Wildlife Sanctuary."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-triyuginarayan-temple-tour-package.png",
            title: "Triyuginarayan Temple",
            desc: "Triyuginarayan Temple, located in Triyuginarayan village near Gaurikund in Uttarakhand, India, is a significant Hindu pilgrimage site. Legend has it that this is where Lord Shiva and Goddess Parvati were wed. With its beautiful mountainous and forested surroundings, the temple is a popular destination for tourists to visit and admire."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-bhairon-temple-tour-package.png",
            title: "Bhairon Temple",
            desc: "Discover the enchanting Bhairon Temple in Kedarnath, Uttarakhand, with Jingle Holiday Bazar. Immerse yourself in the tranquil ambiance and witness the awe-inspiring sights. Appreciate the temple's intricate architectural marvels while delving into its fascinating history. Allow Jingle Holiday Bazar to accompany you on this remarkable sightseeing journey, ensuring unforgettable moments that will be cherished forever."
        },
    ]

  return (
    <div>
        <div className="topimg">
            <img src="https://images.unsplash.com/photo-1698574996391-73f103113f60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtlZGFybmF0aHxlbnwwfHwwfHx8MA%3D%3D" alt=""  />

            <div className="toptext">
                <h2>Kedarnath</h2>
                <a href="/">Home</a>
            </div>
        </div>

        <div className="head">
            <h2>Kedarnath Tour Package</h2>
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

export default Kedarnath
