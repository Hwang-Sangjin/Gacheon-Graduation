import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame,useLoader  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useFBX} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import CanvasLoader from "./Loader";

const Earth = () => {
  const earth = useGLTF("./GLTF/Gear1.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const KimGoEun = () => {
  const gltf = useLoader(GLTFLoader, "./GLTF/KimGoEun.gltf")
  return <primitive object={gltf.scene} />
};

function Box(props) {
  const KimGoEun_model = useGLTF("./GLTF/KimGoEun.gltf")
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

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
