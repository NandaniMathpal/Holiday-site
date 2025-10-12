import React from 'react'
import './West.css'

const West = () => {

    const gallery = [
        {
            img: "https://jingleholidaybazar.com/images/Goa-beaches.jpg",
            caption: "Goa"
        },
        {
            img: "https://jingleholidaybazar.com/images/2021006-1895800595.jpg",
            caption: "Mumbai"
        },
        {
            img: "https://jingleholidaybazar.com/images/1539784236_1514009275_mahabaleshwar.jpg",
            caption: "Mahabaleshwar"
        },
        {
            img: "https://jingleholidaybazar.com/images/Sydney_point_panchghani.jpg",
            caption: "Panchgani"
        },
        {
            img: "https://jingleholidaybazar.com/images/Karla-Caves.jpg",
            caption: "Khandala"
        },
        {
            img: "https://jingleholidaybazar.com/images/rajmachi-fort-trek-lonavala.jpg",
            caption: "Lonavla"
        },
        {
            img: "https://jingleholidaybazar.com/images/dandeli-wildlife.jpg",
            caption: "Dandeli National Park"
        },
        {
            img: "https://jingleholidaybazar.com/images/SHIRDI.jpg",
            caption: "Shirdi"
        },
    ]

  return (
    <div>
        <div className="west-topimg">
            <img src="https://jingleholidaybazar.com/images/photo-1611704526041-5931d84f7cb6.jpg" alt="" />

            <div className="west-toptext">
                <h2>WEST</h2>
                <a href="/">Home</a>
            </div>

        </div>

        <div className="heading">
            <h2>WEST INDIA GALLERY</h2>
            <p>West India has an amazing potpourri of rich culture, heritage, and vivid greenery of the Ghats that make it a perfect destination for tourists. Tourists love the amazing places to visit in West India and it becomes a promising region for its temperate climate and beautiful locations. Also during the summer months, the hill stations of Western India have a number of colorful festivals that attract tourists.</p>
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

export default West
