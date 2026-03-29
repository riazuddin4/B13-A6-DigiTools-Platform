import { use, useState } from "react";
import ModelCard from "./ModelCard";


const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);
  // const [activeTab, setActiveTab] = useState("model");


  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium digital products designed, <br />
          to boost your productivity and creativity.</p>
      </div>


          {/* name of each tab group should be unique
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
      </div> */}

      <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10">
        {models.map((model) => (
         <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}/>
        ))}
      </div>

      
    </div>

    
  );
};

export default Models;
