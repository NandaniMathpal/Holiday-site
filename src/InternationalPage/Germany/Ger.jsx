import React from 'react'
import VisitTime from './VisitTime'
import './Ger.css'
import Canimg from '../Canada/Canimg'

const Ger = () => {
  
      const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-berlin-germany-tour-package.png",
            title: "Berlin",
            desc: "Berlin is a fascinating city with an abundance of things to see and do. Popular attractions include the historic Brandenburg Gate and the Berlin Wall, as well as modern areas with trendy neighborhoods and delicious cuisine. It's important to also explore the city's history, such as the Holocaust Memorial and Reichstag building."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-munich-germany-tour-package.png",
            title: "Munich",
            desc: "Munich is a beautiful city in Germany that offers plenty of sightseeing opportunities. Some popular attractions include Marienplatz, where you can see the famous Glockenspiel, Frauenkirche, English Garden, Nymphenburg Palace, and the Deutsches Museum. Don't forget to indulge in the local cuisine and beer while exploring this charming city!"
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-black-forest-germany-tour-package.png",
            title: "The Black Forest",
            desc: "The Black Forest is located in the southwestern part of Germany and is well-known for its dense forests, picturesque towns, and stunning scenery. Visitors to the region can enjoy several popular attractions such as the charming town of Baden-Baden, the majestic Triberg Waterfalls, and the iconic Black Forest Cake. Additionally, visitors can hike through the forests, explore local museums, and learn about the rich cultural heritage of the area."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-romantic-road-germany-tour-package.png",
            title: "Romantic Road",
            desc: "Embark on a delightful adventure along Germany's Romantic Road, where a jingle-filled holiday bazaar tour awaits. Marvel at fairytale-like castles, charming villages, and breathtaking landscapes. Relish local delicacies, indulge in fine wines, and gather lovely souvenirs. Create cherished memories on this enchanting journey, brimming with romance and magic."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-neuschwanstein-germany-tour-package.png",
            title: "Neuschwanstein",
            desc: "Neuschwanstein Castle is a well-known destination for tourists in Germany. King Ludwig II built it in the 1800s as a retreat and tribute to composer Richard Wagner. The castle's medieval-inspired design gives it a fairy tale appearance. Visitors are welcome to tour the castle and its surrounding gardens."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-rhine-valley-germany-tour-package.png",
            title: "Rhine Valley",
            desc: "The Rhine Valley, situated in Germany, is a stunning destination for sightseeing. This area is known for its remarkable scenery that includes the Rhine River and the surrounding vineyards. Visitors can experience river cruises, explore medieval castles and historic towns, and indulge in local wines. Additionally, it offers fantastic opportunities for outdoor activities like hiking and cycling."
        },
    ]

  return (
    <div>
        <div className="ger-topimg">
            <img src="	https://jingleholidaybazar.com/images/Group-Learning-Tours-1024x587.jpg" alt="" />

            <div className="ger-toptext">
                <h2>Germany</h2>
                <a href="/">Home</a>
            </div>

        </div>

        <div className="head">
            <h2>Germany tour package</h2>
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

export default Ger
