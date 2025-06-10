import React from "react";

function Products(props) {
  console.log(props.propp1);
  return (
    <>
      <div className="container">
        <div className="row">
          {props.propp1.map((product) => {
            return (
              <>
                <div className="col-lg">
                  <div className="card">
                    <img
                      src={product.image}
                      alt=""
                      className="card-img-top img-fluid"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <h6>{product.price}</h6>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
