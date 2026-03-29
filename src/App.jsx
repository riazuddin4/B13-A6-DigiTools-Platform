import { useState } from "react";
import Banner from "./component/Banner";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Models from "./component/Models";
import NavBar from "./component/NavBar";
import { ToastContainer } from 'react-toastify'
import GetStarted from "./component/GetStarted";
import Pricing from "./component/Pricing";
import Cta from "./component/Cta";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([])



  return (
    <>
      <NavBar />

      <Banner />


           {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mt-8">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab checked:bg-pink-500 checked:text-white rounded-full w-40"
          aria-label="Products"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab checked:bg-pink-500 checked:text-white rounded-full w-40"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

  

      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}

      {activeTab === "cart" && <Cart  carts={carts} setCarts={setCarts}/>}

      <GetStarted/>
      <Pricing></Pricing>

      <Cta/>

      <Footer />

       <ToastContainer/>
    </>
  );
}

export default App;
