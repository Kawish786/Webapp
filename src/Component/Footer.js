import React from 'react'
import {Facebook, Twitter, Aperture,LinkedinIcon} from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <div>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">This is a test website made by KAWISH SHAKEEL from KANPUR.  I have always been interested in technology and software development, particularly in the area of Frontend development.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Services</h6>
            <ul className="footer-links">
              <li>Website Development</li>
              <li>Web Application Development</li>
              <li>Social Media Management</li>
              <li>Branding Solutions</li>
              <li>Cloud Storage Solutions</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>Contact Us</li>
              <li>Contribute</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li style={{margin:"5px"}} className='facebook'><Facebook/></li>
              <li style={{margin:"5px"}} className='twitter'><Twitter/></li>
              <li style={{margin:"5px"}} className='aperture'><Aperture/></li>
              <li style={{margin:"5px"}} className='linkedin'><LinkedinIcon/></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}

export default Footer