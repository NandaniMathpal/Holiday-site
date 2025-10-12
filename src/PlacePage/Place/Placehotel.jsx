import React from 'react'
import './Placehotel.css'

const Placehotel = () => {
  return (
    <div>

      <div className="placehotel-topimg">
        <img src="https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=n--GqoESds4mEITCucp1YoJz5cQWcY7MZqK7WD_sG9g=" alt="" />
        <div className="hotel-toptext">
                <h2>Hotels</h2>
                <a href="/">Home</a>
            </div>
      </div>

        <div className="heading">
            <h3>LATEST TOURS</h3>
            <p>At Jingle Holiday Bazar All Over India Destination Gallery</p>
        </div>

    <div className="hotel-container">
        
            <div className="tour-card">
                <img src="https://jingleholidaybazar.com/images/itc-grand-bharat.png" alt="" />
                <h3>Week At New Delhi</h3>
                <p>Crowne Plaza New Delhi Mayur Vihar Noida, an IHG Hotel</p>
            </div>

            <div className="tour-card">
                <img src="https://jingleholidaybazar.com/images/830824428e0111ebaef00242ac110006.jpg" alt="" />
                <p>Welcomhotel by ITC Hotels, Bhubaneswar</p>
            </div>

        </div>

            <div className="tour-card">
                <img src="https://jingleholidaybazar.com/images/leonardo-1268935-Bekal_Facade_O-129886.jpg" alt="" />
                <h3>Week At Kerala</h3>
                <p>Taj Bekal Resort & Spa, Kerala</p>
            </div>

            <div className="tour-card">
                <img src="https://jingleholidaybazar.com/images/poolside.jpg" alt="" />
                <p>Hotel Farimont Jaipur</p>
            </div>
        </div>
  )
}

export default Placehotel
