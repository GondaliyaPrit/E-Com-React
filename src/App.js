import "./App.css";
import Herosection from "./Componets/HeroSection";
import Catproductlist from "./Componets/catproductlist";
import Banner from "./Componets/banner";
import p1 from "../src/img/p1.webp";
import p2 from "../src/img/p-2.webp";
import p3 from "../src/img/p-3.webp";
import p4 from "../src/img/p-5.webp";
import p5 from "../src/img/p-4.webp";
import p6 from "../src/img/p-6.webp";
import p7 from "../src/img/p-7.webp";
import p8 from "../src/img/p-8.webp";
import p9 from "../src/img/p-9.webp";
import p10 from "../src/img/p-10.webp";
import Services from "./Componets/Servies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Componets/collection";
import Discountcard from "./Componets/Discountcards";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CartPages from "./Componets/CartPage.tsx";
import ProductDetails from "./Componets/ProductDetails";

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
];

function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <section className="header-main">
        <div className="container">
          <div className="header-inner-main">
            <div className="header-inner header-left">
              <Link to="/">
                <img src="./logo.png" alt="logo-white" className="logo" />
              </Link>
            </div>
            <div className="header-inner header-center">
              <ul className="navbar-list">
                <li className="navbar">
                  <Link to="/MensWear" className="nava">
                    Men Wear
                  </Link>
                </li>
                <li className="navbar">
                  <Link to="/WomensWear" className="nava">
                    Women Wear
                  </Link>
                </li>
                <li className="navbar">
                  <Link to="/Collection" className="nava">
                    Collection
                  </Link>
                </li>
                <li className="navbar">
                  <Link to="/Serach" className="nava">
                    Search
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header-inner header-right">
              {isAuthenticated && (
                <p className="user_detail">
                  {<FontAwesomeIcon icon={faUser} />}
                  &nbsp;&nbsp;Welcome {user.nickname}
                </p>
              )}
              <CartPages />
              <form>
                {isAuthenticated ? (
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="btn-getstarted"
                    id="getstart"
                  >
                    Sign out
                  </button>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    className="btn-getstarted"
                  >
                    Sign in
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Collection" element={<Collection />} />
        <Route
          path="/"
          element={
            <>
              <CartPages />
              <Herosection />
              <Discountcard />
              <Catproductlist products={productlits} catname={"Best Sellers"} />
              <Banner />
              <Catproductlist products={productlits} catname={"New Arrivals"} />
              <Services />
            </>
          }
        />
        <Route path="about" element={<Herosection />} />
        <Route path="/productdetails:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
