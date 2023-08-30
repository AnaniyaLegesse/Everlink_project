import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleCast=()=> {
  const [person ,setPerson]=useState({});

  const { id } = useParams();

  useEffect(()=>{
    const fetchPeople=async()=>{
        const {data}= await  axios.get(`/api/casts/${id}`);
        setPerson(data);
    }

    fetchPeople();
  },[])

  const [list,setList]=useState([]);

  

  const Handler=()=>{
    const newList=list.concat({id});
    setList(newList);
    console.log(list);
    toast.success('Cast Added seccefully');
    
  };

 

  return (
    <>
        <header>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand navbar_brand_mobile" href="index.html"> <span>CastSite</span> </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <Link to="/App" className="navbar-brand"><span>CastSite</span> </Link>
              </div>
            </nav>
          </div>
        </div>
         </header>
    <div className="container px-4 my-4">
      <div className="row gx-5">
        <div className="col">
        <div className="img-box">
          <img src={person.img} className="img-thumbnail" alt="..."/>
          </div>
    </div>
    <div className="col">
        <div className="detail-box">
            <div className="heading_container">
                <h2><span>{person.title}</span></h2>
                </div>
                  <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has s
                  </p>
                  <p>
                  Name: {person.title}<br/>
                  Gender: {person.category}<br/>
                  Proffesion: {person.proffesion}<br/>
                  Expriance: {person.expirance}<br/>
                  Education-Level: {person.education}
                  
                  </p>
         </div>
         <button className="btns align-self-end" onClick={Handler}>Add to list</button>
    </div>
   
  </div>
</div>
      <ToastContainer />
    </>
    
  )
}

export default SingleCast