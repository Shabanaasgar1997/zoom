import React, { useRef } from "react";

function Reference() {
  let kohli = useRef();
  let image = useRef();

  const Customize = () => {
    console.log(kohli);
    console.log(kohli.current);
    kohli.current.style = "border:5px solid red;background:blue";
  };

  const ChangeImage = () => {
    console.log(image);
    console.log(image.current);
    image.current.style =
      "border-radius:50%;border:5px solid pink;box-shadow:5px 2px 5px gray";
  };
  return (
    <>
      <div className="container">
        <form action="" className="w-50">
          <input
            type="text"
            className="form-control"
            ref={kohli}
            onClick={Customize}
          />
        </form>
      </div>

      <img
        src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        ref={image}
        onMouseOver={ChangeImage}
      />
    </>
  );
}

export default Reference;
