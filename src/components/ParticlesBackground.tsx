// src/components/ParticlesBackground.tsx
import React, { useCallback } from "react";
// React sarmalayıcı
import Particles from "react-tsparticles";
// Motoru buradan çekiyoruz
import { loadFull } from "tsparticles";
// JSON’u any olarak alıyoruz
import config from "../particles-config.json";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={config as any}    // <-- tipi bypass ediyoruz
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default ParticlesBackground;
