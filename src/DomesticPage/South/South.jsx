import React from 'react'
import './South.css'

const South = () => {

    const gallery = [
        {
            img: "https://jingleholidaybazar.com/images/Bangalore-Karnataka-1.jpg",
            caption: "Bangalore"
        },
        {
            img: "https://jingleholidaybazar.com/images/Coorg-1.jpg",
            caption: "Coorg"
        },
        {
            img: "https://jingleholidaybazar.com/images/Chennai-1.jpg",
            caption: "Chennai"
        },
        {
            img: "https://jingleholidaybazar.com/images/Gokarna-1.jpg",
            caption: "Gokarna"
        },
        {
            img: "https://jingleholidaybazar.com/images/Hampi-1.jpg",
            caption: "Hampi"
        },
        {
            img: "https://jingleholidaybazar.com/images/Pondicherry-1.jpg",
            caption: "Pondicherry"
        },
        {
            img: "https://jingleholidaybazar.com/images/Munnar-Kerala-1.jpg",
            caption: "Kerla (Munnar)"
        },
        {
            img: "https://jingleholidaybazar.com/images/Kanyakumari-1.jpg",
            caption: "Kanyakumari"
        },
    ]

  return (
    <div>
        <div className="south-topimg">
            <img src="https://jingleholidaybazar.com/images/photo-1476514525535-07fb3b4ae5f1.jpg" alt="" />

            <div className="south-toptext">
                <h2>SOUTH</h2>
                <a href="/">Home</a>
            </div>
        </div>

        <div className="heading">
            <h2>SOUTH INDIA GALLERY</h2>
            <p>South India has a lot more to offer than mere beaches and spice plantations. It’s a melting pot of cultures, cuisines, traditions, and languages. From honeymooning couples to families, the southern states of Kerala, Karnataka, Andhra Pradesh, and Tamil Nadu welcome tourists with warmth and love. There’s something to do for everyone here – water sports for the adventurous, backwaters for the romantics, trekking trails for hikers, and panoramic vistas for nature lovers. Read ahead to know about the top places to visit in South India</p>
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

export default South   