import React, { useState } from 'react';
import Navbar from './components/Home/NavbarComponent';
import Hero from './components/Home/Hero';
import Featured from './components/featured/Featured';
import Properties from './components/Property/Properties';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [filter, setFilter] = useState({
    propertyType: "",
    bedrooms: "",
    price: "",
    postcode: "",
  });

  const handleSearch = (searchData) => {
    setFilter(searchData);
  };

  return (
    <>
      <div>
        <Navbar />
        <Hero onSearch={handleSearch} />
        <Featured />
        <Properties filter={filter} />
        <Footer />
      </div>
    </>
  );
}

export default App;
