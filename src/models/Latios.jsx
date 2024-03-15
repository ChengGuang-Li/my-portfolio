import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import latios from "../assets/3d/latios.glb";

const Latios = ({ isRotate, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(latios);
  const { actions } = useAnimations(animations, ref);
  
  useEffect(() => {
    if (isRotate && actions["GltfAnimation 0"]) {
      actions["GltfAnimation 0"].play();
    } else if (!isRotate && actions["GltfAnimation 0"]) {
      actions["GltfAnimation 0"].stop();
    }
  }, [isRotate, actions]);
  
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Latios;
