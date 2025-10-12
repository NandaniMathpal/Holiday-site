import React from 'react'
import './Bel.css'
import Belimg from './Belimg'
import VisitTime from './VisitTime'

const Bel = () => {

     const Blogs = [
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-dinant-tour-package.png",
            title:'Dinant Tour',
            desc: 'Dinant is a charming town located in Belgium that sits on the banks of the Meuse River. This town is renowned for its stunning architecture, impressive citadel, and rich history. Tourists must not miss visiting some of its iconic landmarks such as the Collegiate Church of Notre-Dame, the Saxophone Museum, the Maison Leffe Brewery, and the Cave La Merveilleuse.'
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-brussels-tour-package.png",
            title:'Brussels Tour',
            desc: 'Brussels, the capital of Belgium, offers many sightseeing opportunities. Tour the iconic Atomium, a one-of-a-kind building designed to resemble an atom. Explore the historical Grand Place, recognized as a UNESCO World Heritage site, and admire the breathtaking architecture. Take a leisurely stroll through the charming streets of the Marolles neighborhood, or stop by the renowned Manneken Pis statue.'
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-bruges-tour-package.png",
            title:'Bruges Tour',
            desc: 'Bruges is a beautiful city in Belgium that offers visitors many sightseeing opportunities. You can explore the famous Belfry tower, take a boat tour along the picturesque canals, visit the Markt square and Gothic-style City Hall, admire the artwork on display at the Groeningemuseum, and indulge in delicious Belgian chocolate at one of the many local chocolatiers. Theres plenty to do and see in Bruges!'
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-antwerp-tour-package.png",
            title:'Antwerp Tour',
            desc: 'Antwerp, located in Belgium, offers numerous fascinating tourist attractions to explore. Visitors can marvel at the stunning Cathedral of Our Lady and delve into the rich history of the Museum Plantin-Moretus. The Antwerp Zoo is a charming destination to observe various animals, while the lively Grote Markt square offers a vibrant atmosphere. Additionally, the city boasts a renowned diamond district and mouth-watering cuisine to indulge in.'
        },
        {
            img:"https://jingleholidaybazar.com/img/jingle-holiday-bazar-ypres-tour-package.png",
            title:'Ypres Tour',
            desc: 'Ypres is a well-known tourist spot in Belgiums Flemish region. The city boasts rich history and stunning architecture, offering visitors the chance to explore World War I battlefields, monuments, the Menin Gate Memorial, the In Flanders Fields Museum, and the Gothic-style Saint Martins Cathedral. There are also charming cafes and restaurants to enjoy while taking in the sights.'
        }
    ]

  return (
    <div>
        <div className="belgium-topimg">
                <img src="https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=n--GqoESds4mEITCucp1YoJz5cQWcY7MZqK7WD_sG9g=" alt="" />
                <div className="belgium-toptext">
                    <h2>Belgium Tour Details</h2>
                    <a href="/">Home</a>
                </div>
            </div>

            <div className="bel-head">
                <h2>Belgium Tour Package</h2>
            </div>

            <Belimg/>
            <VisitTime/>

        <div className="tour">
            <h2>Latest Tour Package</h2>
        </div>

        <div className="blogpost">
            {Blogs.map((item,index)=>
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

export default Bel
