import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team working"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Websites for <br />
          <span className="text-blue-600">Entre</span>
          <span className="text-green-600">preneurs.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
          Stop struggling with DIY builders. We design and build professional,
          high-performing websites that help you launch fast and grow your
          business.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#/pricing"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition font-medium"
          >
            Build My Website →
          </a>

          <a
            href="#/about"
            className="border border-gray-300 px-8 py-3 rounded-lg bg-white hover:bg-gray-50 transition font-medium"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* White Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Home;
