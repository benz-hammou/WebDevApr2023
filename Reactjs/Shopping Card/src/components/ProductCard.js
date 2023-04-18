import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const base_url = "https://dummyjson.com/products";

  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    try {
      const data = await fetch(base_url);
      const res = await data.json();
      setAllProducts(res.products);
      console.log(res.products);
    } catch (error) {
      console.log(error, "something is wrong in the API !!!!");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 products">
      {allProducts.map((single_prod) => {
        const { thumbnail, title, description, price, id } = single_prod;
        return (
          <div className="col">
            <div className="card h-100 bg-secondary text-light" key={id}>
              <img
                src={thumbnail}
                className="product-image"
                alt="product img"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {title} - € {price}
                </h5>
                <p className="card-text">{description}</p>
                <a href className="btn btn-primary buynow" data-id={id}>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
