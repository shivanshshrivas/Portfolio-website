import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Projects.css";

const projects = [
  {
    title: "Decentralized Music Application (DeMus)",
    skills: ["Solidity", "Firebase", "Polygon Amoy", "Chromaprint"],
    description:
      "A blockchain-based web application that enables music uploads, achieving efficient deployment and on-chain music authenticity verification.",
    github: "https://github.com/shivanshshrivas/DeMus",
  },
  {
    title: "CodeLingo",
    skills: ["Next.js", "Flask", "PostgreSQL"],
    description:
      "Streamlined backend functionality and developed a dynamic code visualizer to enhance code comprehension for beginners.",
    github: "https://github.com/an-siuu-man/code-lingo",
  },
  {
    title: "Hack MidTerms",
    skills: ["Next.js", "Flask", "Axios", "Pinata IPFS API"],
    description:
      "Implemented Firebase authentication and personalized flashcard storage using Pinata IPFS, enhancing user interactions.",
    github: "https://github.com/an-siuu-man/hackmidterms",
  },
  {
    title: "Survival Cyberdeck",
    skills: ["Raspberry Pi 5", "C", "Raspbian OS"],
    description:
      "Led a team to develop a cyberdeck integrating GPS, humidity, and temperature sensors, managing milestones with Coda.io.",
    github: "https://github.com/shivanshshrivas/SurvivalCyberDeck",
  },
  {
    title: "Self-Driving Car Prototype",
    skills: ["C", "Python", "Raspberry Pi 4", "TFmini Lidar Sensor"],
    description:
      "Developed a self-driving car prototype with automatic steering and obstacle detection using a TFmini Lidar sensor.",
    github: "https://github.com/shivanshshrivas/",
  },
  {
    title: "GUI Boolean Logic Calculator",
    skills: ["C++", "Express.js", "React.js", "Node.js"],
    description:
      "Built a Boolean logic calculator with GUI and CLI interfaces, adhering to IEEE standards for future scalability.",
    github: "https://github.com/jahnvi-maddila/EECS-348-Project",
  },
];

const Projects = () => {
  const [pausedColumns, setPausedColumns] = useState({}); // Track paused columns

  const handleMouseEnter = (columnIndex) => {
    setPausedColumns((prev) => ({ ...prev, [columnIndex]: true }));
  };

  const handleMouseLeave = (columnIndex) => {
    setPausedColumns((prev) => ({ ...prev, [columnIndex]: false }));
  };

  // Repeat projects dynamically to fill the scrolling area
  const repeatedProjects = [...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects];

  // Divide repeated projects into columns
  const columns = [[], [], []];
  repeatedProjects.forEach((project, index) => {
    columns[index % 3].push(project);
  });

  return (
    <Box
      id="projects"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#121212",
        overflow: "hidden", // Hide overflowing content
        padding: "2rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          color: "#FFA500",
          fontWeight: "bold",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Projects
      </Typography>

      {/* Projects Columns */}
      <Box
        className="scroll-container"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {columns.map((column, columnIndex) => (
          <Box
            key={columnIndex}
            className={`column column-${columnIndex} ${pausedColumns[columnIndex] ? "paused" : ""}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {column.map((project, index) => (
              <Box
                key={`${columnIndex}-${index}`}
                sx={{
                  backgroundColor: "#1E1E1E",
                  borderRadius: "12px",
                  padding: "1rem",
                  boxShadow: "0px 0px 15px 3px rgba(255, 165, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0px 0px 15px 5px rgba(255, 165, 0.6)",
                  },
                }}
                onMouseEnter={() => handleMouseEnter(columnIndex)} // Pause column on hover
                onMouseLeave={() => handleMouseLeave(columnIndex)} // Resume column on leave
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFA500",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#B0B0B0",
                    marginBottom: "0.5rem",
                  }}
                >
                  <strong>Skills:</strong> {project.skills.join(", ")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFF",
                    marginBottom: "1rem",
                  }}
                >
                  {project.description}
                </Typography>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon
                    sx={{
                      color: "#FFF",
                      "&:hover": { color: "#FFA500" },
                    }}
                  />
                </Link>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
