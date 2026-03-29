import { useState } from "react";
import Banner from "./component/Banner";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Models from "./component/Models";
import NavBar from "./component/NavBar";
import { ToastContainer } from 'react-toastify'

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

  
    </>
  );
}

export default App;
