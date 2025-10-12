import React from 'react'
import './InternaPackage.css'

const InternaPackage = () => {
  const pics=[
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-uttarakhand-tour-package.png",
      heading: "Uttrakhand",
      descp: "Uttarakhand is a beautiful state located in the northern part of India. It is commonly referred to as the 'Land of Gods' due to its numerous pilgrimage sites, including the renowned Kedarnath and Badrinath temples. Apart from its spiritual significance, Uttarakhand is also known for its breathtaking natural beauty, with popular tourist destinations like Nainital and Mussoorie hill stations, and the holy city of Haridwar."
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-himachal-pradesh-tour-package.png",
      heading: "Himachal Pradesh Tour",
      descp: "Himachal Pradesh is located in northern India and is famous for its stunning mountain landscapes, rich flora and fauna, and scenic beauty. The state capital is Shimla, and other major cities include Manali, Dharamshala, and Solan. Tourists are drawn to this state for adventure activities such as trekking, mountaineering, and skiing."
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-delhi-tour-package.png",
      heading: "Delhi Capital of India",
      descp: "New Delhi, situated in the northern region of India, is the country's capital city and home to a population of more than 21 million people. The city is renowned for its rich historical heritage, diverse culture, and culinary delights, and serves as an essential center for politics, education, and commerce within the country."
    },
    {
      img: "https://jingleholidaybazar.com/img/rajasthan-blog.png",
      heading: "Rajasthan",
      descp: "Located in northern India, Rajasthan is celebrated for its rich history, vibrant culture, and unique desert landscapes. With a population exceeding 77 million, the state is the largest in India and its residents predominantly speak Hindi. Rajasthan is renowned for its opulent palaces, ancient forts, lively festivals, and exquisite handicrafts."
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-uttar-pradesh-tour-package.png",
      heading: "Uttar Pradesh",
      descp: "Uttar Pradesh is a state located in northern India, which boasts numerous popular tourist destinations. Visitors to Uttar Pradesh can explore the breathtaking Taj Mahal in Agra, the spiritual city of Varanasi, the magnificent monuments of Lucknow, the diverse wildlife of Dudhwa National Park, and the sacred sites of Mathura and Vrindavan. These destinations provide an opportunity to experience the cultural and natural beauty of the state."
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-mumbai-tour-package.png",
      heading: "Mumbai",
      descp: "Mumbai, which was previously known as Bombay, is a lively metropolis located on the western coast of India. The city has many popular tourist spots, including the Gateway of India, Marine Drive, Elephanta Caves, and Chhatrapati Shivaji Terminus. Visitors can also indulge in delicious street food, explore local markets, and take boat rides to get a stunning view of the city's skyline from the sea."
    }
  ];

  const pics1 = [
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-punjab-tour-package.png",
      heading: "Punjab Tour",
      descp: "Punjab, located in northern India, is renowned for its extensive history and cultural heritage. Tourists flock to popular landmarks such as the Golden Temple, Jallianwala Bagh, Wagah Border ceremony, Anandpur Sahib Gurudwara, Rock Garden, and Sheesh Mahal. Additionally, visitors can indulge in the state's vibrant food scene and explore its bustling shopping districts."
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-andhra-pradesh-tour-package.png",
      heading: "Andhra Pradesh Tour",
      descp: "There are numerous sightseeing options in Andhra Pradesh, a state located in southeastern India. One can visit the historic city of Vijayawada and explore the famous Kanaka Durga Temple or head to the coastal city of Visakhapatnam to see the fascinating INS Kurusura submarine museum. In addition, the state boasts other notable attractions such as the scenic Araku Valley, the breathtaking Belum Caves, and the stunning Borra Caves."
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-haryana-tour-package.png",
      heading: "Haryana Tour",
      descp: "Haryana is a state located in the northern part of India, bordered by the states of Punjab, Himachal Pradesh, Rajasthan, and Uttar Pradesh. The state has a population of more than 28 million people, and its capital city is Chandigarh, which is a union territory and also serves as the capital of Punjab."
    }
  ]

  const pics2 = [
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-ladakh-tour-package.png",
      heading: "Ladakh Tour",
      descp: "ladakh is a beautiful region located in Northern India that boasts breathtaking landscapes and a rich cultural heritage. Among its popular sightseeing spots are the stunning Pangong Lake, the historic Leh Palace, the colorful Hemis Monastery, and the picturesque Nubra Valley. In addition to sightseeing, visitors can enjoy outdoor activities such as trekking and camping, as well as exploring the local markets and sampling the delicious cuisine."
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-jammu-kashmir-tour-package.png",
      heading: "Jammu & Kashmir Tour",
      descp: "Jammu & Kashmir is a magnificent tourist destination in India, celebrated for its breathtaking scenery and vibrant cultural heritage. The region boasts several popular tourist attractions such as Dal Lake, Srinagar, Gulmarg, Pahalgam, Sonamarg, Leh, and Ladakh. Additionally, adventure seekers can engage in activities like trekking, skiing, and river rafting."
    },
    {
      img: "https://jingleholidaybazar.com/img/jingle-holiday-bazar-goa-tour-package.png",
      heading: "Goa Tour",
      descp: "Goa is a well-known destination for tourists in India, renowned for its gorgeous beaches, colonial architecture, and bustling nightlife. The top sightseeing spots in Goa include the Basilica of Bom Jesus, Fort Aguada, Chapora Fort, Dudhsagar Falls, and Anjuna Flea Market. Visitors can also indulge in water sports, seafood, and experience the unique blend of Indian and Portuguese cultures in Goa."
    }
  ]

  return (
    <div>
        <div className="interpack-topimg">
          <img src="https://jingleholidaybazar.com/banner/jingle-holiday-bazar-international-packages-blogs-tour-package-banner.webp" alt="" />
        </div>
        
        <div className="head">
        <h2>Latest Blog Posts</h2>
        </div>

        <div className="blogpost">

          {pics.map((item,index)=>
            <div key={index} className="blogcards">

              <div className="cardimg">
                <img src={item.img} alt="" />
              </div>

              <div>
                <h2>{item.heading}</h2>
                <p>{item.descp}</p>
                <button>Read More</button>
              </div>
            </div>
          )}

        </div>

        <div className="sec">
          <h2>Read All Time Favorites</h2>

          <div className="blogpost">

            {pics1.map((item,index)=>
              <div key={index} className="blogcards">

                <div className="cardimg">
                  <img src={item.img} alt="" />
                </div>

                <div>
                  <h2>{item.heading}</h2>
                  <p>{item.descp}</p>
                  <button>Read More</button>
                </div>

              </div>
            )}
          </div>

        </div>

        <div className="third">
          <h2>Adventure Travel Blog</h2>

          <div className="blogpost">
            {pics2.map((item,index)=>

            <div className="blogcards">

              <div className="cardimg">
                <img src={item.img} alt="" />
              </div>

              <div>
                <h2>{item.heading}</h2>
                <p>{item.descp}</p>
                <button>Read More</button>
              </div>
            </div>
            )}
          </div>
        </div>

       
  </div>
  )
}

export default InternaPackage
