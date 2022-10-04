import im1 from "../img/1.png";
import im2 from "../img/2.png";
import im3 from "../img/3.png";
function Discountcard() {
  return (
    <>
      <div className="container alignment">
        <img src={im1} alt="main-banner" className="discount-card" />
        <img src={im2} alt="main-banner" className="discount-card" />
        <img src={im3} alt="main-banner" className="discount-card" />
      </div>
    </>
  );
}

export default Discountcard;
