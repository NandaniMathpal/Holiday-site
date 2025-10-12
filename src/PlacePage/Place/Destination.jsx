import React from 'react'
import './Destination.css'
import Footer from '../../HomePage/Footer/Footer'


const Destination = () => {
  return (
    <div>

      <div className="destination-topimg">
        <img src="https://media.istockphoto.com/id/629266090/photo/woman-watching-sunset-over-himalayas-mount-everest-national-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=NgkZZdJcQv0jUHUeiDrStziZI0LiSUOAlENbG3uM-Bw=" alt="" />
        <div className="desti-imgtext">
                <h2>Destinations</h2>
                <a href="/">Home</a>
            </div>
      </div>

      <div className="heading">
            <h2>POPULAR DESTINATION IN INDIA</h2>
            <p>India is a vibrant land of startling contrasts where both the traditional and modern worlds meet.
The world's seventh largest nation by area and the second largest in terms of population, India boasts a rich
heritage that's the result of centuries of different cultures and religions leaving their mark</p>
        </div>

        <div className="destIndia-img">
            <div className="dest-imgPart1">
                <img src="https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg" alt="" />
            </div>
            <div className="dest-imgPart2">
                <div className="img1">
                    <img src="https://jingleholidaybazar.com/images/Taj-mahal.jpg" alt="" />
                </div>
                <div className="img2">
                    <img src="https://jingleholidaybazar.com/images/Gangtok.jpg" alt="" />
                </div>
            </div>
        </div>

        <div className="heading">
                <h2>POPULAR DESTINATION INTERNATIONAL</h2>
                <p>Mother Earth along with mankind have co-created some of the most spectacular places on this planet.
                    From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind
                    iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!</p>
        </div>
            <div className="destInter-img">
                
                <div className="dest-imgPart3">
                        <img src="https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg" alt="" />
                </div>

                <div className="dest-imgPart4">
                    <div className="img1">
                        <img src="https://jingleholidaybazar.com/images/Taj-mahal.jpg" alt="" />
                    </div>
                    <div className="img2">
                        <img src="https://jingleholidaybazar.com/images/Taj-mahal.jpg" alt="" />
                    </div>
                </div>

            </div>

      <div className="destination-btn">
        <button>Domestic Package</button>
        <button>International Package</button>
        <button className='app'>Whatsapp Now</button>
      </div>

      <div className="dest-contact">
        <button className='destc'>Contact Us</button>
      </div>

    </div>
  )
}

export default Destination
