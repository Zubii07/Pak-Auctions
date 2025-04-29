import React from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = ({ featuredAuctions, setActiveTab }) => {
  return (
    <section
      className="relative min-h-[600px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Dream Car at Auction Prices
          </h1>
          <p className="text-lg opacity-90">
            Discover exclusive deals on premium vehicles with our transparent bidding process and verified seller network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold"
              onClick={() => setActiveTab("browse")}
            >
              🚀 Start Bidding
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold"
              onClick={() => setActiveTab("sell")}
            >
              🚗 Sell Your Car
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-2xl font-bold">1,250+</p>
              <p className="text-sm opacity-80">Active Auctions</p>
            </div>
            <div>
              <p className="text-2xl font-bold">45,000+</p>
              <p className="text-sm opacity-80">Registered Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm opacity-80">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:ml-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            {featuredAuctions.map((auction) => (
              <SwiperSlide key={auction.id}>
                <div className="relative aspect-[16/10]">
                  <img
                    src={auction.image}
                    alt={`${auction.year} ${auction.make} ${auction.model}`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://source.unsplash.com/random/800x500?${auction.make}+${auction.model}`;
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <h3 className="text-lg font-bold">
                      {auction.year} {auction.make} {auction.model}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <span className="text-sm">Current Bid:</span>
                        <span className="text-lg font-bold ml-1">
                          PKR {auction.priceInPKR.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">⏰</span>
                        <span>{auction.timeLeft} left</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
