import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const LoginModal = ({ showLoginModal, setShowLoginModal, setIsLoggedIn }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  
  if (!showLoginModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => setShowLoginModal(false)}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <i className="fas fa-car-side text-blue-600 text-2xl"></i>
            <span className="font-bold text-xl">Pak Auctions</span>
          </div>
        </div>

        {isLoginView ? (
          // Login View
          <>
            <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
            <p className="text-gray-500 text-center mb-6">Sign in to continue to your account</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input placeholder="Enter your email" type="email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <Input placeholder="Enter your password" type="password" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="ml-2 text-sm cursor-pointer">Remember me</label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>
              
              <Button className="w-full !rounded-button" onClick={() => { setIsLoggedIn(true); setShowLoginModal(false); }}>
                Sign In
              </Button>
              
              <div className="text-center">
                <div className="relative flex items-center justify-center my-4">
                  <div className="border-t border-gray-200 flex-grow"></div>
                  <div className="mx-4 text-sm text-gray-500">or continue with</div>
                  <div className="border-t border-gray-200 flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="!rounded-button"><i className="fab fa-google"></i></Button>
                  <Button variant="outline" className="!rounded-button"><i className="fab fa-facebook-f"></i></Button>
                  <Button variant="outline" className="!rounded-button"><i className="fab fa-apple"></i></Button>
                </div>
                
                <div className="mt-6">
                  Don't have an account? <button className="text-blue-600 hover:underline" onClick={() => setIsLoginView(false)}>Sign up</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Register View
          <>
            <h2 className="text-2xl font-bold text-center">Create Account</h2>
            <p className="text-gray-500 text-center mb-6">Register to start bidding on vehicles</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <Input placeholder="Enter your full name" type="text" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input placeholder="Enter your email" type="email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <Input placeholder="Create a password" type="password" />
              </div>
              
              <div className="flex items-center">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="ml-2 text-sm cursor-pointer">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <Button className="w-full !rounded-button" onClick={() => { setIsLoggedIn(true); setShowLoginModal(false); }}>
                Create Account
              </Button>
              
              <div className="text-center">
                <div className="relative flex items-center justify-center my-4">
                  <div className="border-t border-gray-200 flex-grow"></div>
                  <div className="mx-4 text-sm text-gray-500">or sign up with</div>
                  <div className="border-t border-gray-200 flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="!rounded-button"><i className="fab fa-google"></i></Button>
                  <Button variant="outline" className="!rounded-button"><i className="fab fa-facebook-f"></i></Button>
                  <Button variant="outline" className="!rounded-button"><i className="fab fa-apple"></i></Button>
                </div>
                
                <div className="mt-6">
                  Already have an account? <button className="text-blue-600 hover:underline" onClick={() => setIsLoginView(true)}>Sign in</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
