import React from 'react'
import Canimg from '../../InternationalPage/Canada/Canimg'
import VisitTime from '../Mumbai/VisitTime'

const Rajasthan = () => {

    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-jaipur-tour-package.png",
            title: "Jaipur",
            desc: "Jaipur, also known as the Pink City, is a renowned tourist destination in India with many popular attractions such as Hawa Mahal, City Palace, Jantar Mantar, Amer Fort, Nahargarh Fort, and Jal Mahal. Tourists can indulge in shopping at local bazaars and relish the delicious Rajasthani cuisine."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-jodhpur-tour-package.png",
            title: "Jodhpur",
            desc: "Jodhpur is a well-known tourist destination located in Rajasthan, India. It is famously referred to as the Blue City. The top attractions to visit in Jodhpur include Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, Ghanta Ghar (Clock Tower), and Mandore Gardens. Tourists can indulge in shopping in the vibrant markets and savor local Rajasthani cuisine."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-udaipur-tour-package.png",
            title: "Udaipur",
            desc: "Udaipur is a beautiful city located in the state of Rajasthan, India. The city boasts of a rich cultural heritage and stunning architecture that are worth exploring. There are many must-see sights in Udaipur, including the City Palace, Lake Pichola, Jagdish Temple, Fateh Sagar Lake, Saheliyon Ki Bari, and the Monsoon Palace."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-jaisalmer-tour-package.png",
            title: "Jaisalmer",
            desc: "Jaisalmer is a city located in the state of Rajasthan, India, and is famous for its magnificent forts, palaces, and havelis. Tourists can explore various popular attractions such as Jaisalmer Fort, Patwon ki Haveli, Salim Singh ki Haveli, Gadisar Lake, and the Thar Heritage Museum. Additionally, visitors can indulge in a unique desert experience by taking a camel safari into the nearby sand dunes."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-pushkar-tour-package.png",
            title: "Pushkar",
            desc: "Pushkar is a charming town situated in the Indian state of Rajasthan, famous for its holy lake and temples. The Brahma Temple dedicated to the creator god is a must-see attraction, and visitors can take a leisurely stroll around Pushkar Lake to explore its various ghats and temples. Additionally, the town is home to the annual Pushkar Camel Fair, which is a significant event."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-ranthambore-national-park-tour-package.png",
            title: "Ranthambore National Park",
            desc: "Ranthambore National Park, located in the Indian state of Rajasthan, is a renowned destination for wildlife enthusiasts. Spanning an area of 392 square kilometers, the park is known for its population of Royal Bengal tigers, as well as other animals such as leopards, sloth bears, and Indian wild boars. Visitors can embark on jeep safaris to observe the park's fauna up close."
        }
    ]

  return (
    <div>
        <div className="topimg">
            <img src="	https://jingleholidaybazar.com/banner/jingle-holiday-bazar-banner-rajasthan-tour-package.webp" alt="" />
        </div>

        <div className="head">
            <h2>Rajasthan Tour Package</h2>
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
                    <button>Read More</button>
                    <button>Enquiry</button>
                </div>
            )}    
        </div>        

    </div>
  )
}

export default Rajasthan
