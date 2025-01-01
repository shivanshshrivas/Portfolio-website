import React from "react";
import { Typography, Box, Avatar } from "@mui/material";
import profile from "../assets/profile.jpg";

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        gap: "1.5rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <Avatar
        src={profile}
        sx={{
          width: 300,
          height: 300,
          border: "5px solid #FFA500",
          boxShadow: "0px 0px 20px 5px #FFA500",
        }}
      />
      <Typography variant="h2" fontWeight="bold" sx={{ color: "#FFF" }}>
        Hi, I'm Shivansh Shrivas
      </Typography>
      <Typography variant="h5" color="textSecondary" sx={{ color: "#B0B0B0" }}>
        A Developer Passionate About Software & Hardware Innovations
      </Typography>
    </Box>
  );
};

export default HeroSection;
