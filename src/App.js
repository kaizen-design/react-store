import * as React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"

export default function App() {  
  return (
    <div className="min-h-full">
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>      
    </div>  
  )
}