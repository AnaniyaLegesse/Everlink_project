import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div class="hero_area">
    <header>
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand navbar_brand_mobile" href="index.html"> Cast<span>Site</span> </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
          <a class="navbar-brand " href="index.html"> Cast<span>Site</span> </a>
              
            </div>
          </nav>
        </div>
      </div>
    </header>
    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="detail-box">
                <h1>
                  
                    We Bring you <br />
                    Talents that need to <br />
                    Be on Top
                  
                </h1>
                <div class="btn-box">
                <Link to="/App" className="btn2">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  </div>
  )
}

export default Hero