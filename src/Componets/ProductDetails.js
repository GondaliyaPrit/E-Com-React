import p1 from "../img/p-20.webp";
function ProductDetails() {
  return (
    <>
      <div className="container">
        <div className="details-wrap">
          <div className="product-img">
            <img src={p1} alt="product-img" className="product-img" />
            <img src={p1} alt="product-img" className="product-img" />
            <img src={p1} alt="product-img" className="product-img" />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
