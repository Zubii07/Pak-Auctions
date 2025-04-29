import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      quote: "AutoBid made the process incredibly smooth. I got my dream Porsche for below market value!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
      car: "Purchased a Porsche 911 Turbo S"
    },
    {
      name: "Sarah Rodriguez",
      quote: "My Mercedes sold faster and at a better price than expected. Highly recommend AutoBid!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      car: "Sold a Mercedes-Benz S-Class"
    },
    {
      name: "Robert Johnson",
      quote: "Bought 3 cars here. Amazing service, trustworthy platform!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
      car: "Purchased multiple vehicles"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of car enthusiasts found their dream vehicles through AutoBid.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            slidesPerView={1}
            className="pb-12"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <Avatar className="w-20 h-20 mb-4 md:mb-0 md:mr-6">
                      <AvatarImage src={item.image} />
                      <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-400"></i>
                        ))}
                      </div>
                      <p className="text-lg italic mb-4">"{item.quote}"</p>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.car}</div>
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

export default Testimonials;
