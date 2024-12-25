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

function Properties() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "auto", // Ensure this section takes only as much height as needed
        padding: "10px",
        marginTop: "30px", // Remove extra margin if any
        marginBottom: "10px", // Reduce bottom margin if there's any extra space
        overflowX: "auto",
      }}
    >
      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={h10}
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
            3 Bedroom Appartment in Colombo 5
            <FaHeart
              style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
            />
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
            Havelockcity, level 2.
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
              $ 3,600
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={h2}
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
            5 Bedroom House in Bambalapitiya
            <FaHeart
              style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
            />
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
            Havelockcity, level 2.
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
              $ 3,600
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={h3}
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
            3 Bedroom House in Colombo 5
            <FaHeart
              style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
            />
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
            Havelockcity, level 2.
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
              $ 3,600
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={h4}
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
            3 Bedroom House in Colombo 5
            <FaHeart
              style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
            />
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
            Havelockcity, level 2.
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
              $ 3,600
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={h5}
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
            3 Bedroom House in Colombo 5
            <FaHeart
              style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
            />
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
            Havelockcity, level 2.
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
              $ 3,600
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={h6}
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
            3 Bedroom House in Colombo 5
            <FaHeart
              style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
            />
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
            Havelockcity, level 2.
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
              $ 3,600
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={h12}
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
            2 Bedroom Appartment in sydney
            <FaHeart
              style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
            />
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
            Havelockcity, level 2.
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
              $ 3,600
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={h8}
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
             Bedroom House in Colombo 5
            <FaHeart
              style={{ cursor: "pointer", color: "gray", fontSize: "24px" }}
            />
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt style={{ marginRight: "8px", color: "#5b9566" }} />
            Havelockcity, level 2.
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
              $ 3,600
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Properties;
