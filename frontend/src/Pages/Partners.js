import React from 'react'

function Partners({partnerlinks}) {
  return (
    <section class="portfolio_section ">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>Our Partners</h2>
            </div>
            </div>
            <div class="row justify-content-center">
                {
                    partnerlinks && partnerlinks.map(({logo}, index)=>

                    
                    <div class="col-sm-1">
                    <div class="box ">
                        <div class="img-box">
                            <img src={logo} alt="" />
                        </div>
                        <div class="detail-box">
                            
                            
                        </div>
                    </div>
                    </div>
                    

                    )
                    }
             </div>
  </section>
  )
}

export default Partners