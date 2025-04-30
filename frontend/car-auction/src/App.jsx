import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TabsSection from './components/TabsSection/TabsSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

// PKR to USD conversion rate as of April 29, 2025
const PKR_CONVERSION_RATE = 282.5;

export default function App() {
  const [activeTab, setActiveTab] = useState('browse');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  const [priceRange, setPriceRange] = useState([10000, 100000]);
  const [yearRange, setYearRange] = useState([2010, 2025]);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Sample data for featured auctions with reliable Unsplash image URLs
  const featuredAuctions = [
    {
      id: 1,
      make: "BMW",
      model: "M4 Competition",
      year: 2023,
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000&auto=format&fit=crop",
      currentBid: 62500,
      priceInPKR: 62500 * PKR_CONVERSION_RATE,
      timeLeft: "2d 4h"
    },
    {
      id: 2,
      make: "Porsche",
      model: "911 Turbo S",
      year: 2022,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop",
      currentBid: 158000,
      priceInPKR: 158000 * PKR_CONVERSION_RATE,
      timeLeft: "1d 12h"
    },
    {
      id: 3,
      make: "Audi",
      model: "RS7 Sportback",
      year: 2022,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
      currentBid: 89000,
      priceInPKR: 89000 * PKR_CONVERSION_RATE,
      timeLeft: "3d 8h"
    }
  ];
  
  // Sample data for active auctions with reliable Unsplash image URLs
  const activeAuctions = [
    {
      id: 1,
      make: "BMW",
      model: "M4 Competition",
      year: 2023,
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000&auto=format&fit=crop",
      currentBid: 62500,
      priceInPKR: 62500 * PKR_CONVERSION_RATE,
      timeLeft: "2d 4h",
      mileage: 8750,
      location: "Karachi",
      bids: 18
    },
    {
      id: 2,
      make: "Porsche",
      model: "911 Turbo S",
      year: 2022,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop",
      currentBid: 158000,
      priceInPKR: 158000 * PKR_CONVERSION_RATE,
      timeLeft: "1d 12h",
      mileage: 5200,
      location: "Lahore",
      bids: 24
    },
    {
      id: 3,
      make: "Audi",
      model: "RS7 Sportback",
      year: 2022,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
      currentBid: 89000,
      priceInPKR: 89000 * PKR_CONVERSION_RATE,
      timeLeft: "3d 8h",
      mileage: 12500,
      location: "Islamabad",
      bids: 15
    },
    {
      id: 4,
      make: "Mercedes-Benz",
      model: "AMG GT",
      year: 2021,
      image: "https://images.unsplash.com/photo-1646194314870-6e25f74e6e60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtZyUyMGd0fGVufDB8fDB8fHww",
      currentBid: 125000,
      priceInPKR: 125000 * PKR_CONVERSION_RATE,
      timeLeft: "1d 6h",
      mileage: 9800,
      location: "Rawalpindi",
      bids: 20
    },
    {
      id: 5,
      make: "Tesla",
      model: "Model S Plaid",
      year: 2023,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop",
      currentBid: 95000,
      priceInPKR: 95000 * PKR_CONVERSION_RATE,
      timeLeft: "4d 2h",
      mileage: 3500,
      location: "Faisalabad",
      bids: 12
    },
    {
      id: 6,
      make: "Lamborghini",
      model: "Huracán",
      year: 2022,
      image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbWJvcmdoaW5pfGVufDB8fDB8fHww",
      currentBid: 245000,
      priceInPKR: 245000 * PKR_CONVERSION_RATE,
      timeLeft: "2d 12h",
      mileage: 4200,
      location: "Peshawar",
      bids: 30
    }
  ];

  // Sample data for similar vehicles
  const similarVehicles = activeAuctions.slice(0, 3);

  // Sample countdown data
  const countdown = {
    days: 2,
    hours: 4,
    minutes: 35,
    seconds: 12
  };

  return (
    <div className="min-h-[1024px] bg-white">
      <Header 
        isLoggedIn={isLoggedIn} 
        setShowLoginModal={setShowLoginModal} 
        setActiveTab={setActiveTab}
      />
      <section id="home">
        <Hero 
          featuredAuctions={featuredAuctions} 
          setActiveTab={setActiveTab} 
        />
      </section>
      <section id="auctions">
        <TabsSection 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          showFilterMobile={showFilterMobile}
          setShowFilterMobile={setShowFilterMobile}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          yearRange={yearRange}
          setYearRange={setYearRange}
          activeAuctions={activeAuctions}
          similarVehicles={similarVehicles}
          countdown={countdown}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="sell">
        <CallToAction setActiveTab={setActiveTab} />
      </section>
      <Footer />
      <LoginModal 
        showLoginModal={showLoginModal} 
        setShowLoginModal={setShowLoginModal} 
        setIsLoggedIn={setIsLoggedIn} 
      />
    </div>
  );
}
