import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// PKR to USD conversion rate as of April 29, 2025
const PKR_CONVERSION_RATE = 282.5;

const AuctionFiltersSidebar = ({ showFilterMobile, setShowFilterMobile, priceRange, setPriceRange, yearRange, setYearRange }) => {
  const handleMobileClose = () => {
    setShowFilterMobile(false);
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value, 10);
    setPriceRange(newPriceRange);
  };

  const handleYearChange = (e, index) => {
    const newYearRange = [...yearRange];
    newYearRange[index] = parseInt(e.target.value, 10);
    setYearRange(newYearRange);
  };

  const sidebarClasses = `
    ${showFilterMobile ? "fixed inset-0 z-50 block" : "hidden md:block"} 
    md:static md:z-auto w-full md:w-1/4 h-full md:h-auto bg-white md:bg-transparent
  `;

  const overlayClasses = `
    ${showFilterMobile ? "fixed inset-0 bg-black/50 z-40" : "hidden"}
    md:hidden
  `;

  return (
    <>
      <div className={overlayClasses} onClick={handleMobileClose}></div>
      <div className={sidebarClasses}>
        <div className="bg-white md:bg-gray-50 md:rounded-xl md:border p-4 h-full md:h-auto overflow-auto">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h3 className="text-lg font-bold">Filters</h3>
            <button
              className="md:hidden text-gray-500"
              onClick={handleMobileClose}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="space-y-6">
            {/* Price Range */}
            <div>
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="flex justify-between mb-2">
                <span>PKR {(priceRange[0] * PKR_CONVERSION_RATE).toLocaleString()}</span>
                <span>PKR {(priceRange[1] * PKR_CONVERSION_RATE).toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="range"
                  min="0"
                  max="150000"
                  step="1000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="150000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Year */}
            <div>
              <h4 className="font-medium mb-3">Year</h4>
              <div className="flex justify-between mb-2">
                <span>{yearRange[0]}</span>
                <span>{yearRange[1]}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="range"
                  min="1990"
                  max="2025"
                  step="1"
                  value={yearRange[0]}
                  onChange={(e) => handleYearChange(e, 0)}
                  className="w-full"
                />
                <input
                  type="range"
                  min="1990"
                  max="2025"
                  step="1"
                  value={yearRange[1]}
                  onChange={(e) => handleYearChange(e, 1)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Make */}
            <div>
              <h4 className="font-medium mb-3">Make</h4>
              <div className="space-y-2">
                {["BMW", "Audi", "Mercedes-Benz", "Porsche", "Tesla", "Ferrari", "Lamborghini"].map((make) => (
                  <div key={make} className="flex items-center">
                    <Checkbox id={`make-${make}`} />
                    <label htmlFor={`make-${make}`} className="ml-2 text-sm cursor-pointer">
                      {make}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Body Type */}
            <div>
              <h4 className="font-medium mb-3">Body Type</h4>
              <div className="space-y-2">
                {["Sedan", "SUV", "Coupe", "Convertible", "Wagon", "Truck"].map((type) => (
                  <div key={type} className="flex items-center">
                    <Checkbox id={`type-${type}`} />
                    <label htmlFor={`type-${type}`} className="ml-2 text-sm cursor-pointer">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Fuel Type */}
            <div>
              <h4 className="font-medium mb-3">Fuel Type</h4>
              <div className="space-y-2">
                {["Gasoline", "Diesel", "Electric", "Hybrid"].map((fuel) => (
                  <div key={fuel} className="flex items-center">
                    <Checkbox id={`fuel-${fuel}`} />
                    <label htmlFor={`fuel-${fuel}`} className="ml-2 text-sm cursor-pointer">
                      {fuel}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" className="w-full !rounded-button">
                <i className="fas fa-redo mr-2"></i> Reset Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionFiltersSidebar;