import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import * as echarts from "echarts";

// PKR to USD conversion rate as of April 29, 2025
const PKR_CONVERSION_RATE = 282.5;

const CarDetail = ({ countdown, similarVehicles }) => {
  useEffect(() => {
    const chartDom = document.getElementById("bidHistoryChart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      
      // Convert USD values to PKR for the chart
      const usdValues = [18500, 19200, 20100, 21500, 22300, 23100, 24500];
      const pkrValues = usdValues.map(value => value * PKR_CONVERSION_RATE);
      
      const option = {
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["Apr 22", "Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28"], axisLine: { lineStyle: { color: "#ddd" } }},
        yAxis: { 
          type: "value", 
          axisLabel: { formatter: "PKR {value}" }, 
          axisLine: { lineStyle: { color: "#ddd" } }
        },
        series: [{
          data: pkrValues,
          type: "line",
          smooth: true,
          lineStyle: { color: "#3b82f6" },
          itemStyle: { color: "#3b82f6" },
        }],
        grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    }
  }, []);

  // Convert $62,500 to PKR
  const currentBidInPKR = 62500 * PKR_CONVERSION_RATE;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Side - Main Image */}
      <div className="lg:w-3/5">
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop"
              alt="BMW M4 Competition"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Bidding and Info */}
      <div className="lg:w-2/5">
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden sticky top-24">
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="text-2xl font-bold">2023 BMW M4 Competition</h2>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <i className="fas fa-tachometer-alt mr-1"></i>
              <span>8,750 miles</span>
              <span className="mx-2">•</span>
              <i className="fas fa-map-marker-alt mr-1"></i>
              <span>Los Angeles, CA</span>
            </div>
          </div>

          <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm text-gray-500">Current Bid:</div>
              <div className="text-2xl font-bold">PKR {currentBidInPKR.toLocaleString()}</div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="bg-gray-100 rounded-lg p-2 text-center">
                <div className="text-2xl font-bold">{countdown.days}</div>
                <div className="text-xs text-gray-500">Days</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-2 text-center">
                <div className="text-2xl font-bold">{countdown.hours}</div>
                <div className="text-xs text-gray-500">Hours</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-2 text-center">
                <div className="text-2xl font-bold">{countdown.minutes}</div>
                <div className="text-xs text-gray-500">Minutes</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-2 text-center">
                <div className="text-2xl font-bold">{countdown.seconds}</div>
                <div className="text-xs text-gray-500">Seconds</div>
              </div>
            </div>
            <Button className="w-full !rounded-button">
              <i className="fas fa-gavel mr-2"></i> Place Bid
            </Button>
          </div>

          <div className="p-4 border-b">
            <h3 className="font-medium mb-3">Bid History</h3>
            <div id="bidHistoryChart" className="h-48 w-full"></div>
          </div>

          <div className="p-4">
            <h3 className="font-medium mb-3">Seller Information</h3>
            <div className="flex items-center mb-3">
              <Avatar className="mr-3">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" />
                <AvatarFallback>PA</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Premium Auto Group</div>
                <div className="text-sm text-gray-500">Member since 2020</div>
              </div>
            </div>
            <Button variant="outline" className="w-full !rounded-button">
              <i className="fas fa-comment-alt mr-2"></i> Contact Seller
            </Button>
          </div>
        </div>
      </div>

      {/* Similar Vehicles */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similarVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://source.unsplash.com/random/800x500?${vehicle.make}+${vehicle.model}`;
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <div className="text-sm text-gray-500">Current Bid</div>
                    <div className="text-xl font-bold">PKR {vehicle.priceInPKR.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Time Left</div>
                    <div className="text-orange-600 font-medium">{vehicle.timeLeft}</div>
                  </div>
                </div>
                <Button className="w-full !rounded-button">
                  View Auction
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
