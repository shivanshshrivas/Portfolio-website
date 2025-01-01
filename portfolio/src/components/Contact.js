import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import { Email, LinkedIn, GitHub, Phone } from "@mui/icons-material";

const contactDetails = [
  {
    icon: <Email sx={{ color: "#FFA500" }} />,
    label: "Email",
    value: "shrivasshivansh@gmail.com",
    link: "mailto:shrivasshivansh@gmail.com",
  },
  {
    icon: <Phone sx={{ color: "#FFA500" }} />,
    label: "Phone",
    value: "785-423-7806",
    link: "tel:7854237806",
  },
  {
    icon: <LinkedIn sx={{ color: "#FFA500" }} />,
    label: "LinkedIn",
    value: "linkedin.com/in/shivansh-shrivas",
    link: "https://linkedin.com/in/shivansh-shrivas",
  },
  {
    icon: <GitHub sx={{ color: "#FFA500" }} />,
    label: "GitHub",
    value: "github.com/shivanshshrivas",
    link: "https://github.com/shivanshshrivas",
  },
];

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#121212",
        padding: "2rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Centered Heading */}
      <Typography
        variant="h3"
        sx={{
          color: "#FFA500",
          fontWeight: "bold",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Contact Me
      </Typography>

      {/* Contact Cards */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#1E1E1E",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0px 0px 20px 5px rgba(255, 165, 0, 0.2)",
        }}
      >
        <Stack spacing={3}>
          {contactDetails.map((contact, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1rem",
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#292929",
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 15px 5px rgba(255, 165, 0, 0.5)",
                },
              }}
            >
              {contact.icon}
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    color: "#FFF",
                    marginBottom: "0.3rem",
                  }}
                >
                  {contact.label}
                </Typography>
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: "none",
                    color: "#FFA500",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {contact.value}
                </Link>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
