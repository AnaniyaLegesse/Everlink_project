import React from 'react'
import { Link } from "react-router-dom";


function About() {
  return (
    <section class="about_section layout_padding">
        <div class="container  ">
            <div class="row">
                <div class="col-md-6">
                    <div class="detail-box">
                        <div class="heading_container">
                            <h2>Welcome to <span>CastSite</span></h2>
                        </div>
                        <p>
                        Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has s
                        </p>
                        <p>
                        Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has s
                        </p>
                    <Link to="/App" className="btn2">Get Started</Link>
                    </div>
                </div>
                <div class="col-md-6 ">
                    <div class="img-box">
                        <img src="/images/about-img.png" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
  </section>
  )
}

export default About