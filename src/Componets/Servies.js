import s1 from "../img/s1.png";
import s2 from "../img/s2.png";
import s3 from "../img/s3.png";
import s4 from "../img/s4.png";

function Services() {
  return (
    <>
      <div className="container">
        <div className="wrap-service-card">
          <div className="service-card">
            <img src={s1} alt="service-img" className="service-img" />
            <h3 className="service-tittle">Guaranteed Savings</h3>
            <h5 className="service-subtittle">
              If you don’t make your membership fee in savings, we’ll refund the
              difference
            </h5>
          </div>
          <div className="service-card">
            <img src={s2} alt="service-img" className="service-img" />
            <h3 className="service-tittle">Try it risk-free</h3>
            <h5 className="service-subtittle">
              If you don’t make your membership fee in savings, we’ll refund the
              difference
            </h5>
          </div>
          <div className="service-card">
            <img src={s3} alt="service-img" className="service-img" />
            <h3 className="service-tittle">Super Fast Delivery</h3>
            <h5 className="service-subtittle">
              If you don’t make your membership fee in savings, we’ll refund the
              difference
            </h5>
          </div>
          <div className="service-card">
            <img src={s4} alt="service-img" className="service-img" />
            <h3 className="service-tittle">1000+ products priced at cost</h3>
            <h5 className="service-subtittle">
              If you don’t make your membership fee in savings, we’ll refund the
              difference
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
