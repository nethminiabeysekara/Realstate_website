import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa"; // Importing icons
import h10 from "../../assets/h10.jpg";
import h2 from "../../assets/h2.jpg";
import h3 from "../../assets/h3.jpg";
import h4 from "../../assets/h4.jpg";
import h5 from "../../assets/h5.jpg";
import h6 from "../../assets/h6.jpg";
import h12 from "../../assets/h12.jpg";
import h8 from "../../assets/h8.jpg";

const Properties = ({ filter }) => {
  const properties = [
    { id: 1, type: "Apartment", bedrooms: "3", date: "2023-12-01", postcode: "BR1", title: "3 Bedroom Apartment in Perth", address: "436 Wattlebird Drive, Perth", price: "$3,600", img: h10 },
    { id: 2, type: "House", bedrooms: "5", date: "2023-11-20", postcode: "BR2", title: "5 Bedroom House in Darwin", address: "5 Walter Street, Darwin", price: "$4,000", img: h2 },
    { id: 3, type: "House", bedrooms: "3", date: "2023-11-10", postcode: "BR3", title: "3 Bedroom House in Gold Coast", address: "135 Curlewis Street, Gold Coast", price: "$3,200", img: h3 },
    { id: 4, type: "House", bedrooms: "3", date: "2023-11-10", postcode: "BR3", title: "3 Bedroom House in Brisbane", address: "98 Shirley Street, Brisbane", price: "$3,200", img: h4 },
    { id: 5, type: "House", bedrooms: "3", date: "2023-11-10", postcode: "BR3", title: "3 Bedroom House in Perth", address: "Leverndra 2,55, Perth", price: "$3,200", img: h5 },
    { id: 6, type: "House", bedrooms: "2", date: "2023-11-10", postcode: "BR3", title: "2 Bedroom House in Hobart", address: "355, Wetlo Street, Hobart", price: "$3,200", img: h6 },
    { id: 7, type: "Apartment", bedrooms: "2", date: "2023-11-10", postcode: "BR3", title: "2 Bedroom Apartment in Sydney", address: "20, Wedlo Street", price: "$3,200", img: h12 },
    { id: 8, type: "House", bedrooms: "4", date: "2023-11-10", postcode: "BR3", title: "4 Bedroom House in Melbourne", address: "70/1, Delo Street, Melbourne", price: "$3,200", img: h8 },
  ];

  // Filter the properties based on the filter data passed from the parent
  const filteredProperties = properties.filter((property) => {
    return (
      (filter.propertyType ? property.type.toLowerCase().includes(filter.propertyType.toLowerCase()) : true) &&
      (filter.bedrooms ? property.bedrooms === filter.bedrooms : true) &&
      (filter.price ? parseInt(property.price.replace('$', '').replace(',', '')) <= parseInt(filter.price) : true) &&
      (filter.postcode ? property.postcode.toLowerCase().includes(filter.postcode.toLowerCase()) : true)
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "auto",
        padding: "10px",
        marginTop: "30px",
        marginBottom: "10px",
        overflowX: "auto",
      }}
    >
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <Card key={property.id} style={{ width: "20rem", margin: "10px" }}>
            <Card.Img
              variant="top"
              src={property.img}  // Updated to use property.img
              style={{
                width: "280px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                margin: "0 auto",
                marginTop: "10px",
              }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {property.title}
                <FaHeart style={{ cursor: "pointer", color: "gray", fontSize: "24px" }} />
              </Card.Title>
              <Card.Text>
                <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
                {property.address}
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#5b9566",
                    color: "white",
                    borderRadius: "15px",
                  }}
                >
                  {property.price}
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No properties found based on the search criteria.</p>
      )}
    </div>
  );
};

export default Properties;
