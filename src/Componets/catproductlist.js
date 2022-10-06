import { Link } from "react-router-dom";

function catproductlist({ products, catname }) {
  return (
    <>
      <div className="container">
        <h1 className="cat-name">{catname}</h1>
        <div className="product-list">
          {products.map((product) => (
            <>
              <div className="product-card">
                <Link to="/productdetails" className="nava">
                  <img
                    src={product.image}
                    alt="product-img"
                    className="product-img"
                  />
                  <h5 className="product-name">{product.productname}</h5>
                  <h5 className="product-details">{product.productdetails}</h5>
                  <p>
                    <span>{product.price}</span>
                  </p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default catproductlist;
