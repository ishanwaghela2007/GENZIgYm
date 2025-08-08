"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment, Float } from "@react-three/drei";
import Model from "../Model/model1";

const Scene: React.FC = () => {
  return (
    <div className="relative w-full h-[560px] bg-black">
      <Canvas
        camera={{ position: [0, 0.3, 7.5], fov: 40 }}
        style={{ background: "black" }}
        shadows
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight
          position={[-6, 6, 2]}
          angle={0.35}
          penumbra={0.4}
          intensity={0.7}
          castShadow
        />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <Float
            speed={1}
            rotationIntensity={0.2}
            floatIntensity={0.5}
          >
            <Model />
          </Float>
        </Suspense>
        <ContactShadows
          position={[0, -1.05, 0]}
          opacity={0.5}
          scale={15}
          blur={2.5}
          far={5}
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
};

export default Scene;
