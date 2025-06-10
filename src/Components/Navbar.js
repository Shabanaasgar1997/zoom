import React, { Component } from "react";
import "./Navbar.css";
import "./style.scss";
import { Link } from "react-router-dom";

// export default class Navbar extends Component {
//   render() {
//     console.log();
//     return (
//       <>
//         <navbar className="navbar navbar-expand-lg">
//           <Link to="/" className="navbar-brand"></Link>
//           <ul class="navbar_nav">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about" href="">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/services">Services</Link>
//             </li>
//           </ul>
//         </navbar>

//         {/* <div className="container bg-warning">
//           <div className="item text-danger">1</div>
//           <div className="item">2</div>
//           <div className="item">3</div>
//           <div className="item">4</div>
//           <div className="item">5</div>
//           <div className="item">6</div>
//           <div className="item">7</div>
//           <div className="item">8</div>
//           <div className="item">9</div>
//           <div className="item">10</div>
//         </div> */}

//         {/* <div>
//           <h1>hey welcome to the class component</h1>
//         </div>
//         <div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
//             architecto.
//           </p>
//         </div> */}
//       </>
//     );
//   }
// }

// // export default Navbar;

function Navbar(props) {
  console.log(props.prp1);
  return (
    <>
      <navbar className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          {props.prp1}
        </Link>
        <ul class="navbar-nav navbar_nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" href="">
              About
            </Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/services">
              {props.prp3 === true ? "Logout" : "Signup"}
            </Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/state">State</Link>
          </li>

          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </navbar>

      {/* <div className="container bg-warning">
        {props.prp2}
        {props.prp3}
      </div> */}
    </>
  );
}

export default Navbar;
