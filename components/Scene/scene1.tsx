"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../Model/model1";

const Scene: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-black">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        style={{ background: "black" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
