import React from 'react'
import './East.css'

const East = () => {

    const gallery= [
        {
            img: "https://jingleholidaybazar.com/images/Kaziranga.jpg",
            caption: "Kaziranga National Park"
        },
        {
            img: "https://jingleholidaybazar.com/images/Tsomgo-Lake.jpg",
            caption: "Tsomgo Lake"
        },
        {
            img: "https://jingleholidaybazar.com/images/Ziro-Valley.jpg",
            caption: "Ziro Valley"
        },
        {
            img: "https://jingleholidaybazar.com/images/Goechala.jpg",
            caption: "Goechala"
        },
        {
            img: "https://jingleholidaybazar.com/images/Cherrapunji.jpg",
            caption: "Cherrapunji and Mawsynram"
        },
        {
            img: "https://jingleholidaybazar.com/images/Pelling.jpg",
            caption: "Pelling"
        },
        {
            img: "https://jingleholidaybazar.com/images/Gangtok.jpg",
            caption: "Gangtok"
        },
        {
            img: "https://jingleholidaybazar.com/images/Gorichen-Peak.jpg",
            caption: "Gorichen Peak"
        },
    ]

  return (
    <div>
        <div className="east-topimg">
            <img src="	https://jingleholidaybazar.com/images/photo-1512343879784-a960bf40e7f2.jpg" alt="" />

            <div className="east-toptext">
                <h2>EAST</h2>
                <a href="/">Home</a>
            </div>
        </div>

        <div className="heading">
            <h2>EAST INDIA GALLERY</h2>
            <p>The Eastern Zone of India is rich in Cultural Heritage. You can have a taste of beaches, temples, monasteries, Buddhist circuits with a rural touch.The most popular tourist destinations for this region are, Calcutta, Former Capital of India, Puri & Bhubaneshwar, Buddhist Circuit in Bihar, Monastries in Sikkim, Kanchenjunga Range of Mountains in Darjeeling, etc</p>
        </div>

        <div className="gal-post">
            {gallery.map((item,index)=>
                <div className="gal-Cards">
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

export default East
