# 🚗 Pak-Auctions – Bidding Platform

Pak-Auctions is a modern car auction platform built with React, Vite, Tailwind CSS, and ShadCN UI. It allows users to browse premium vehicles, place bids in real time, and list their own cars for auction — all in an elegant, responsive interface.

## 🔥 Live Demo

👉 [View on Vercel] https://pak-auctions.vercel.app/

---

## ✨ Features

- 🔍 Browse and search vehicles by make, model, or keyword
- 🛠 Clean UI components with [ShadCN UI](https://ui.shadcn.com)
- 🔄 Swiper integration for featured listings
- ⚡ Fast build with Vite
- 📱 Fully responsive and mobile-friendly
- 🌙 Dark mode support (optional)
- 📦 Ready to deploy on Vercel

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS v4**
- **ShadCN UI**
- **Swiper.js**
- **Vercel** (Deployment)

---

## 📦 Installation


# Clone the repo
   git clone https://github.com/Zubii07/Pak-Auctions/tree/master
   
   cd frontend/car-auction

# Install dependencies
   npm install

# Start development server
   npm run dev


## 🏗️ Project Structure

    src/
    ├── components/     # Reusable UI components
    ├── pages/          # Page-level components
    ├── assets/         # Static files (images, logos)
    ├── utils/          # Helper functions
    ├── App.jsx         # Main application component
    └── main.jsx        # Application entry point


## ⚙️ Configuration Notes

# ShadCN Alias Setup (@/)
  To use @/ for clean imports:

  # 1.Update your jsconfig.json:
     {
       "compilerOptions": {
       "baseUrl": ".",
       "paths": {
        "@/*": ["src/*"]
        }
      }
    }
  


# 2. Update vite.config.js:
    import path from "path";
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

     export default defineConfig({
      plugins: [react()],
      resolve: {
      alias: {
      "@": path.resolve(__dirname, "src"),
         },
       },
     });


## 🧩 Future Enhancements (Roadmap)

   Integration with a real-time backend (Node,Express, Mongo DB)
   
   Authentication system (Login/Signup)
   
   Admin dashboard for managing auctions
   
   User profile and bidding history
   
   Live countdown timers for auction end-times

## 🤝 Contributing

   Contributions are welcome!
   
   If you have suggestions, feature requests, or improvements, feel free to:
   
     Fork the repository.
     
     Create a new branch (git checkout -b feature/YourFeature).
     
     Submit a Pull Request.


## 📬 Contact

   Developed by M Zohaib
   
  📧 Email: zohaibrasheed983@gmail.com
  
  💼 LinkedIn: https://www.linkedin.com/in/muhammad-zohaib-2786b8265/
