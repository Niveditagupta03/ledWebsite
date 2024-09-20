import { Flex, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react"; // Import useState here
import { FaArrowRight } from "react-icons/fa";
import bottomImage from "./girl.png"; // Adjust the path as necessary
import logo from "./logo.png"; // Ensure this path is correct
import arrow from "./arrow.png";
import text from "./text.png";
function First() {
  const [hovered, setHovered] = useState(false); // State for hover effect
  const [hoveredLink, setHoveredLink] = useState(null); // State for link hover effect

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        color="white"
        position="absolute"
        padding="25px  50px 25px 50px"
      >
        <Flex flex="1">
          <Image
            src={logo}
            alt="Your Logo"
            width="150px"
            height="auto"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Flex>

        <Flex flex="2" gap="20px" fontSize="15px">
          {[
            "Home",
            "About Us",
            "Service",
            "Products",
            "Project",
            "Contact Us",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              style={{
                color: hoveredLink === item ? "#ea2d01" : "white",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={() => setHoveredLink(item)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </Flex>

        {/* Enquire button on the right */}
        <Flex>
          <button
            className="enquire-button"
            style={{
              color: "white",
              backgroundColor: hovered ? "#fc3608" : "#ea2d01",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "300",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            ENQUIRE NOW
          </button>
        </Flex>
      </Flex>

      {/* Main content */}
      <Text
        style={{
          position: "absolute",
          top: "28%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        Enlighten your business
      </Text>
      <Flex
        flex="1"
        style={{
          position: "absolute",
          top: "28%",
          left: "64%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Image
          src={arrow}
          alt="Your Logo"
          width="150px"
          height="auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Flex>
      <Text
        style={{
          position: "absolute",
          top: "40%",
          left: "8%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        with
      </Text>
      <Text
        style={{
          position: "absolute",
          top: "40%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          color: "#E62C13",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
          fontStyle: "italic",
          fontWeight: "600",
        }}
      >
        LEDTRONICS
      </Text>
      <Text
        style={{
          position: "absolute",
          top: "58%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: ".9rem",
          textAlign: "justify",
          zIndex: 2,
          width: "80%",
        }}
      >
        <p>Welcome to LEDTRONICS, your trusted</p>
        <p>partner in LED screen solutions in the UAE.</p>
        <p>With over 35 years of industry expertise, we</p>
        <p>pride ourselves in delivering fast and reliable</p>
        <p>service. Explore our innovative LED display</p>
        <p>solution, designed to meet the highest</p>
        <p>standards of performance and reliability.</p>
      </Text>

      <div
        style={{
          position: "absolute",
          top: "75%",
          left: "8%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "15px",
          width: "150px",
          height: "60px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          border: "1px solid #E85503",
        }}
      >
        <button
          className="enquire-button"
          style={{
            color: "white",
            backgroundColor: "#E85503",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#fc3608")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#E85503")
          }
        >
          Enquire
        </button>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginLeft: "5px",
          }}
        >
          <FaArrowRight />
        </div>
      </div>

      <img
        src={bottomImage}
        alt="A scenic view at the bottom of the screen"
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "30%",
          height: "auto",
          zIndex: 1,
        }}
      />
      <Flex
        flex="1"
        style={{
          position: "absolute",
          top: "63%",
          left: "74%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Image
          src={text}
          alt="Your Logo"
          width="250px"
          height="auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Flex>
    </div>
  );
}

export default First;
