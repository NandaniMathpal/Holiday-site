import React from 'react'
import Canimg from '../Canada/Canimg'
import VisitTime from './VisitTime'
const Sing = () => {
  const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-marina-bay-sands-singapore-tour-package.png",
            title: "Marina Bay Sands",
            desc: "Marina Bay Sands is an iconic destination in Singapore that offers a wide range of entertainment, shopping, dining, and accommodation options. Visitors can enjoy breathtaking views of the city from the SkyPark Observation Deck, take a leisurely stroll along the promenade, or catch a show at the state-of-the-art theater. It is a must-visit destination for anyone who loves sightseeing."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-gardens-by-the-bay-singapore-tour-package.png",
            title: "Gardens",
            desc: "Gardens by the Bay is a must-see attraction in Singapore, spanning over 101 hectares of land filled with a stunning display of flora and fauna. Visitors can enjoy the iconic Supertrees, conservatories such as the Flower Dome and Cloud Forest, as well as the outdoor gardens. The site offers a variety of dining and shopping options while taking in the breathtaking views."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-sentosa-lsland-singapore-tour-package.png",
            title: "Sentosa Island",
            desc: "Sentosa Island is a popular tourist destination in Singapore that offers a range of exciting activities. Visitors can enjoy attractions like Universal Studios Singapore, S.E.A. Aquarium, and Adventure Cove Waterpark, as well as explore beaches and historical sites such as Fort Siloso. Additionally, there are plenty of dining, drinking, and shopping options available, making Sentosa an ideal place to spend a day or two."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-merlion-park-singapore-tour-package.png",
            title: "Merlion Park",
            desc: "Merlion Park is a well-known destination for tourists in Singapore situated in the Marina Bay region. The park features an iconic statue of the Merlion, a creature that is half-lion and half-fish and is a symbol of the city-state's heritage and culture. Visitors can take photos and enjoy the stunning views of the bay and the city skyline from the park."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-botanic-gardens-singapore-tour-package.png",
            title: "Botanic Gardens",
            desc: "If you are a nature enthusiast or simply looking to experience stunning sights, the Singapore Botanic Gardens is a must-visit destination. Spanning over 82 hectares, the garden boasts an impressive collection of flora and fauna, including orchids, ferns, and towering trees. Visitors can explore the many themed gardens, unwind by the lake, or attend one of the many events or concerts held throughout the year."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-little-india-singapore-tour-package.png",
            title: "Little India",
            desc: "Little India is a vibrant and lively neighborhood in Singapore that offers a unique experience with its rich culture, colorful buildings, and delicious food. Tourists should not miss visiting the Sri Veeramakaliamman Temple, Campbell Lane's colorful shophouses, and the buzzing 24-hour Mustafa Centre. One can try authentic Indian cuisine and also shop for souvenirs and traditional clothing."
        },
    ]

  return (
    <div>
        <div className="ger-topimg">
            <img src="	https://jingleholidaybazar.com/images/Group-Learning-Tours-1024x587.jpg" alt="" />

            <div className="ger-toptext">
                <h2>Singapore</h2>
                <a href="/">Home</a>
            </div>

        </div>

        <div className="head">
            <h2>Singapore tour package</h2>
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

export default Sing
