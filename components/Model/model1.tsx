"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";

const Model: React.FC = () => {
  const { scene } = useGLTF("/media/fitness_equipment.glb");

  return (
    <group scale={3} position={[0, -0.5, 0]}>
     {/* updated code*/}
      <primitive object={scene} />
    </group>
  );
};

export default Model;
