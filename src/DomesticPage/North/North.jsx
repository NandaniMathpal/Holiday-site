import React from 'react'
import './North.css'

const North = () => {

    const gallery = [
    {
      img: "https://jingleholidaybazar.com/images/Red-Fort.jpg",
      caption: "Red Fort"
    },
    {
      img: "https://jingleholidaybazar.com/images/Shimla1.jpg",
      caption: "Shimla"
    },
    {
      img: "https://jingleholidaybazar.com/images/Mussoorie1.jpg",
      caption: "Mussoorie"
    },
    {
      img: "https://jingleholidaybazar.com/images/Taj-mahal.jpg",
      caption: "Agra"
    },
    {
      img: "https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg",
      caption: "Amritsar"
    },
    {
      img: "https://jingleholidaybazar.com/images/Manali1-1.jpg",
      caption: "Manali"
    },
    {
        img: "https://jingleholidaybazar.com/images/Khajjiar.jpg",
        caption: "Dalhousie"
    },
    {
        img: "https://jingleholidaybazar.com/images/Jim-Corbett.jpg",
        caption: "Jim Corbett National Park"
    }
  ]

  return (
    <div>
      <div className="north-topimg">
        <img src="https://jingleholidaybazar.com/images/photo-1564329895729-c5bbcd512d7b.jpg" alt="" />

        <div className="north-toptext">
            <h2>NORTH</h2>
            <a href="/">Home</a>
        </div>
      </div>

        <div className="heading">
            <h2>NORTH INDIA GALLERY</h2>
            <p>North India is like a set of thali that has every desirable element to satisfy your taste buds. From the poetic beauty of Kashmir to the royal grandeur of Rajasthan. From the purest symbol of love, Taj Mahal to the holiest of all rivers, the Ganges. North India is a treasure trove of vast nature, authentic culture and an array of experiences filled with serenity. Exceptionally blessed with a diverse landscape, it has a rich cultural heritage that leaves you overwhelmed. North India comprises Jammu & Kashmir, Delhi, Uttar Pradesh, Haryana, Punjab, Rajasthan, Himachal Pradesh and Uttarakhand.</p>
        </div>

        <div className="gal-post">
        {gallery.map((item,index)=>
          <div className="gallery-Card">

            <div className="gal-cardimg">
              <img src={item.img} alt="" />
              <p>{item.caption}</p>
            </div>

          </div>
        )}
      </div>

    </div>
  )
}

export default North
