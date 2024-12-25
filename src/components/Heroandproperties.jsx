import React, { useState } from "react";
import Hero from "./Hero";
import Properties from "./Properties";

const Heroandproperties = () => {
  // Properties data
  const propertiesData = [
   
    { id: 1, type: "Apartment", bedrooms: "3", date: "2023-12-01", postcode: "BR1", title: "3 Bedroom Apartment in Perth", address: "436 Wattlebird Drive, Perth", price: "$3,600", img: h10 },
    { id: 2, type: "House", bedrooms: "5", date: "2023-11-20", postcode: "BR2", title: "5 Bedroom House in Darwin", address: "5 Walter Street, Darwin", price: "$4,000", img: h2 },
    { id: 3, type: "House", bedrooms: "3", date: "2023-11-10", postcode: "BR3", title: "3 Bedroom House in Gold Coast", address: "135 Curlewis Street, Gold Coast", price: "$3,200", img: h3 },
    { id: 4, type: "House", bedrooms: "3", date: "2023-11-10", postcode: "BR3", title: "3 Bedroom House in Brisbane", address: "98 Shirley Street, Brisbane", price: "$3,200", img: h11 },
    { id: 5, type: "House", bedrooms: "3", date: "2023-11-10", postcode: "BR3", title: "3 Bedroom House in Perth", address: "Leverndra 2,55, Perth", price: "$3,200", img: h4 },
    { id: 6, type: "House", bedrooms: "2", date: "2023-11-10", postcode: "BR3", title: "2 Bedroom House in Hobart", address: "355, Wetlo Street, Hobart", price: "$3,200", img: h5 },
    { id: 7, type: "Apartment", bedrooms: "2", date: "2023-11-10", postcode: "BR3", title: "2 Bedroom Apartment in Sydney", address: "20, Wedlo Street", price: "$3,200", img: h6 },
    { id: 8, type: "House", bedrooms: "4", date: "2023-11-10", postcode: "BR3", title: "4 Bedroom House in Melbourne", address: "70/1, Delo Street, Melbourne", price: "$3,200", img: h1 },
  ];
  
  

  // State for filtered properties
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  // Function to handle filtering
  const handleFilter = (filters) => {
    const { type, bedrooms, date, postcode } = filters;

    // Filter logic
    const filtered = propertiesData.filter((property) => {
      return (
        (type ? property.type.toLowerCase().includes(type.toLowerCase()) : true) &&
        (bedrooms ? property.bedrooms === parseInt(bedrooms) : true) &&
        (date ? property.dateAdded === date : true) &&
        (postcode ? property.postcode.toLowerCase() === postcode.toLowerCase() : true)
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <div>
      <Hero onFilter={handleFilter} />
      <Properties properties={filteredProperties} />
    </div>
  );
};

export default Heroandproperties;
