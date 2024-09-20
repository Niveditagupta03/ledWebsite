import { Flex, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import bottomImage from "./girl.png";
import logo from "./logo.png";
import arrow from "./arrow.png";
import text from "./text.png";
import user from "./user.png";
import { RiArrowDropDownLine } from "react-icons/ri";

function First() {
  const [hovered, setHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        color="white"
        padding="25px 50px"
        zIndex={3}
        fontFamily="Host Grotesk', sans-serif"
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

        <Flex
          flex="2"
          gap="22px"
          fontSize="15px"
          fontFamily="'Host Grotesk', sans-serif"
        >
          {[
            "Home",
            "About Us",
            "Service",
            "Products",
            "Project",
            "Contact Us",
          ].map((item, index) => (
            <a
              key={item + index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              style={{
                color: hoveredLink === item ? "#ea2d01" : "white",
                textDecoration: "none",
                transition: "color 0.3s",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={() => setHoveredLink(item)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.toUpperCase()}
              {item === "Contact Us" && (
                <RiArrowDropDownLine
                  style={{ fontSize: "38px", marginLeft: "5px" }}
                />
              )}
            </a>
          ))}
        </Flex>
        <Flex>
          <button
            className="enquire-button"
            style={{
              color: "white",
              backgroundColor: hovered ? "#fc3608" : "#ea2d01",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              fontFamily: "'Host Grotesk', sans-serif",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            ENQUIRE NOW
          </button>
        </Flex>
      </Flex>
      <Text
        style={{
          position: "absolute",
          top: "25%",
          left: "33%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
          fontFamily: "'Host Grotesk', sans-serif",
        }}
      >
        Enlighten Your Business
      </Text>
      <Flex
        flex="1"
        style={{
          position: "absolute",
          top: "26%",
          left: "69%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <Image
          src={arrow}
          alt="Arrow"
          width="150px"
          height="auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Flex>
      <Text
        style={{
          position: "absolute",
          top: "35%",
          left: "8%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
          fontFamily: "'Host Grotesk', sans-serif",
        }}
      >
        with
      </Text>
      <Text
        style={{
          position: "absolute",
          top: "35%",
          left: "32%",
          transform: "translate(-50%, -50%)",
          color: "#E62C13",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
          fontStyle: "italic",
          fontWeight: "600",
          fontFamily: "'Host Grotesk', sans-serif",
        }}
      >
        LEDTRONICS
      </Text>
      <Text
        style={{
          position: "absolute",
          top: "53%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: ".9rem",
          textAlign: "justify",
          zIndex: 2,
          width: "80%",
          fontFamily: "'Host Grotesk', sans-serif",
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
          top: "70%",
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
          fontFamily: "'Host Grotesk', sans-serif",
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
            fontFamily: "'Host Grotesk', sans-serif",
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

      <div
        style={{
          position: "absolute",
          bottom: "135px",
          width: "100%",
          height: "200px",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={bottomImage}
          alt="A scenic view at the bottom of the screen"
          style={{
            transform: "scaleX(-1)",
            width: "30%",
            height: "auto",
          }}
        />
      </div>

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
          alt="Text"
          width="250px"
          height="auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Flex>
      <Flex
        flex="1"
        style={{
          position: "absolute",
          top: "89%",
          left: "79%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "5rem",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Image
          src={user}
          alt="Text"
          width="250px"
          height="auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Flex>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#E62C13",
          padding: "10px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
}

export default First;
