import React from 'react'

function Info_section() {
  return (
    <section class="info_section ">
    <div class="info_container layout_padding2">
      <div class="container">
        <div class="info_logo">
          <a class="navbar-brand" href="index.html"> Cast<span>Site</span> </a>
        </div>
        <div class="info_main">
          <div class="row">
            <div class="col-md-3 ">
              <h5>Casting</h5>
              <p>We Bring you Talents that need to Be on Top</p>
            </div>
            <div class="col-md-3 mx-auto  ">
              <h5>social media </h5>
              <div class="social_box">
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
              </div>
            </div>
            <div class="col-md-3">
              <h5> Our Casting center</h5>
              <p> Lorem ipsum dolor sit amet, consectetur
                adipiscinaliquaLoreadipiscing </p>
            </div>
          </div>
        </div>
        <div class="info_bottom">
          <div class="row">
            <div class="col-lg-9">
              <div class="info_contact ">
                <div class="row">
                  <div class="col-md-3">
                    <a href="#" class="link-box">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span> Location</span>
                    </a>
                  </div>
                  <div class="col-md-5">
                    <a href="#" class="link-box">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span>Call +25192345678</span>
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="#" class="link-box">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <span>castsite@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info_form ">
                <form action="">
                  <input type="email" placeholder="Enter Your Email" />
                  <button>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Info_section