import React from 'react'
import "../css/Bootstrap.css"
import "../css/Style.css"
import "../css/responsive.css"
import "../css/style.css.map"
import Services from './Services'
import About from './About.js'
import Info_section from './Info_section'
import Hero from './Hero'
import Partners from './Partners'
import Contact from './Contact'


function Front() {
  const servicelinks=[
      {
        title:"Actors",
        caption: "we will provide talented actors"
       },
       {
        title:"camera-crew",
        caption:"we have the best camera opraters"
       },
       {
        title:"Producers",
        caption: "we will provide talented actors"
       },
       {
        title:"Writers",
        caption:"we have the best camera opraters"
       }, {
        title:"Sound Players",
        caption: "we will provide talented actors"
       },
       {
        title:"Performers",
        caption:"we have the best camera opraters"
       }
];
const partnerlinks=[
  {
    logo:"frontend/src/images/kik.png"
  },
  {
    logo:"frontend/src/images/meta.png"  },
  {
    logo:"frontend/src/images/spotify.png"  },
  {
    logo:"frontend/src/images/stumbleupon.png"  },
  {
    logo:"frontend/src/images/vimeo.png"  }, 
  {
    logo:"frontend/src/images/vk.png"  }
];
  return (
    <>
  <Hero/>
  <About/>
  <Partners partnerlinks={partnerlinks}/>
  <Services servicelinks={servicelinks}/>
  <Contact/>
  <Info_section/>

    </>
  )
}

export default Front