import React from 'react'
import Canimg from '../../InternationalPage/Canada/Canimg'
import VisitTime from './VisitTime'

const Ladakh = () => {

    const Blogs =[
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-leh-tour-package.png",
            title: "Leh",
            desc: "Leh is a beautiful town located in the Ladakh region of India that is surrounded by stunning landscapes and ancient monasteries. It offers a range of popular tourist attractions such as Leh Palace, Shanti Stupa, Hall of Fame museum, Magnetic Hill, and Pangong Tso Lake. Visitors to Leh can also enjoy outdoor activities such as trekking and adventure sports in the surrounding mountains."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-pangong-lake-tour-package.png",
            title: "Pangong Lake",
            desc: "Pangong Lake is a gorgeous high-altitude lake located in the Himalayas that attracts many tourists. Its crystal-clear blue waters and scenic surroundings make it a popular destination for sightseeing, boating, camping, and trekking. Furthermore, it has been featured in various Bollywood films, adding to its appeal and drawing even more visitors to the area."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-nubra-valley-tour-package.png",
            title: "Nubra Valley",
            desc: "Nubra Valley, located in Ladakh, India, is a breathtaking destination famous for its picturesque scenery and significant Buddhist monasteries. Tourists can explore various sightseeing spots such as Diskit Monastery, Hunder sand dunes, and Panamik hot springs. Adventure enthusiasts can partake in activities like camel safaris, river rafting, and trekking. The valley is open for tourists from May to September and can be accessed via a high-altitude road."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-khardung-tour-package.png",
            title: "Khardung La Pass",
            desc: "Khardung La Pass is located in the Ladakh region of India and offers stunning views, making it a popular destination for tourists. Visitors can take in the beauty of the Himalayan mountains and engage in exciting activities like trekking, mountain biking, and skiing. Although the terrain can be challenging, the experience is truly unforgettable."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-zanskar-valley-tour-package.png",
            title: "Zanskaar Valley",
            desc: "Zanskar Valley is a stunning destination located in the Ladakh region of India that attracts many visitors who seek adventure through trekking and sightseeing. The valley boasts breathtaking views of glaciers, snow-capped mountains, and crystal-clear rivers, making it an ideal spot for nature lovers. Moreover, the area features several notable attractions, including Zongkhul Monastery, Phuktal Monastery, and Stongdey Monastery, which offer unique cultural experiences to visitors."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-hemis-national-park-tour-package.png",
            title: "Hemis National Park",
            desc: "Hemis National Park is situated in eastern Ladakh, India, and it boasts breathtaking natural beauty. This park is home to a variety of wildlife, including the snow leopard, Himalayan black bear, and Tibetan wolf. Visitors have the option of exploring the park's stunning scenery on guided tours, as well as participating in activities such as camping, trekking, and wildlife safaris."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-magnetic-hill-tour-package.png",
            title: "Magnetic Hill",
            desc: "Magnetic Hill, located in New Brunswick, Canada, is a fascinating tourist spot where objects appear to roll uphill, defying gravity. However, it is actually an optical illusion. Besides experiencing this natural wonder, visitors can also explore other nearby attractions such as the Magnetic Hill Zoo and Magic Mountain Water Park."
        },
    ]

  return (
    <div>
        <div className="topimg">
            <img src="	https://jingleholidaybazar.com/banner/jingle-holiday-bazar-banner-ladakh-tour-package.webp" alt="" />
        </div>

        <div className="head">
            <h2>Ladakh Tour Package</h2>
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
            </div>
            )}
        </div>
        
    </div>
  )
}

export default Ladakh
