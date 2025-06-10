import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(1);
  const [multiply, setMultiply] = useState(10);
  const [pro, setPro] = useState([]);
  let URL = "https://fakestoreapi.com/products";
  //   function Example() {
  //     console.log("hey");
  //   }
  //   useEffect(() => {
  //     console.log("hey");
  //   }, []);

  //   const FetchData = () => {};

  async function FetchData() {
    let res = await fetch(URL);
    console.log(res);

    let result = await res.json();
    console.log(result);

    setPro(result);
  }
  useEffect(() => {
    FetchData();
  }, []);
  const Addproduct = (id) => {
    console.log(id);
    // alert("welcome");
  };
  return (
    <>
      <button className="btn btn-primary" type="button" onClick={FetchData}>
        Fetch Data
      </button>

      <div className="container">
        <div className="row">
          {pro.map((srujan) => {
            return (
              <>
                <div className="col-lg">
                  <div className="card">
                    <img
                      src={srujan.image}
                      alt=""
                      className="card-img-top img-fluid"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{srujan.title}</h5>
                      <p className="card-text">{srujan.description}</p>
                      <h5>{srujan.price}</h5>
                      <button
                        className="btn btn-success"
                        onClick={() => Addproduct(srujan.id)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* {Example()} */}
      {/* <div className="container">
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span>{count}</span>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div> */}
    </>
  );
}

export default Effect;
