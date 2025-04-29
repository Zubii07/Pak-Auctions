import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = ({ isLoggedIn, setShowLoginModal, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId, tabToActivate = null) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      // Add offset for the sticky header height
      const offset = 64; // Approximately the height of your header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Activate specific tab if needed (for the auction section)
    if (tabToActivate && setActiveTab) {
      setActiveTab(tabToActivate);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center space-x-2"
          >
            <i className="fas fa-car-side text-blue-600 text-2xl"></i>
            <span className="font-bold text-xl">Pak Auctions</span>
          </a>
          <nav className="hidden md:flex ml-10 space-x-6">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a 
              href="#auctions" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('auctions', 'browse');
              }}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Auctions
            </a>
            <a 
              href="#sell" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('auctions', 'sell');
              }}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Sell
            </a>
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              How It Works
            </a>
          </nav>
        </div>

        <div className="hidden md:flex w-1/3 relative">
          <Input placeholder="Search makes, models, or keywords" className="pl-10 pr-4 py-2 w-full" />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button className="relative cursor-pointer">
                <i className="fas fa-bell text-gray-600"></i>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
              </button>
              <div className="cursor-pointer">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </>
          ) : (
            <>
              <div className="hidden sm:flex items-center space-x-3">
                <Button variant="outline" className="!rounded-button" onClick={() => setShowLoginModal(true)}>
                  Log In
                </Button>
                <Button className="!rounded-button" onClick={() => setShowLoginModal(true)}>
                  Register
                </Button>
              </div>
              <button className="sm:hidden text-blue-600" onClick={() => setShowLoginModal(true)}>
                <i className="fas fa-user-circle text-xl"></i>
              </button>
            </>
          )}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md py-4">
          <div className="container mx-auto px-4">
            <div className="relative mb-4">
              <Input placeholder="Search makes, models, or keywords" className="pl-10 pr-4 py-2 w-full" />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <nav className="flex flex-col space-y-3">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
              >
                Home
              </a>
              <a 
                href="#auctions" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('auctions', 'browse');
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
              >
                Auctions
              </a>
              <a 
                href="#sell" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('auctions', 'sell');
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
              >
                Sell
              </a>
              <a 
                href="#features" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                How It Works
              </a>
            </nav>
            {!isLoggedIn && (
              <div className="flex flex-col space-y-3 mt-4 sm:hidden">
                <Button variant="outline" className="!rounded-button w-full" onClick={() => setShowLoginModal(true)}>
                  Log In
                </Button>
                <Button className="!rounded-button w-full" onClick={() => setShowLoginModal(true)}>
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
