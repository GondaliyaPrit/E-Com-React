import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import bag from "../img/bag.png";
import { Link } from "react-router-dom";

import React from "react";

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
                    Serach
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header-inner header-right">
              <img src={bag} alt="cart" className="cart-btn" />
              {isAuthenticated && (
                <p className="user_detail">
                  {<FontAwesomeIcon icon={faUser} />}
                  &nbsp;&nbsp;Welcome {user.nickname}
                </p>
              )}
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

export default Navbar;
