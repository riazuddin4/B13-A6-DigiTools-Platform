const stats = [
  {
    id: 1,
    value: "50K+",
    label: "Active Users",
  },
  {
    id: 2,
    value: "200+",
    label: "Premium Tools",
  },
  {
    id: 3,
    value: "4.9",
    label: "Rating",
  },
];

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-10 mx-auto">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white">
        
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`py-6 ${
              index !== stats.length - 1
                ? "md:border-r border-white/30"
                : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {stat.value}
            </h2>
            <p className="text-white/80 mt-2">{stat.label}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Stats;