import React from 'react'
import './Can.css'
import Canimg from './Canimg'
import VisitTime from './VisitTime'

const Can = () => {
  
      const Blogs=[
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-banff-national-park-tour-package.png",
            title:"Banff National Park Tour",
            desc:"Banff National Park is a stunning destination with plenty of natural beauty to admire. You can visit popular landmarks such as Lake Louise and Moraine Lake, take a scenic drive along the Icefields Parkway, hike to Johnston Canyon, or explore the charming town of Banff. Other attractions include the Banff Gondola and the hot springs at Banff Upper Hot Springs."
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-vancouver-tour-package.png",
            title:"Vancouver Tour",
            desc:"Vancouver is a beautiful city located in western Canada, known for its scenic views and popular sightseeing spots like Stanley Park, Granville Island, Capilano Suspension Bridge, and the Vancouver Aquarium. Additionally, visitors can explore the city's diverse neighborhoods, including Gastown and Chinatown, and indulge in its vibrant food and cultural scenes. A stroll along the scenic seawall is also a must-do activity for anyone visiting Vancouver."
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-banff-national-park-tour-package.png",
            title:"Niagara Falls Tour",
            desc:"Niagara Falls is a magnificent destination to explore situated on the Niagara River, marking the border between the United States and Canada. The falls consist of three distinct waterfalls, namely the Horseshoe Falls, the American Falls, and the Bridal Veil Falls. Tourists can admire the stunning views of the falls from observation points, embark on boat tours, and even experience the thrill of ziplining over the falls."
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-niagara-falls-tour-package.png",
            title:"Toronto Tour",
            desc:"Toronto offers a variety of exciting sightseeing opportunities. You can take a leisurely stroll through the historic Distillery District, enjoy stunning views of the city from the iconic CN Tower, explore the exhibits at the Royal Ontario Museum, or unwind by the lake on the Toronto Islands. With so much to offer, there's something for everyone in Toronto!"
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-quebec-city-tour-package.png",
            title:"Banff National Park Tour",
            desc:"Banff National Park is a stunning destination with plenty of natural beauty to admire. You can visit popular landmarks such as Lake Louise and Moraine Lake, take a scenic drive along the Icefields Parkway, hike to Johnston Canyon, or explore the charming town of Banff. Other attractions include the Banff Gondola and the hot springs at Banff Upper Hot Springs."
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-whistler-tour-package.png",
            title:"Quebec City Tour",
            desc:"Quebec City is a historic and charming city that offers visitors a wide range of sightseeing opportunities. There are many popular attractions to explore, such as the iconic Chateau Frontenac and the picturesque Old Quebec district, which features cobblestone streets and quaint architecture. Additionally, visitors can visit the Citadelle of Quebec and enjoy the vast green space of the Plains of Abraham park. The city also boasts several museums, galleries, and local cuisine to try."
        }
    ]

  return (
    <div>
        <div className="canada-topimg">
            <img src="https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=n--GqoESds4mEITCucp1YoJz5cQWcY7MZqK7WD_sG9g=" alt="" />
            <div className="canada-toptext">
                <h2>Canada Tour Details</h2>
                <a href="/">Home</a>
            </div>
        </div>

        <div className="head">
            <h2>Canada Tour Package</h2>
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

export default Can
