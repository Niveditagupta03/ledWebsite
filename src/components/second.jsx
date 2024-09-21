import { Flex, Text, Image, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import img1 from "./img1.jpg"; // Adjust the path based on your file structure
import img2 from "./img2.jpg"; // Adjust the path based on your file structure
import img3 from "./img3.jpg"; // Adjust the path based on your file structure
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./style.css";

function Second() {
  const [activeContent, setActiveContent] = useState(1); // Default to the first button

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="100vh"
      backgroundColor="#f7f7f7"
      position="relative"
      fontFamily="'Host Grotesk', sans-serif"
    >
      <Flex direction="row" align="center" zIndex={2} gap="9px">
        <Text
          color="black"
          fontSize="48px"
          fontFamily="'Host Grotesk', sans-serif"
        >
          Brilliance
        </Text>
        <div
          style={{
            backgroundColor: "#E62C13",
            padding: "1px",
            borderRadius: "25px",
            height: "40px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", //
          }}
        >
          <FiArrowUpRight style={{ fontSize: "46px", color: "black" }} />
        </div>
        <Text
          color="black"
          fontSize="48px"
          fontFamily="'Host Grotesk', sans-serif"
        >
          Unleashed with
        </Text>
        <Text
          color="#E62C13"
          fontSize="48px"
          fontStyle="italic"
          fontWeight="600"
          fontFamily="'Host Grotesk', sans-serif"
        >
          LEDTRONICS
        </Text>
      </Flex>
      <Flex
        direction="column"
        align="center"
        textAlign="center"
        zIndex={2}
        marginTop="20px"
        fontFamily="'Host Grotesk', sans-serif"
      >
        {[
          "At LEDTRONICS, we believe in pushing the boundaries of innovation in LED technology.",
          "This showcases our commitment to excellence, the core values we uphold, and our rich history.",
          "That has shaped us into a leader in this industry.",
        ].map((text, index) => (
          <Text key={index} color="black" fontSize="16px" fontWeight="450">
            {text}
          </Text>
        ))}
      </Flex>
      <Flex
        direction="row"
        gap="20px"
        marginTop="30px"
        zIndex={2}
        fontFamily="'Host Grotesk', sans-serif"
      >
        {[
          "Mission of the Company",
          "Values We Maintain",
          "History of the Company",
        ].map((label, index) => (
          <div
            key={label}
            className="button-container" // Keep this for clarity
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100px",
              width: "410px",
              border: "2px solid #e6e6e6",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "background-color 0.3s, border-color 0.3s",
              backgroundColor: "#f7f7f7",
            }}
            onClick={() => handleButtonClick(index + 1)} // Pass button index
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#E62C13"; // Change border color on hover
              const protrusion = e.currentTarget.querySelector(".protrusion");
              if (protrusion) {
                protrusion.style.borderBottom = "2px solid #E62C13"; // Change protrusion border on hover
                protrusion.style.borderLeft = "2px solid #E62C13";
                protrusion.style.borderRight = "2px solid #E62C13";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e6e6e6"; // Reset border color
              const protrusion = e.currentTarget.querySelector(".protrusion");
              if (protrusion) {
                protrusion.style.borderBottom = "2px solid #E6E6E6"; // Reset protrusion border
                protrusion.style.borderLeft = "2px solid #E6E6E6";
                protrusion.style.borderRight = "2px solid #E6E6E6";
              }
            }}
          >
            <Text fontSize="24px" fontWeight="bold" color="black">
              {label}
            </Text>
            <div
              className="protrusion"
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "70px",
                height: "10px",
                backgroundColor: "#f7f7f7",
                borderBottom: "2px solid #E6E6E6",
                borderLeft: "2px solid #E6E6E6",
                borderRight: "2px solid #E6E6E6", // Initial grey border
                borderTop: "none",
                borderRadius: "0 0 50px 50px",
                transition: "border-color 0.3s",
              }}
            />
          </div>
        ))}
      </Flex>

      {activeContent === 1 && (
        <Flex direction="row" gap="15px" marginTop="30px" zIndex={2}>
          <Flex
            height="350px"
            width="640px"
            borderRadius="35px"
            border="2px solid #e6e6e6"
            align="center"
            justify="center"
            padding="30px"
          >
            <Box>
              <Text
                fontSize="32px"
                fontWeight="800"
                mb="4"
                fontFamily="'Host Grotesk', sans-serif"
              >
                Mission of the Company
              </Text>
              <Text fontFamily="'Host Grotesk', sans-serif">
                At LEDTRONICS, our work is guided by a strong commitment to
                integrity. We hold ourselves to the highest ethical standards,
                ensuring transparency and honesty in all our dealings.
                Innovation drives us to explore new technologies and creative
                solutions, keeping us ahead in a rapidly changing industry.
              </Text>
              <Flex
                position="absolute"
                top="85%"
                left="12%"
                transform="translate(-50%, -50%)"
                backgroundColor="white"
                borderRadius="15px"
                width="150px"
                height="60px"
                padding="10px"
                justifyContent="center"
                alignItems="center"
                zIndex={2}
                border="1px solid #E85513"
                fontFamily="'Host Grotesk', sans-serif"
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
              </Flex>
            </Box>
          </Flex>
          <Flex>
            <Image
              src={img1}
              alt="LED technology showcase"
              height="350px"
              width="640px"
              borderRadius="35px"
              objectFit="cover"
            />
          </Flex>
        </Flex>
      )}

      {activeContent === 2 && (
        <Flex direction="row" gap="15px" marginTop="30px" zIndex={2}>
          <Flex
            height="350px"
            width="640px"
            borderRadius="35px"
            border="2px solid #e6e6e6"
            align="center"
            justify="center"
            padding="30px"
          >
            <Box>
              <Text
                fontSize="32px"
                fontWeight="800"
                mb="4"
                fontFamily="'Host Grotesk', sans-serif"
              >
                Values We Maintain
              </Text>
              <Text fontFamily="'Host Grotesk', sans-serif">
                At LEDTRONICS, our work is guided by a strong commitment to
                integrity. We hold ourselves to the highest ethical standards,
                ensuring transparency and honesty in all our dealings.
                Innovation drives us to explore new technologies and creative
                solutions, keeping us ahead in a rapidly changing industry.
              </Text>
              <Flex
                position="absolute"
                top="85%"
                left="12%"
                transform="translate(-50%, -50%)"
                backgroundColor="white"
                borderRadius="15px"
                width="150px"
                height="60px"
                padding="10px"
                justifyContent="center"
                alignItems="center"
                zIndex={2}
                border="1px solid #E85513"
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
                  } // Hover color
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#E85503")
                  } // Original color
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
              </Flex>
            </Box>
          </Flex>
          <Flex>
            <Image
              src={img2}
              alt="Values We Maintain"
              height="350px"
              width="640px"
              borderRadius="35px"
              objectFit="cover"
            />
          </Flex>
        </Flex>
      )}

      {activeContent === 3 && (
        <Flex direction="row" gap="15px" marginTop="30px" zIndex={2}>
          <Flex
            height="350px"
            width="640px"
            borderRadius="35px"
            border="2px solid #e6e6e6"
            align="center"
            justify="center"
            padding="30px"
          >
            <Box>
              <Text
                fontSize="32px"
                fontWeight="800"
                mb="4"
                fontFamily="'Host Grotesk', sans-serif"
              >
                History of the Company
              </Text>
              <Text fontFamily="'Host Grotesk', sans-serif">
                At LEDTRONICS, our work is guided by a strong commitment to
                integrity. We hold ourselves to the highest ethical standards,
                ensuring transparency and honesty in all our dealings.
                Innovation drives us to explore new technologies and creative
                solutions, keeping us ahead in a rapidly changing industry.
              </Text>
              <Flex
                position="absolute"
                top="85%"
                left="12%"
                transform="translate(-50%, -50%)"
                backgroundColor="white"
                borderRadius="15px"
                width="150px"
                height="60px"
                padding="10px"
                justifyContent="center"
                alignItems="center"
                zIndex={2}
                border="1px solid #E85503"
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
                  } // Hover color
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#E85503")
                  } // Original color
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
              </Flex>
            </Box>
          </Flex>
          <Flex>
            <Image
              src={img3}
              alt="History of the Company"
              height="350px"
              width="640px"
              borderRadius="35px"
              objectFit="cover"
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Second;
