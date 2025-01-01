import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import "./Skills.css";

const skills = [
  { name: "Python", icon: "🐍", link: "https://www.python.org/" },
  { name: "C++", icon: "👨‍💻", link: "https://isocpp.org/" },
  { name: "C", icon: "🔧", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: "Keil uVision", icon: "📟", link: "https://www.keil.com/" },
  { name: "VHDL", icon: "📐", link: "https://en.wikipedia.org/wiki/VHDL" },
  { name: "MATLAB", icon: "📊", link: "https://www.mathworks.com/" },
  { name: "PSpice", icon: "⚙️", link: "https://www.pspice.com/" },
  { name: "Git/GitHub", icon: "🐙", link: "https://github.com/" },
  { name: "Docker", icon: "🐳", link: "https://www.docker.com/" },
  { name: "Linux", icon: "🐧", link: "https://www.linux.org/" },
  { name: "Raspberry Pi", icon: "🍓", link: "https://www.raspberrypi.com/" },
  { name: "HiFive1 Microcontroller", icon: "📡", link: "https://www.sifive.com/boards/hifive1-rev-b" },
  { name: "JavaScript", icon: "📜", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React.js", icon: "⚛️", link: "https://reactjs.org/" },
  { name: "Node.js", icon: "🌳", link: "https://nodejs.org/" },
  { name: "Express.js", icon: "🚀", link: "https://expressjs.com/" },
  { name: "PostgreSQL", icon: "🐘", link: "https://www.postgresql.org/" },
  { name: "Firebase", icon: "🔥", link: "https://firebase.google.com/" },
  { name: "Axios", icon: "📩", link: "https://axios-http.com/" },
  { name: "Polygon Amoy", icon: "🔗", link: "https://polygon.technology/" },
  { name: "Truffle", icon: "🍫", link: "https://trufflesuite.com/" },
  { name: "Expo Go", icon: "📱", link: "https://expo.dev/" },
  { name: "Windows", icon: "🖥️", link: "https://www.microsoft.com/en-us/windows" },
];

const SkillSphere = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.rotation.set(0.5, 0.5, 0);
    }
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.6} />
      <OrbitControls enableZoom={false} />
      <Sphere args={[3, 64, 64]} ref={globeRef}>
        {/* Soft Gray Globe with Lighter Hue */}
        <meshStandardMaterial
          color="#d3d3d3"
          opacity={0.5}
          transparent
          roughness={0.5}
          metalness={0.1}
        />
        {skills.map((skill, index) => {
          const theta = Math.acos(-1 + (2 * index) / skills.length); // Polar angle
          const phi = Math.sqrt(skills.length * Math.PI) * theta; // Azimuthal angle

          const x = 3 * Math.sin(theta) * Math.cos(phi); // X position
          const y = 3 * Math.sin(theta) * Math.sin(phi); // Y position
          const z = 3 * Math.cos(theta); // Z position

          return (
            <mesh
              key={index}
              position={[x, y, z]}
              onClick={() => window.open(skill.link, "_blank")}
              onPointerOver={(e) => (e.object.scale.set(1.3, 1.3, 1.3))}
              onPointerOut={(e) => (e.object.scale.set(1, 1, 1))}
            >
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshStandardMaterial color="#FFA500" />
              <Html distanceFactor={10}>
                <div className="skill-icon">
                  <span className="icon">{skill.icon}</span>
                  <span className="name">{skill.name}</span>
                </div>
              </Html>
            </mesh>
          );
        })}
      </Sphere>
    </Canvas>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-heading">Skills</h1>
      <SkillSphere />
    </div>
  );
};

export default Skills;
