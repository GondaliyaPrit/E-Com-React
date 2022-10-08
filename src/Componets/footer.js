import facebook from "../img/facebook.png";
import insta from "../img/instagram.png";
import youtube from "../img/youtube.png";
import twitter from "../img/twitter.png";
function Footer() {
  return (
    <>
      <footer className="footer-wrap">
        <div class="container">
          <div class="row">
            <div class="col-20">
              <h4 class="footer-heading">Social</h4>
              <div class="w-100">
                <a href="">
                  <p class="social-icon">
                    <img src={insta} alt="" />
                    Instagram
                  </p>
                </a>
                <a href="">
                  <p class="social-icon">
                    <img src={twitter} alt="" />
                    Twitter
                  </p>
                </a>
                <a href="">
                  <p class="social-icon">
                    <img src={facebook} alt="" />
                    Facebook
                  </p>
                </a>
                <a href="">
                  <p class="social-icon">
                    <img src={youtube} alt="" />
                    Youtube
                  </p>
                </a>
              </div>
            </div>
            <div class="col-20">
              <h4 class="footer-heading">Contact</h4>
              <div class="w-100 social-contact">
                <p class="desc">
                  <a href="#">Contact Us</a>
                </p>
                <p class="desc">
                  <a href="#">Call us: +1 254 568-5479</a>
                </p>
                <p class="desc">
                  <a href="#">yourexample@email.com</a>
                </p>
                <p class="desc">
                  <a href="#">example@email.com</a>
                </p>
              </div>
            </div>
            <div class="col-20">
              <h4 class="footer-heading">About</h4>
              <div class="w-100 social-contact">
                <p class="desc">
                  <a href="#">Support Center</a>
                </p>
                <p class="desc">
                  <a href="#">Customer Support</a>
                </p>
                <p class="desc">
                  <a href="#">About Us</a>
                </p>
                <p class="desc">
                  <a href="#">Copyright</a>
                </p>
              </div>
            </div>
            <div class="col-20">
              <h4 class="footer-heading">Customer Care</h4>
              <div class="w-100 social-contact">
                <p class="desc">
                  <a href="#">FAQ & Helps</a>
                </p>
                <p class="desc">
                  <a href="#">Shipping & Delivery</a>
                </p>
                <p class="desc">
                  <a href="#">Return & Exchanges</a>
                </p>
              </div>
            </div>
            <div class="col-20">
              <h4 class="footer-heading">Our Information</h4>
              <div class="w-100 social-contact">
                <p class="desc">
                  <a href="#">Privacy policy update</a>
                </p>
                <p class="desc">
                  <a href="#">Terms & conditions</a>
                </p>
                <p class="desc">
                  <a href="#">Return Policy</a>
                </p>
                <p class="desc">
                  <a href="#">Site Map</a>
                </p>
              </div>
            </div>
            <div class="col-20">
              <h4 class="footer-heading">Top Categories</h4>
              <div class="w-100 social-contact">
                <p class="desc">
                  <a href="#">Men's Wear</a>
                </p>
                <p class="desc">
                  <a href="#">Woman's Wear</a>
                </p>
                <p class="desc">
                  <a href="#">Men's Wear</a>
                </p>
                <p class="desc">
                  <a href="#">Sports Wear</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
