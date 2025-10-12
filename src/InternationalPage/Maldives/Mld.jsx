import React from 'react'
import VisitTime from './VisitTime'
import Canimg from '../Canada/Canimg'

const Mld = () => {
  
    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-island-maldives-tour-package.png",
            title: "Island",
            desc: "Island hopping is an excellent way to explore multiple islands in one trip. It's an opportunity to witness stunning landscapes, crystal-clear waters, and unique wildlife such as sea turtles and dolphins. Remember to pack your snorkel gear to explore the vibrant coral reefs. Each island has its own charm and culture, making it an unforgettable adventure"
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-relaxing-beaches-maldives-tour-package.png",
            title: "Relaxing on the beaches",
            desc: "Beaches are a popular spot for both tourists and locals to unwind and enjoy the natural beauty. With miles of pristine coastline, visitors can indulge in activities like swimming, sunbathing, and leisurely walks. Some beaches also provide picturesque views of nearby islands or historic landmarks, making them ideal for sightseeing while relishing the sand and sea breeze."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-water-sports-maldives-tour-package.png",
            title: "Water sports Tour",
            desc: "The Maldives has a distinct culture influenced by its geography and Islamic beliefs. Tourists can attend cultural events to experience traditional music and dance performances such as boduberu drumming and thaa and langiri songs. Additionally, historical sites like the Hukuru Miskiy mosque are worth visiting. The country's beautiful beaches and underwater life make it an ideal location for snorkeling and diving."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-culture-maldives-tour-package.png",
            title: "Maldives Culture Tour",
            desc: "Embark on a delightful adventure along Germany's Romantic Road, where a jingle-filled holiday bazaar tour awaits. Marvel at fairytale-like castles, charming villages, and breathtaking landscapes. Relish local delicacies, indulge in fine wines, and gather lovely souvenirs. Create cherished memories on this enchanting journey, brimming with romance and magic."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-sunset-cruises-maldives-tour-package.png",
            title: "Neuschwanstein",
            desc: "Neuschwanstein Castle is a well-known destination for tourists in Germany. King Ludwig II built it in the 1800s as a retreat and tribute to composer Richard Wagner. The castle's medieval-inspired design gives it a fairy tale appearance. Visitors are welcome to tour the castle and its surrounding gardens."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-rhine-valley-germany-tour-package.png",
            title: "Sunset cruises",
            desc: "Watching the sunset on a cruise in the Maldives is an experience that you should not miss. The view of the sun going down and the sky painted with a mix of orange and pink colors is simply breathtaking. You might even get the chance to spot dolphins and other marine animals while on the trip, making it a truly unforgettable sightseeing adventure that you will cherish."
        },
    ]

  return (
    <div>
        <div className="ger-topimg">
            <img src="	https://jingleholidaybazar.com/images/Group-Learning-Tours-1024x587.jpg" alt="" />

            <div className="ger-toptext">
                <h2>Maldives</h2>
                <a href="/">Home</a>
            </div>

        </div>

        <div className="head">
            <h2>Maldives tour package</h2>
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

export default Mld
