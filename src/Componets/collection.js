import Catproductlist from "../Componets/catproductlist";
import p1 from "../img/p1.webp";
import p2 from "../img/p-2.webp";
import p3 from "../img/p-3.webp";
import p4 from "../img/p-5.webp";
import p5 from "../img/p-4.webp";
import p6 from "../img/p-6.webp";
import p7 from "../img/p-7.webp";
import p8 from "../img/p-8.webp";
import p9 from "../img/p-9.webp";
import p10 from "../img/p-10.webp";
import React, { useState, useEffect } from "react";

let tenproduct = [];

const productperpage = 5;

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
  {
    image: p6,
    productname: "Oversized W Sweater",
    productdetails:
      "Constructed in cotton sweat fabric, this lovely piece, lacus eu mattis auctor, dolor lectus venenatis nulla, at tristique eros sem vel ante. Sed leo enim, iaculis ornare tristique non, vulputate sit amet ante.",
    price: "$55.00",
  },
  {
    image: p7,
    productname: "Regular Fit Crew-neck T-shirt",
    productdetails:
      "Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
    price: "$12.30",
  },
  {
    image: p8,
    productname: "Gucci Carlton UK",
    productdetails:
      "Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
    price: "$14.99",
  },
  {
    image: p9,
    productname: "Women Fitted Neck T-Shirt",
    productdetails:
      "All about the crisp cut and exceptional quality of the cotton, the Women Fitted V Neck Rib L/S T-Shirt won’t be one you’ll be tossing away ever.",
    price: "$28.00",
  },
  {
    image: p10,
    productname: "NIKE Shoes",
    productdetails:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
    price: "$39.99",
  },
  {
    image: p10,
    productname: "NIKE Shoes",
    productdetails:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
    price: "$39.99",
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
  {
    image: p6,
    productname: "Oversized W Sweater",
    productdetails:
      "Constructed in cotton sweat fabric, this lovely piece, lacus eu mattis auctor, dolor lectus venenatis nulla, at tristique eros sem vel ante. Sed leo enim, iaculis ornare tristique non, vulputate sit amet ante.",
    price: "$55.00",
  },
  {
    image: p7,
    productname: "Regular Fit Crew-neck T-shirt",
    productdetails:
      "Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
    price: "$12.30",
  },
  {
    image: p8,
    productname: "Gucci Carlton UK",
    productdetails:
      "Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
    price: "$14.99",
  },
  {
    image: p9,
    productname: "Women Fitted Neck T-Shirt",
    productdetails:
      "All about the crisp cut and exceptional quality of the cotton, the Women Fitted V Neck Rib L/S T-Shirt won’t be one you’ll be tossing away ever.",
    price: "$28.00",
  },
  {
    image: p10,
    productname: "NIKE Shoes",
    productdetails:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
    price: "$39.99",
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
  {
    image: p6,
    productname: "Oversized W Sweater",
    productdetails:
      "Constructed in cotton sweat fabric, this lovely piece, lacus eu mattis auctor, dolor lectus venenatis nulla, at tristique eros sem vel ante. Sed leo enim, iaculis ornare tristique non, vulputate sit amet ante.",
    price: "$55.00",
  },
  {
    image: p7,
    productname: "Regular Fit Crew-neck T-shirt",
    productdetails:
      "Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
    price: "$12.30",
  },
  {
    image: p8,
    productname: "Gucci Carlton UK",
    productdetails:
      "Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
    price: "$14.99",
  },
  {
    image: p9,
    productname: "Women Fitted Neck T-Shirt",
    productdetails:
      "All about the crisp cut and exceptional quality of the cotton, the Women Fitted V Neck Rib L/S T-Shirt won’t be one you’ll be tossing away ever.",
    price: "$28.00",
  },
  {
    image: p10,
    productname: "NIKE Shoes",
    productdetails:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
    price: "$39.99",
  },
];

const collectionname = [
  "Winter Collection",
  "Summer Collection",
  "Wedding Collection",
  "Trekking Collection",
  "Gift Collection",
  "Mens Collection",
  "Womens Collection",
  "Kids Collection",
  "Party Collection",
];

function Collection() {
  const [ProductToShow, setProductToShow] = useState([]);
  const [load, setLoad] = useState(5);

  const productgroup = (start, end) => {
    const group = productlits.slice(start, end);
    tenproduct = [...tenproduct, ...group];
    setProductToShow(tenproduct);
  };

  useEffect(() => {
    productgroup(0, productperpage);
  }, []);

  const Moreproduct = () => {
    productgroup(load, load + productperpage);
    setLoad(load + productperpage);
  };

  return (
    <>
      <div className="container">
        <div className="collection-container">
          <div className="collection-list">
            <h1 className="collection-name">{"Collection List"}</h1>
            <hr className="collection-line" />
            <div className="listwrap">
              {collectionname.map((colname) => (
                <>
                  <h5 className="collectionlist">{colname}</h5>
                </>
              ))}
            </div>
          </div>
          <div className="collection-data">
            {
              <Catproductlist
                products={ProductToShow}
                catname={"Best Sellers"}
              />
            }

            <div class="btn-loadmore">
              <button onClick={() => Moreproduct()} class="btn-loadmore">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Collection;
