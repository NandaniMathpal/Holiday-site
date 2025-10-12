import React from 'react'
import './Placegallery.css'

const Placegallery = () => {

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
  ]

  return (
    <div>
      <div className="placegal-topimg">
        <img src="https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=n--GqoESds4mEITCucp1YoJz5cQWcY7MZqK7WD_sG9g=" alt="" />
        <div className="placegal-toptext">
                <h2>Gallery</h2>
                <a href="/">Home</a>
            </div>
      </div>

      <div className="heading">
        <h3>Gallery</h3>
        <p>At Jindal Holiday Bazar All Over India Destination Gallery</p>
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

export default Placegallery;
