// import React from 'react';
// import './Gallery.css'
// const Gallery = () => {
//     const openPopup = (e) => {
//         alert(`Opening image: ${e.target.alt}`);
//     };

//     return (
//         <div className="gallery-content">
//             <div id="gallery" className='heading'>
//                 <h2>Gallery</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//             </div>
//             <div className="gallery">
//                 <div className="gallery-imgs">
//                 {[
//                     { src: "https://jingleholidaybazar.com/images/Red-Fort.jpg", caption: "New Delhi" },
//                     { src: "https://jingleholidaybazar.com/images/Shimla1.jpg", caption: "Shimla" },
//                     { src: "https://jingleholidaybazar.com/images/Mussoorie1.jpg", caption: "Mussoorie & Dehradun" },
//                     { src: "https://jingleholidaybazar.com/images/Jim-Corbett.jpg", caption: "Jim Corbet National Park" },
//                     { src: "https://jingleholidaybazar.com/images/Taj-mahal.jpg", caption: "Agra" },
//                     { src: "https://jingleholidaybazar.com/images/Khajjiar.jpg", caption: "Dalhousie"},
//                     { src: "https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg", caption: "Amritsar"},
//                     { src: "https://jingleholidaybazar.com/images/Manali1-1.jpg", caption: "Kullu & Manali"},
                    

//                 ].map((img, index) => (
//                     <div key={index} className={`image${index}`}>
//                         <img src={img.src} alt={img.caption} onClick={openPopup} />
//                         <div className="caption">{img.caption}</div>
//                     </div>
//                 ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Gallery;



import React from 'react'
import './Gallery.css'

const Gallery = () => {

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
    },
  ]

  return (
    <div>

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

export default Gallery;
