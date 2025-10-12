import React from 'react'
import Canimg from '../../InternationalPage/Canada/Canimg'
import VisitTime from './VisitTime'

const Mumbai = () => {

    const Blogs = [
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-gateway-of-india-tour-package.png",
            title: "Gateway of India",
            desc: "The Gateway of India is a well-known monument located in Mumbai, India. It was constructed in 1911 to commemorate the visit of King George V and Queen Mary. The structure combines both Hindu and Muslim architectural styles and offers a scenic view of the Arabian Sea. Visitors can also enjoy a boat ride from this location to explore nearby landmarks such as the Elephanta Caves."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-shree-siddhivinayak-temple-tour-package.png",
            title: "Shree Siddhivinayak Temple",
            desc: "The Shree Siddhivinayak Temple is a Hindu place of worship located in Mumbai, India, dedicated to Lord Ganesh. The temple is renowned for its exquisite architecture and houses a self-manifested idol of Lord Ganesh. People, both locals and tourists, can participate in a variety of rituals and ceremonies at the temple, making it a sought-after destination."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-chhatrapati-shivaji-terminus-tour-package.png",
            title: "Chhatrapati Shivaji Terminus",
            desc: "The Chhatrapati Shivaji Terminus (CST) is a well-known railway station in Mumbai, India with a rich history. This station is a popular tourist destination due to its stunning Victorian-Gothic architecture and its significance in Mumbai's transportation industry. Visitors can admire the impressive design, observe the hustle and bustle of trains, and learn about the role it played in Mumbai's transportation history. CST has been recognized as a UNESCO World Heritage Site"
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-elephantacaves-tour-package.png",
            title: "Elephanta Caves",
            desc: "The Elephanta Caves are a collection of rock-cut caves located on an island near Mumbai, India. They are considered to be of great historical and cultural importance, and have been designated as a UNESCO World Heritage site. Another popular tourist attraction in Mumbai is the Siddhivinayak Temple, a well-known Hindu temple that is dedicated to Lord Ganesha. Mumbai also has other popular landmarks such as the Gateway of India, Marine Drive, and the Chhatrapati Shivaji Terminus railway station."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-juhu-beach-tour-package.png",
            title: "Juhu Beach",
            desc: "Juhu Beach is a well-known destination for tourists in Mumbai, India. It offers a range of activities such as taking a leisurely walk, trying delicious local street food, and observing the fishermen's catch. Visitors can also enjoy horse and camel rides, as well as beach volleyball. The stunning sunset views and vibrant atmosphere add to its charm."
        },
        {
            img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-sanjay-gandhi-mnational-park-tour-package.png",
            title: "Sanjay Gandhi National Park ",
            desc: "Sanjay Gandhi National Park is a protected area situated in Mumbai, India that is home to a wide variety of plant and animal species such as leopards, macaques, and deer. Visitors have the opportunity to engage in activities like hiking, cycling, and wildlife safaris to observe the animals in their natural habitat. The park also features the Kanheri Caves, a series of ancient rock-cut Buddhist shrines and monasteries that date back to the 1st century BCE."
        },
    ]

  return (
    <div>
        <div className="topimg">
            <img src="	https://jingleholidaybazar.com/banner/jingle-holiday-bazar-banner-mumbai-tour-package.webp" alt="" />
        </div>

        <div className="head">
            <h2>Mumbai Tour Package</h2>
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

export default Mumbai
