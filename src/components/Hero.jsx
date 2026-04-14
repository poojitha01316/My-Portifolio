import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Float, Stars, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import './Hero.css';

const AnimatedShape = () => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <group position={[2, 0, 0]}>
        <Icosahedron ref={meshRef} args={[1.5, 0]} scale={1.2}>
          <meshStandardMaterial
            color="#0ea5e9"
            wireframe={true}
            transparent={true}
            opacity={0.3}
          />
        </Icosahedron>
        <Torus args={[2.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#6d28d9" emissive="#6d28d9" emissiveIntensity={0.5} />
        </Torus>
      </group>
    </Float>
  );
};

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <AnimatedShape />
        </Canvas>
      </div>
      
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="hero-subtitle">Hello, I'm</p>
          <div className="hero-title" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {"Pujitha Nallabelli".split(' ').map((word, wordIndex) => (
              <span key={wordIndex} style={{ display: 'flex' }}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + (wordIndex * 7 + charIndex) * 0.05,
                      type: "spring",
                      stiffness: 150
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
          <h2 className="hero-tagline text-gradient">
            ServiceNow Developer | Workflow Automation Specialist
          </h2>
          <p className="hero-description">
            Passionate about building intelligent applications, crafting seamless workflows on the ServiceNow platform, and exploring emerging enterprise technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="/resume.pdf" download="Pujitha_Nallabelli_Resume.pdf" className="btn-secondary">
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
