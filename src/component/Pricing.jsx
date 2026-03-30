const plans = [
  {
    id: 1,
    name: "Starter",
    price: 0,
    desc: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    id: 2,
    name: "Pro",
    price: 29,
    desc: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 99,
    desc: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-xl border p-6 shadow-sm relative ${
              plan.highlight
                ? "bg-linear-to-r from-purple-500 to-pink-500 text-white scale-105"
                : "bg-white"
            }`}
          >
            {/* Most Popular badge */}
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-xs px-3 py-1 rounded-full font-medium text-black">
                Most Popular
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className={`text-sm mt-1 ${plan.highlight ? "text-white/80" : "text-gray-500"}`}>
              {plan.desc}
            </p>

            {/* Price */}
            <div className="text-4xl font-bold mt-4">
              ${plan.price}
              <span className="text-base font-medium">/Month</span>
            </div>

            {/* Features */}
            <ul className="mt-5 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-green-400">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full mt-6 py-2 rounded-full font-medium ${
                plan.highlight
                  ? "bg-white text-purple-600"
                  : "bg-linear-to-r from-purple-500 to-pink-500 text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;