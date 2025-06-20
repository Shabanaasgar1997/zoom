import { Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import Virat from "./Components/Banner";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";
import Products from "./Pages/Products";

import ProductDetails from "./Products.json";
import State from "./States/State";
import Formvalidation from "./States/Formvalidation";
import Count from "./HOOKS/useState/Count";
import Reference from "./HOOKS/useRef/Reference";
import Red from "./HOOKS/useReducers/Red";
import Effect from "./HOOKS/useEffect/Effect";
import Parent from "./HOOKS/useContext/Parent";
import Mem from "./HOOKS/useMemo/Mem";
import One from "./HOOKS/useCallback/One";
import Create from "./CRUD/Create";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";

function App() {
  let companyName = "ReactJS Swiggy";
  // const ClickMe = () => {
  //   alert("HEY U CLICKED");
  // };
  function ClickMe() {
    alert("HEY U CLICKED");
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
    // <div className="App">
    //   <Navbar prp1="ZOMATO" prp2={80} prp3={true} />
    //   {/* <Banner /> */}
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/home" element={<Home prop1={ClickMe} />} />
    //     <Route path="/about" element={<About />} />
    //     <Route
    //       path="/services"
    //       element={<Services props1="WELCOMEeeeeeeeeeeeeeee" props2="BACK" />}
    //     />
    //     <Route path="/state" element={<State />} />
    //     <Route
    //       path="/products"
    //       element={<Products propp1={ProductDetails} />}
    //     />
    //     <Route path="/form" element={<Formvalidation />} />
    //     <Route path="*" element={<PageNotFound />}>
    //       <Route path=":virat" element={<PageNotFound />} />
    //     </Route>
    //     <Route path="/count" element={<Count />} />
    //     <Route path="/ref" element={<Reference />} />
    //     <Route path="/red" element={<Red />} />
    //     <Route path="/eff" element={<Effect />} />
    //     <Route path="/context" element={<Parent />} />
    //     <Route path="/memo" element={<Mem />} />
    //     <Route path="/call" element={<One />} />
    //   </Routes>
    // </div>
  );
}

export default App;
