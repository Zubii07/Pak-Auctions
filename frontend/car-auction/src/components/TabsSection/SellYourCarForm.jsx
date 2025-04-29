import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
//import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const SellYourCarForm = ({ currentStep, setCurrentStep }) => {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Vehicle Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Make</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select make" /></SelectTrigger>
                  <SelectContent>
                    {["Audi", "BMW", "Mercedes-Benz", "Porsche", "Tesla"].map((make) => (
                      <SelectItem key={make} value={make.toLowerCase()}>{make}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Model</label>
                <Input placeholder="Enter model" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select year" /></SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 16 }, (_, i) => 2010 + i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mileage</label>
                <Input placeholder="Enter mileage" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">VIN</label>
                <Input placeholder="Enter VIN" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Exterior Color</label>
                <Input placeholder="Enter exterior color" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Interior Color</label>
                <Input placeholder="Enter interior color" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Transmission</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select transmission" /></SelectTrigger>
                  <SelectContent>
                    {["Automatic", "Manual", "Dual-Clutch", "CVT"].map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Description</label>
              <textarea className="w-full min-h-[120px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your vehicle"></textarea>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Upload Photos</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                <i className="fas fa-cloud-upload-alt text-2xl"></i>
              </div>
              <h4 className="text-lg font-medium mb-2">Drag and drop your photos here</h4>
              <p className="text-sm text-gray-500 mb-4">Upload high-quality images</p>
              <Button className="!rounded-button"><i className="fas fa-image mr-2"></i> Browse Files</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map((num) => (
                <div key={num} className="relative aspect-video bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                  <i className="fas fa-image text-xl"></i>
                  <span className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-xs">{num}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Auction Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Starting Price ($)</label>
                <Input placeholder="Enter starting price" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Reserve Price ($)</label>
                <Input placeholder="Enter reserve price" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Auction Duration</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select duration" /></SelectTrigger>
                  <SelectContent>
                    {[3,5,7,10,14].map((days) => (
                      <SelectItem key={days} value={days.toString()}>{days} days</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <Input placeholder="Enter location" />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Review & Submit</h3>
            <p className="text-gray-600">Double-check your listing before submitting. Your vehicle will be inspected after submission.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h2 className="text-2xl font-bold mb-2">Sell Your Car at Auction</h2>
        <p className="text-blue-100">Complete the form below to list your vehicle.</p>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{currentStep}</div>
              <span className="font-medium">
                {currentStep === 1 && "Vehicle Details"}
                {currentStep === 2 && "Upload Photos"}
                {currentStep === 3 && "Auction Settings"}
                {currentStep === 4 && "Review & Submit"}
              </span>
            </div>
            <div className="text-sm text-gray-500">Step {currentStep} of 4</div>
          </div>
          <Progress value={currentStep * 25} className="h-2" />
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8">
          {currentStep > 1 ? (
            <Button variant="outline" onClick={() => setCurrentStep((prev) => prev - 1)} className="!rounded-button">
              <i className="fas fa-arrow-left mr-2"></i> Back
            </Button>
          ) : <div />}
          {currentStep < 4 ? (
            <Button onClick={() => setCurrentStep((prev) => prev + 1)} className="!rounded-button">
              Next <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700 !rounded-button">
              <i className="fas fa-check mr-2"></i> Submit Auction
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellYourCarForm;
