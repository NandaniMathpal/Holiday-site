import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="footer">

            <div className="footer-aboutus">
                <h3><Link to='/'>Jindal Holidays Bazar</Link></h3>
                <ul>
                    <li>Phone</li>
                    <li>jingleholidaybazar@gmail.com</li>
                    <li>abc@gmail.com</li>
                    <li>24/7 customer support</li>
                </ul>
            </div>
            <div className="footer-quicklinks">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About US</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/destination'>Destination</Link></li>
                    <li><Link to='/hotels'>Hotels</Link></li>
                </ul>
            </div>
            <div className="footer-products">
                <h3>Products</h3>
                <ul>
                    <li><Link to='/uttrakhand'>Uttrakhand</Link></li>
                    <li><Link to='/mumbai'>Mumbai</Link></li>
                    <li><Link to='/ladakh'>Ladakh</Link></li>
                    <li><Link to='/rajasthan'>Rajasthan</Link></li>
                </ul>
            </div>
            <div className="footer-package">
                <h3>International Packages</h3>
                <ul>
                    <li><Link to='/singapore'>Singapore</Link></li>
                    <li><Link to='/switzerland'>Switzerland</Link></li>
                    <li><Link to='/dubai'>Dubai</Link></li>
                    <li><Link to='/thailand'>Thailand</Link></li>
                </ul>
            </div>
            <div className="footer-yatra">
                <h3>Yatra</h3>
                <ul>
                    <li><Link to='/kedarnath'>Kedarnath</Link></li>
                    <li><Link to='/badrinath'>Badrinath</Link></li>
                    <li><Link to='/chardham'>Char Dham Yatra</Link></li>
                    <li><Link to='/mavaishnodevi'>Meta Vaishno Devi</Link></li>
                </ul>
            </div>

            <div className="poweredby">
                <p>Powered By |<a href='https://namratauniversal.com'> Namrata Universal </a>| All Rights are Reserved by Jingleholidaybazar</p>
            </div>
            </div>

        </footer>
    );
};

export default Footer;
