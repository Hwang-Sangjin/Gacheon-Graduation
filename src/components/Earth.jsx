import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useFBX} from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const KimGoEun = () => {
  const KimGoEun_model = useGLTF("./GLTF/KimGoEun.gltf")
  console.log(KimGoEun_model.scene)
  return <primitive object={KimGoEun_model.scene} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[2.5, 2.5, 2.5]} />
};

const EarthCanvas = () => {
  return (
    <Canvas>
    <Suspense fallback={null}>
      <KimGoEun />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
