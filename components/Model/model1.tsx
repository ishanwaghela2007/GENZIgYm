"use client";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Model: React.FC = () => {
  const { scene } = useGLTF("/media/fitness_equipment.glb");

  // Enable shadows on imported meshes
  useEffect(() => {
    scene.traverse((object: any) => {
      if ("castShadow" in object) object.castShadow = true;
      if ("receiveShadow" in object) object.receiveShadow = true;
    });
  }, [scene]);

  return (
    <group scale={3} position={[0, -0.6, 0]} rotation={[0, Math.PI / 8, 0]}>
      <primitive object={scene} />
    </group>
  );
};

// Preload model to reduce pop-in
useGLTF.preload("/media/fitness_equipment.glb");

export default Model;
