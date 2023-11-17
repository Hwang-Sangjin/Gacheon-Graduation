import { OrbitControls, Environment, } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Main3D = () => {
  const KimGoEun = useLoader(GLTFLoader, "./MainGLTF/김고은.gltf");
  const KimDongJun = useLoader(GLTFLoader, "./MainGLTF/김동준3.gltf");
  const KimYaeJu = useLoader(GLTFLoader, "./MainGLTF/김예주.gltf");
  const KimYunHa = useLoader(GLTFLoader, "./MainGLTF/김윤하.gltf");
  const KimJiHwan = useLoader(GLTFLoader, "./MainGLTF/김지환.gltf");
  const BakSeungEun = useLoader(GLTFLoader, "./MainGLTF/백승은.gltf");
  const ShinJiWoo = useLoader(GLTFLoader, "./MainGLTF/신지우.gltf");
  const AnMyungJi = useLoader(GLTFLoader, "./MainGLTF/안명지.gltf");
  const YangJiWon = useLoader(GLTFLoader, "./MainGLTF/양지원.gltf");
  const YangHyeSeon = useLoader(GLTFLoader, "./MainGLTF/양혜선.gltf");
  const WonHanJu = useLoader(GLTFLoader, "./MainGLTF/원한주.gltf");
  const YooDongJae = useLoader(GLTFLoader, "./MainGLTF/유동재.gltf");
  const YuAJung = useLoader(GLTFLoader, "./MainGLTF/유아정.gltf");
  const LeeJongWon = useLoader(GLTFLoader, "./MainGLTF/이종원.gltf");
  const LeeHongGyu = useLoader(GLTFLoader, "./MainGLTF/이홍규.gltf");
  const ChoDaIn = useLoader(GLTFLoader, "./MainGLTF/최다인.gltf");
  const HwangJuHyuk = useLoader(GLTFLoader, "./MainGLTF/황주혁.gltf");
  const Earth = useLoader(GLTFLoader, "./planet/scene.gltf");

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, -20, 3]} intensity={1} />
      <ambientLight intensity={0.1} />

     
      <primitive object={KimGoEun.scene}  />
      <primitive object={KimDongJun.scene} />
      <primitive object={KimYaeJu.scene} />
      <primitive object={KimYunHa.scene}  />
      <primitive object={KimJiHwan.scene}  />
      <primitive object={BakSeungEun.scene}  />
      <primitive object={ShinJiWoo.scene}  />
      <primitive object={AnMyungJi.scene}  />
      <primitive object={YangJiWon.scene}  />
      <primitive object={YangHyeSeon.scene}  />
      <primitive object={WonHanJu.scene}  />
      <primitive object={YooDongJae.scene}  />
      <primitive object={YuAJung.scene}  />
      <primitive object={LeeJongWon.scene}  />
      <primitive object={LeeHongGyu.scene}  />
      <primitive object={ChoDaIn.scene}  />
      <primitive object={HwangJuHyuk.scene}  />
      <primitive object={Earth.scene}/>

      
    </>
  );
};

export default Main3D;
