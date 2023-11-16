import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Preload,
  useGLTF,
  useFBX,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import CanvasLoader from "./Loader";

const EarthCanvas = () => {
  const Scene = () => {
    const fbx = useFBX("./FBX/KimDongJun/KimDongJun_model.fbx");

    return <primitive object={fbx} scale={0.005} position={[0, 0, 0]} />;
  };

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
