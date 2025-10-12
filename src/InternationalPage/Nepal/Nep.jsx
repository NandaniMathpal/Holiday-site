import React from 'react'
import VisitTime from './VisitTime'
import Canimg from '../Canada/Canimg'

const Nep = () => {
  const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-kathmandu-tour-package.png",
            title: "Kathmandu",
            desc: "Kathmandu, the capital city of Nepal, is a popular destination for tourists who are interested in exploring the country's rich religious and cultural heritage. The city has numerous historic sites, including the Monkey Temple (Swayambhunath Stupa), Pashupatinath Temple, Boudhanath Stupa, and Durbar Square, which are known for their stunning architecture, art, and cultural significance. These landmarks provide visitors with an opportunity to immerse themselves in Nepal's vibrant culture and history."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-pokhara-tour-package.png",
            title: "Pokhara",
            desc: "Pokhara, a popular tourist destination in Nepal, is renowned for its stunning natural beauty. Visitors can enjoy a variety of activities in the area, including paragliding, trekking, and boating. Some of the top sights to see in Pokhara include Phewa Lake, World Peace Pagoda, Davis Falls, Mahendra Cave, and the International Mountain Museum."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-chitwan-national-park-tour-package.jpg",
            title: "Chitwan National Park",
            desc: "Chitwan National Park is a popular destination for wildlife enthusiasts in Nepal, offering the opportunity to observe tigers, elephants, rhinos, and a variety of bird species. Visitors can participate in a jungle safari or birdwatching, as well as cultural experiences like tours of Tharu villages and traditional dance performances."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-everest-base-camp-tour-package.png",
            title: "Everest Base Camp",
            desc: "Everest Base Camp, located in Nepal's Himalayas, is a well-known destination for trekkers. This trek provides breathtaking vistas of Mount Everest, the highest peak in the world, as well as other peaks and glaciers. Along the way, visitors can also immerse themselves in the local culture by exploring nearby villages and monasteries."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-lumbini-tour-package.png",
            title: "Lumbini",
            desc: "Lumbini is a revered destination in Nepal, known as the birthplace of Gautama Buddha and a popular site for pilgrims. It boasts numerous historic temples, monasteries, and stupas, including the Mayadevi Temple, Ashoka Pillar, and Sacred Garden. People from all over the world visit Lumbini to explore these attractions."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-annapurna-circuit-tour-package.png",
            title: "Annapurna Circuit",
            desc: "The Annapurna Circuit is a well-known and popular trekking route located in the Annapurna mountain range of Nepal. This trek usually takes approximately 2-3 weeks to complete and provides trekkers with stunning views of the mountains, as well as the opportunity to visit nearby villages and historical sites such as the Muktinath temple and Braga monastery."
        },
    ]

  return (
    <div>
        <div className="ger-topimg">
            <img src="	https://jingleholidaybazar.com/images/Group-Learning-Tours-1024x587.jpg" alt="" />

            <div className="ger-toptext">
                <h2>Nepal</h2>
                <a href="/">Home</a>
            </div>

        </div>

        <div className="head">
            <h2>Nepal tour package</h2>
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

export default Nep
