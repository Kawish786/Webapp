import React, { useEffect } from 'react'
import './Service.css'
import {Check,TimerReset,Laptop2,Laptop,SmilePlus,Lightbulb,CloudFog} from 'lucide-react'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

function Service() {

  useEffect(()=>{
    $(".option").click(function(){
      $(".option").removeClass("active");
      $(this).addClass("active");
      
   });
  },[])
     
  return (
    <>
      
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">₹0<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><Check />
              </span>Single User</li>
              <li><span className="fa-li"><Check />
              </span>5GB Storage</li>
              <li><span className="fa-li"><Check />
              </span>Unlimited Public Projects</li>
              <li><span className="fa-li"><Check />
              </span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><TimerReset /></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><TimerReset /></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><TimerReset /></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><TimerReset /></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Join</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">₹9<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><Check />
              </span><strong>5 Users</strong></li>
              <li><span className="fa-li"><Check />
              </span>50GB Storage</li>
              <li><span className="fa-li"><Check />
              </span>Unlimited Public Projects</li>
              <li><span className="fa-li"><Check />
              </span>Community Access</li>
              <li><span className="fa-li"><Check />
              </span>Unlimited Private Projects</li>
              <li><span className="fa-li"><Check />
              </span>Dedicated Phone Support</li>
              <li><span className="fa-li"><Check />
              </span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><TimerReset /></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Join</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">₹49<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><Check />
              </span><strong>Unlimited Users</strong>
              </li>
              <li><span className="fa-li"><Check />
              </span>150GB Storage</li>
              <li><span className="fa-li"><Check />
              </span>Unlimited Public Projects</li>
              <li><span className="fa-li"><Check />
              </span>Community Access</li>
              <li><span className="fa-li"><Check />
              </span>Unlimited Private Projects</li>
              <li><span className="fa-li"><Check />
              </span>Dedicated Phone Support</li>
              <li><span className="fa-li"><Check />
              </span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span className="fa-li"><Check />
              </span>Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Join</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/**  Service componet */}

  

    
   <div className='service'>
   <div className="options">
   <div className="option active" style={{backgroundImage:`url("https://stellapop.com/wp-content/uploads/2021/06/Web-Design.png")`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
         <Laptop2 />
         </div>
         <div className="info">
            <div className="main text-dark">Website Development</div>
            <div className="sub">Deliver a heavenly Website</div>
         </div>
      </div>
   </div>
   <div className="option" style={{backgroundImage:`url("https://hypergr.am/wp-content/uploads/2022/06/web-development-2.jpg")`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
         <Laptop />
         </div>
         <div className="info">
            <div className="main">Web Application Development</div>
            <div className="sub">The process of development</div>
         </div>
      </div>
   </div>
   <div className="option" style={{backgroundImage:`url("https://www.cultmediaagency.com.au/wp-content/uploads/2023/03/Feb2-13_of_the_Best_Free_Social_Media_Management_Tools-shareimages-Feature__1_.jpeg")`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
         <SmilePlus />
         </div> 
         <div className="info">
            <div className="text-dark main">Social Media Management</div>
            <div className="text-dark sub">Process of creating and scheduling content</div>
         </div>
      </div>
   </div>
   <div className="option" style={{backgroundImage:`url("https://i.pinimg.com/736x/04/5d/8d/045d8d5e993b2ecc0afdd7d697673da1.jpg")`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
         <Lightbulb />
         </div>
         <div className="info">
            <div className="main">Branding Solutions</div>
            <div className="sub">A way of distinguishing yourself</div>
         </div>
      </div>
   </div>
   <div className="option" style={{backgroundImage:`url("https://www.enterprisestorageforum.com/wp-content/uploads/2021/02/cloud-storage-1.png")`}}>
      <div className="shadow"></div>
      <div className="label">
         <div className="icon">
         <CloudFog />
         </div>
         <div className="info">
            <div className="main">Cloud Storage Solutions</div>
            <div className="sub">Uses remote servers to save data</div>
         </div>
      </div>
   </div>
</div>
   </div>

    </>
  )
}

export default Service