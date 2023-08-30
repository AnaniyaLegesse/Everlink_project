import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";



const Card = ({ id,img, title, star, reviews}) => {

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h5 className="card-title">{title}</h5>
            <section className="card-reviews">
                <AiFillStar className="rating-star" />
                <span className="total-reviews">{reviews}</span>
             </section>
            <section className="card-more">
                <Link to={`/casts/${id}`} className="btns">see more</Link>
            </section>
        </div>
      </section>
    </>
  );
};

export default Card;
