import React from 'react'
import './Th.css'
import Threeimg from './Threeimg'
import VisitTime from './VisitTime'

const Th = () => {

  const blogs = [
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-bangkok-tour-package.png",
      title: "Bangkok Tour",
      desc: "There are numerous things to do and see in Bangkok, the capital city of Thailand. Visitors can explore the stunning Grand Palace and Wat Phra Kaew, take a boat ride along the Chao Phraya River, shop for unique items at the Chatuchak Weekend Market, explore the vibrant Chinatown, and savor delicious Thai street food. Additionally, Bangkok offers exciting nightlife and entertainment options for visitors to enjoy.",
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-phuket-tour-package.png",
      title: "Phuket Tour",
      desc: "Phuket is a well-known destination in Thailand that attracts many tourists due to its beautiful beaches, lively nightlife, and rich cultural heritage. The must-see attractions include the Big Buddha, Wat Chalong, Old Phuket Town, and the Phi Phi Islands. Don't forget to indulge in the delicious Thai cuisine and take part in the thrilling water sports and activities available on the island.",
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-krabi-tour-package.png",
      title: "Krabi Tour",
      desc: "Krabi, located in the southern part of Thailand, is a stunning province that offers an array of exciting sights and activities to explore. Visitors can enjoy some of the top attractions like Railay Beach, Ao Nang Beach, Tiger Cave Temple, Emerald Pool, Krabi Night Market, and Phi Phi Islands. Apart from sightseeing, there are many fun activities like rock climbing, kayaking, and snorkeling to indulge in.",
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-ayutthaya-tour-package.png",
      title: "Ayutthaya Tour",
      desc: "Ayutthaya is a city in Thailand that served as the capital of the Ayutthaya Kingdom from the 14th to the 18th century. The city is home to numerous historical and cultural attractions, including ancient temples, palaces, museums, and markets. Some of the most popular sights for visitors to Ayutthaya include Wat Mahathat, Wat Phra Si Sanphet, and the Ayutthaya Historical Park.",
    }, {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-koh-phi-phi-tour-package.png",
      title: "Koh Phi Phi Tour",
      desc: "Koh Phi Phi is a stunning group of islands in Thailand famous for their crystal-clear waters, limestone cliffs, and vibrant marine life. Tourists can enjoy sightseeing at popular spots such as Maya Bay, Viking Cave, and Monkey Beach, or simply relax on the beautiful beaches. Popular activities include diving, snorkeling, and kayaking, and there are plenty of dining and drinking options to explore.",
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-kanchanaburi-tour-package.png",
      title: "Kanchanaburi Tour",
      desc: "Kanchanaburi, located in western Thailand, is a province renowned for its scenic beauty and abundance of outdoor activities. Popular tourist attractions include the historic Bridge over the River Kwai, Erawan National Park, and Sai Yok Noi Waterfall. Visitors can also enjoy activities like elephant rides, bamboo rafting, and hiking in the surrounding hills.",
    },
  ]

  return (
    <div>
      <div className="thailand-topimg">
        <img src="https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=n--GqoESds4mEITCucp1YoJz5cQWcY7MZqK7WD_sG9g=" alt="" />

        <div className="thailand-toptext">
          <h2>Thailand Tour Details</h2>
          <a href="/">Home</a>
        </div>
      </div>

      <div className="th-head">
        <h2>Thailand Tour Package</h2>
      </div>

      <Threeimg />
      <VisitTime />

      <h2 className="tour">
        Latest Tour Packages
      </h2>

      <div className="blogpost">
        {blogs.map((item, index) =>
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

export default Th
