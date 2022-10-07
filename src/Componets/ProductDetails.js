import p1 from "../img/p-20.webp";
import Catproductlist from "../Componets/catproductlist";

import React, { useState } from "react";
import p2 from "../img/p-2.webp";
import p3 from "../img/p-3.webp";
import p4 from "../img/p-5.webp";
import p5 from "../img/p-4.webp";

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

const pdata = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];

function ProductDetails() {
  const [isActive, setIsActive] = useState(false);
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
            {
              pdata.map((dat) => {
                <>
                  <div className="accordion-item">
                    <div
                      className="accordion-title"
                      onClick={() => setIsActive(!isActive)}
                    >
                      return()
                      <div>{dat.title}</div>
                      <div>{isActive ? "-" : "+"}</div>
                    </div>
                    {isActive && (
                      <div className="accordion-content">{dat.content}</div>
                    )}
                  </div>
                </>;
              })

              // <div className="accordion-item">
              //   <div
              //     className="accordion-title"
              //     onClick={() => setIsActive(!isActive)}
              //   >
              //     <div>{"dsdsdsd"}</div>
              //     <div>{isActive ? "-" : "+"}</div>
              //   </div>
              //   {isActive && (
              //     <div className="accordion-content">{"content"}</div>
              //   )}
              // </div>
            }
            <hr />
          </div>
        </div>
        <Catproductlist products={productlits} catname={"Related Products"} />
      </div>
    </>
  );
}

export default ProductDetails;
