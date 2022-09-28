import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import bag from "../img/bag.png";

import React from "react";

function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <section class="header-main">
        <div class="container">
          <div class="header-inner-main">
            <div class="header-inner header-left">
              <img src="./logo.png" alt="logo-white" class="logo" />
            </div>
            <div class="header-inner header-center">
              <ul class="navbar-list">
                <li class="navbar">
                  <a class="nava">Home</a>
                </li>
                <li class="navbar">
                  <a class="nava">Features</a>
                </li>
                <li class="navbar">
                  <a class="nava">Services</a>
                </li>
                <li class="navbar">
                  <a class="nava">Company</a>
                </li>
              </ul>
            </div>

            <div class="header-inner header-right">
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
                    class="btn-getstarted"
                    id="getstart"
                  >
                    Sign out
                  </button>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    class="btn-getstarted"
                    id="getstart"
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
