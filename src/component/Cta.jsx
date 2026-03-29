const Cta = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20 text-center text-white">
      
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold">
        Ready To Transform Your Workflow?
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-white/80 max-w-2xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
        
        {/* Explore Button */}
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
          Explore Products
        </button>

        {/* Pricing Button */}
        <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
          View Pricing
        </button>
      </div>

      {/* Bottom text */}
      <p className="mt-6 text-sm text-white/70">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default Cta;