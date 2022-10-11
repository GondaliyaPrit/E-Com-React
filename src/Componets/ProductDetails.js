import p1 from "../img/p-20.webp";
import Catproductlist from "../Componets/catproductlist";
import { Rating } from "react-simple-star-rating";

import React, { useState } from "react";
import p2 from "../img/p-2.webp";
import p3 from "../img/p-3.webp";
import p4 from "../img/p-5.webp";
import p5 from "../img/p-4.webp";
import Footer from "./footer";

const productlits = [
  {
    image: p1,
    productname: "Nike Black",
    productdetails:
      "Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world",
    price: "$11.00",
  },
  {
    image: p2,
    productname: "Hermes Carlton London",
    productdetails:
      "Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
    price: "$12.30",
  },
  {
    image: p3,
    productname: "Zara Shoes Green",
    productdetails:
      "Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature",
    price: "$50.00",
  },
  {
    image: p4,
    productname: "12 Eco-Friendly Clothing Brands That",
    productdetails:
      "12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
    price: "$20.00",
  },
  {
    image: p5,
    productname: "Regular Fit Flannel Shirt",
    productdetails:
      "The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment.",
    price: "$8.00",
  },
];

function ProductDetails() {
  const [isActive, setIsActive] = useState(false);
  const [isAdditional, setAdditional] = useState(false);
  const [isCustomer, setCustomer] = useState(false);
  const [rating, setRating] = useState(0);
  var handleRating = function (rate) {
    setRating(rate);
  };

  const onPointerEnter = () => null;
  const onPointerLeave = () => null;
  var onPointerMove = function (value, index) {
    return null;
  };

  return (
    <>
      <div className="container">
        <div className="details-wrap">
          <div className="productdetails-img">
            <img src={p1} alt="product-img" />
            <img src={p1} alt="product-img" />
            <img src={p1} alt="product-img" />
          </div>
          <div className="product-details">
            <h3 className="prroductdetails-name">Maniac Red Boys</h3>
            <h3 className="prroductdetails-details">
              Children’s clothing/ kids wear is usually more casual than adult
              clothing, fit play and rest. Hosiery is usually used. More
              recently, however, tons of childrenswear is heavily influenced by
              trends in adult fashion
            </h3>
            <h3 className="productdetails-price">$40.00</h3>
            <hr />
            <h3 className="productdetails-size">Size</h3>
            <div className="size-list">
              <div className="size">
                <h3>S</h3>
              </div>
              <div className="size">
                <h3>M</h3>
              </div>
              <div className="size">
                <h3>L</h3>
              </div>
              <div className="size">
                <h3>XL</h3>
              </div>
            </div>
            <hr />

            <div className="qty-wrap">
              <div>
                <h3 className="minus qty-btn">-</h3>
              </div>
              <div>
                <h2 className="qty-total">5</h2>
              </div>
              <div>
                <h3 className="pluse qty-btn">+</h3>
              </div>
              <div className="productdetails-addcart-btn">
                <h3 className="add-cart-btn-tittle">ADD TO CART </h3>
              </div>
            </div>
            <hr />
            <h4 className="productdetails-size">
              SKU :<span className="productdetails-contant"> N/A</span>
            </h4>
            <h4 className="productdetails-size">
              Category : <span className="productdetails-contant"> Kids</span>
            </h4>
            <h4 className="productdetails-size">
              Tags :
              <span className="productdetails-contant"> Casual,Cotton,Red</span>
            </h4>
            <hr />

            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => {
                  setAdditional(!isAdditional);
                  setCustomer(false);
                  setIsActive(false);
                }}
              >
                <div>{"Product Details"}</div>
                <div className="accordion-icon">{isAdditional ? "-" : "+"}</div>
              </div>
              {isAdditional && (
                <div className="accordion-content">
                  {
                    "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!."
                  }
                </div>
              )}
            </div>
            <hr />

            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => {
                  setIsActive(!isActive);
                  setCustomer(false);
                  setAdditional(false);
                }}
              >
                <div>{"Additional Information"}</div>
                <div className="accordion-icon">{isActive ? "-" : "+"}</div>
              </div>
              {isActive && (
                <div className="accordion-content">
                  {
                    "Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum"
                  }
                </div>
              )}
            </div>

            <hr />
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => {
                  setCustomer(!isCustomer);
                  setIsActive(false);
                  setAdditional(false);
                }}
              >
                <div>{"Customer Reviews"}</div>
                <div className="accordion-icon">{isCustomer ? "-" : "+"}</div>
              </div>
              {isCustomer && (
                <div className="accordion-content">
                  {
                    <>
                      <h4 className="detailsreview-content">
                        Please read the documentation carefully . We also have
                        some online video tutorials regarding this issue . If
                        the problem remains, Please Open a ticket in the support
                        forum
                      </h4>
                      <h4 className="productdetails-size">Your Rating *</h4>
                      <Rating
                        className="detailspage-rating"
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                      />
                      <h4 className="productdetails-size">Message *</h4>
                    </>
                  }
                </div>
              )}
            </div>
          </div>
        </div>
        <Catproductlist products={productlits} catname={"Related Products"} />
        <Footer />
      </div>
    </>
  );
}

export default ProductDetails;
