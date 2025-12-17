import React from 'react';
import HeroSection from './components/HeroSection'; // Ensure this path is correct

function App() {
  return (
    <div className="App min-h-screen bg-gray-900 text-white">
      {/* Assuming the HeroSection will occupy the main view */}
      <HeroSection />
      {/* Other components can be added here later */}
    </div>
  );
}

export default App;

