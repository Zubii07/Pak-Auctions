import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BrowseAuctions from "./BrowseAuctions";
import SellYourCarForm from "./SellYourCarForm";
import CarDetail from "./CarDetail";

const TabsSection = ({ activeTab, setActiveTab, showFilterMobile, setShowFilterMobile, priceRange, setPriceRange, yearRange, setYearRange, activeAuctions, similarVehicles, countdown, currentStep, setCurrentStep }) => {
  return (
    <main className="container mx-auto px-4 py-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-2">
          <TabsTrigger value="browse" className="!rounded-button whitespace-nowrap">
            <i className="fas fa-search mr-2"></i> Browse Auctions
          </TabsTrigger>
          <TabsTrigger value="sell" className="!rounded-button whitespace-nowrap">
            <i className="fas fa-car mr-2"></i> Sell Your Car
          </TabsTrigger>
        </TabsList>

        <TabsContent value="browse">
          <BrowseAuctions
            showFilterMobile={showFilterMobile}
            setShowFilterMobile={setShowFilterMobile}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            yearRange={yearRange}
            setYearRange={setYearRange}
            activeAuctions={activeAuctions}
          />
        </TabsContent>

        <TabsContent value="sell">
          <SellYourCarForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </TabsContent>

        <TabsContent value="details">
          <CarDetail
            countdown={countdown}
            similarVehicles={similarVehicles}
          />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default TabsSection;
