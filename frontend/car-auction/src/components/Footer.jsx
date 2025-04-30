import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-car-side text-blue-400 text-2xl"></i>
              <span className="font-bold text-xl">Pak Auctions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting buyers and sellers securely, transparently, globally.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/muhammad-zohaib-2786b8265/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Zubii07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Quick Links", links: ["Home", "Browse Auctions", "Sell Your Car", "How It Works", "About Us", "Contact"] },
            { title: "Support", links: ["FAQ", "Help Center", "Buyer's Guide", "Seller's Guide", "Inspection", "Shipping"] }
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for latest updates!</p>
            <div className="flex">
              <Input placeholder="Your email" className="bg-gray-800 border-gray-700 rounded-r-none text-white" />
              <Button className="rounded-l-none !rounded-button">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-400 text-sm">
          © 2025 PakAuctions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
