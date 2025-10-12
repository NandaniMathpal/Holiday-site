import React from 'react'
import VisitTime from './VisitTime'
import Canimg from '../Canada/Canimg'

const Mal = () => {
  
    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-kuala-lumpur-tour-package.png",
            title: "Kuala Lumpur",
            desc: "Kuala Lumpur, the capital of Malaysia, is a vibrant city that blends modern architecture with a rich cultural heritage. Some of its top attractions include the iconic Petronas Twin Towers, Batu Caves, Merdeka Square, and Central Market. Other must-visit places include Chinatown, the National Museum, and KL Tower. Don't miss the chance to sample the local cuisine at Jalan Alor or experience the exciting nightlife in Bukit Bintang."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-langkawi-tour-package.png",
            title: "Langkawi",
            desc: "Langkawi is a lovely island located in Malaysia, renowned for its stunning beaches, lush forests, and breathtaking landscapes. Visitors can enjoy a cable car ride to the top of Mount Mat Cincang for spectacular views or explore the Langkawi Sky Bridge. Popular attractions also include the Langkawi Wildlife Park and the Underwater World Langkawi."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-penang-tour-package.png",
            title: "Penang",
            desc: "Penang is a state located in Malaysia that boasts a rich blend of cultures and history. Its capital city, George Town, has been declared a UNESCO World Heritage Site due to its abundance of historical landmarks, street art, and museums. Additionally, Kek Lok Si Temple, Penang Hill, Tropical Spice Garden, and Batu Ferringhi night market are other highly sought-after tourist attractions. And of course, one mustn't forget to indulge in Penang's renowned local street food."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-malacca-tour-package.png",
            title: "Malacca",
            desc: "Malacca is a fascinating city on the west coast of Malaysia that is worth visiting. It boasts a UNESCO-listed historic district with colorful buildings, St. Paul's Church, and the Malacca Sultanate Palace Museum, all of which are steeped in history. The Malacca River Cruise offers a unique perspective of the city, and you can enjoy delicious local cuisine and explore vibrant night markets."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-cameron-tour-package.png",
            title: "Cameron",
            desc: "Cameron has the freedom to explore a range of sightseeing options based on his interests. He can opt to visit historical landmarks such as the Tower of London or Westminster Abbey, appreciate art at the British Museum or the National Gallery, or take pleasure in the picturesque views of the city from the London Eye or the Shard. Additionally, he can also check out other popular attractions such as Buckingham Palace and the iconic Big Ben."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-scottish-highlands-tour-package.png",
            title: "Scottish Highlands",
            desc: "Scotland's Highlands are a breathtaking and highly recommended destination. You can witness the stunning landscapes of Cairngorms National Park, hike the rugged terrain of Ben Nevis, and explore the mysterious Loch Ness. To experience traditional Scottish culture, explore historic castles and savor local delicacies such as haggis and whisky."
        },
    ]

  return (
    <div>
        <div className="ger-topimg">
            <img src="	https://jingleholidaybazar.com/images/Group-Learning-Tours-1024x587.jpg" alt="" />

            <div className="ger-toptext">
                <h2>Malaysia</h2>
                <a href="/">Home</a>
            </div>

        </div>

        <div className="head">
            <h2>Malaysia tour package</h2>
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

export default Mal
