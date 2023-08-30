import React from 'react'
import { Link } from "react-router-dom";

function Services({servicelinks}) {
  return (
    
    <section class="service_section layout_padding">
        <div class="container ">
            <div class="heading_container heading_center">
                <h2>Our <span>Services</span></h2>
                <p>we provide you great Talents that have been examined and reviewd with our casting process.</p>
            </div>
            <div class="row">
             {
                servicelinks && servicelinks.map(({title, caption}, index)=>

                <div class="col-sm-6 col-md-4">
                    <div class="box ">
                        <div class="img-box">
                            <img src="https://source.unsplash.com/random" alt="" />
                            
                        </div>
                        <div class="detail-box">
                            <h5>{title}</h5>
                            <p>{caption}</p>
                        </div>
                    </div>
                    </div>

                )
                }
               
            </div>
            <div class="btn-box">
            <Link to="/App" className="btn2">Get Started</Link>
        </div>
        </div>
</section>
    
  
  )
}

export default Services