import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isSubcribed, setIsSubscribed] = useState(false);

  const handleSubsScription = () => {
    setIsSubscribed(true);

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setCarts([...carts, model]);
    toast.success("Item added to cart!");
  };

  return (
    <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300">
      <div className="flex justify-center items-center h-56 bg-zinc-200">
        <img className="h-40 w-40 object-contain" src={model.icon} />
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold">{model.name}</h2>
        <p>{model.description}</p>
        <div className="text-2xl font-bold">${model.price}/month</div>
        
         <ul className="mt-3 space-y-2">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handleSubsScription}
          className={`w-full text-white rounded-lg py-2 mt-5 ${
    isSubcribed
      ? "bg-green-500 hover:bg-green-600"
      : "bg-blue-500 hover:bg-blue-600"
  }`}
        >
          {isSubcribed ? "Added to Card" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
