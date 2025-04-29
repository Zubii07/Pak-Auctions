import React from "react";
import AuctionFiltersSidebar from "./AuctionFiltersSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
//import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const BrowseAuctions = ({ showFilterMobile, setShowFilterMobile, priceRange, setPriceRange, yearRange, setYearRange, activeAuctions }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <AuctionFiltersSidebar
        showFilterMobile={showFilterMobile}
        setShowFilterMobile={setShowFilterMobile}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        yearRange={yearRange}
        setYearRange={setYearRange}
      />

      {/* Listings */}
      <div className="md:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Active Auctions</h2>
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={() => setShowFilterMobile(true)}
            >
              <i className="fas fa-filter"></i>
              <span>Filters</span>
            </button>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by: Ending Soon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ending">Ending Soon</SelectItem>
                <SelectItem value="newest">Newest Listings</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="bids">Most Bids</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeAuctions.map((auction) => (
            <Card key={auction.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={auction.image} alt={`${auction.year} ${auction.make} ${auction.model}`} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                    {auction.bids} bids
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  {auction.year} {auction.make} {auction.model}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="fas fa-tachometer-alt mr-1"></i>
                  <span>{auction.mileage.toLocaleString()} miles</span>
                  <span className="mx-2">•</span>
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  <span>{auction.location}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <div className="text-sm text-gray-500">Current Bid</div>
                    <div className="text-xl font-bold">
                      PKR {auction.priceInPKR.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Time Left</div>
                    <div className="text-orange-600 font-medium">{auction.timeLeft}</div>
                  </div>
                </div>
                <Button className="w-full !rounded-button whitespace-nowrap">
                  <i className="fas fa-gavel mr-2"></i> Place Bid
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="!rounded-button whitespace-nowrap">
            <i className="fas fa-spinner mr-2"></i> Load More Auctions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrowseAuctions;
