import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = ({ setActiveTab }) => {
  return (
    <section className="py-16 bg-white border-y shadow-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Find Your Dream Car?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands who found their perfect car through AutoBid.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button"
              onClick={() => setActiveTab("browse")}
            >
              <i className="fas fa-search mr-2"></i> Browse Auctions
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 !rounded-button"
              onClick={() => setActiveTab("sell")}
            >
              <i className="fas fa-car mr-2"></i> Sell Your Car
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
