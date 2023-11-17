import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Main3D = () => {
  const model = useLoader(GLTFLoader, "./GLTF/KimDongJuntemp.gltf");
  console.log(model);
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={2} />

      <mesh
        receiveShadow
        position-y={-5}
        rotation-x={-Math.PI * 0.5}
        scale={20}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <primitive object={model.scene} scale={0.1} />
    </>
  );
};

export default Main3D;
