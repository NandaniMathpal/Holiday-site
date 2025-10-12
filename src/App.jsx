import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './HomePage/Navbar/Navbar';
import Home from './HomePage/Home';
import About from './AboutPage/About';
import Contact from './ContactPage/Contact';
import MyPlace from './PlacePage/MyPlace';
import PayNow from './PayNowPage/PayNow';
import Destination from './PlacePage/Place/Destination';
import Placehotel from './PlacePage/Place/PlaceHotel';
import Placegallery from './PlacePage/Place/Placegallery';
import DomesticPackage from './PackagePage/DomesticPackage/DomesticPackage';
import InternaPackage from './PackagePage/InterPackage/InternaPackage';
import Footer from './HomePage/Footer/Footer';
import Th from './InternationalPage/Thailand/Th';
import Bel from './InternationalPage/Belgium/Bel';
import Can from './InternationalPage/Canada/Can';
import North from './DomesticPage/North/North';
import West from './DomesticPage/West/West';
import East from './DomesticPage/East/East';
import South from './DomesticPage/South/South';
import Dub from './InternationalPage/Dubai/Dub';
import Ger from './InternationalPage/Germany/Ger';
import Swit from './InternationalPage/Switzerland/Swit';
import Sing from './InternationalPage/Singapure/Sing';
import Mal from './InternationalPage/Malaysia/Mal';
import Mld from './InternationalPage/Maldives/Mld';
import Ice from './InternationalPage/Iceland/Ice';
import Nep from './InternationalPage/Nepal/Nep';
import Uk from './ReadBlogs/Uk/Uk';
import Mumbai from './ReadBlogs/Mumbai/Mumbai';
import Ladakh from './ReadBlogs/Ladakh/Ladakh';
import Rajasthan from './ReadBlogs/Rajasthan/Rajasthan';
import Kedarnath from './ReadBlogs/Kedarnath/Kedarnath';
import Badrinath from './ReadBlogs/Badrinath/Badrinath';
import Chardham from './ReadBlogs/Chardham/Chardham';
import Mavaishno from './ReadBlogs/MaVaishno/Mavaishno';

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='place' element={<MyPlace/>}/>
                <Route path='/domestic' element={<DomesticPackage/>}/>
                <Route path='/interpackage' element={<InternaPackage/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/pay' element={<PayNow/>}/>
                <Route path ="/destination" element={<Destination/>}/>
                <Route path='/hotels' element={<Placehotel/>}/>
                <Route path='/gallery' element={<Placegallery/>}/>

                <Route path='/thailand' element={<Th/>}/>
                <Route path='/belgium' element={<Bel/>}/>
                <Route path='/canada' element={<Can/>}/>
                <Route path='/dubai' element={<Dub/>}/>
                <Route path='/germany' element={<Ger/>}/>
                <Route path='/switzerland' element={<Swit/>}/>
                <Route path='/singapore' element={<Sing/>}/>
                <Route path='/malaysia' element={<Mal/>}/>
                <Route path='/maldives' element={<Mld/>}/>
                <Route path='/iceland' element={<Ice/>}/>
                <Route path='nepal' element={<Nep/>}/>

                <Route path='/north' element={<North/>}/>
                <Route path='/west' element={<West/>}/>
                <Route path='/east' element={<East/>}/>
                <Route path='/south' element={<South/>}/>
                
                <Route path='/uttrakhand' element={<Uk/>}/>
                <Route path='/mumbai' element={<Mumbai/>}/>
                <Route path='/ladakh' element={<Ladakh/>}/>
                <Route path='/rajasthan' element={<Rajasthan/>}/>
                <Route path='/kedarnath' element={<Kedarnath/>}/>
                <Route path='/badrinath' element={<Badrinath/>}/>
                <Route path='/chardham' element={<Chardham/>}/>
                <Route path='/mavaishnodevi' element={<Mavaishno/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
