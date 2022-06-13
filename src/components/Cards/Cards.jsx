import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import "./Cards.css";

const Cards = ({ cards }) => {
  console.log("===== cards", cards);

  return (
    <div className="right-column">
      <ul className="container">
        {cards.map((card) => {
          return (
            <li>
              <section className="card" key={card.id}>
                <div className="image-container">
                  <img src="xyz.jpeg" alt="" />
                </div>
                <div className="text-container">
                  <h3>
                    <a href="#">{card.title}</a>
                  </h3>
                  <div className="content card-content">
                    <p className="description">{card.discription}</p>
                  </div>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
