import React from "react";
import "./BookItem.js";

const BookItem = props => (
  <div className="numbers">
    <span className="bolder">{props.user.id}</span>
    <img src={props.user.cover.small} alt="" />
    <h3>{props.user.title}</h3>
    <h4>
      <i>
        <span className="lighter">By {props.user.author}</span>
      </i>
    </h4>
    <p>
      <i>
        Release Date: {props.user.releaseDate}
        <br />
        Pages: {props.user.pages}
        <br />
        <span>
          Links: <a href={props.user.link}>shop</a>
        </span>
      </i>
    </p>
  </div>
);
export default BookItem;
