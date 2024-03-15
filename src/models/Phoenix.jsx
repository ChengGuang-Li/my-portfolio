import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import phoenixScene from "../assets/3d/phoenix.glb";
import { useFrame } from "@react-three/fiber";

const Phoenix = () => {
  const { scene, animations } = useGLTF(phoenixScene);
  const phoenixRef = useRef();
  const {actions} = useAnimations(animations, phoenixRef);
  

  useEffect(() => {
    if(actions['Take 001']){
      actions['Take 001'].play();
    }
  },[]);

  useFrame(({clock,camera}) => {
    //simulate phoenix flying in a sin wave pattern
    phoenixRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2; 
  
    if(phoenixRef.current.position.x > camera.position.x + 10){ 
      phoenixRef.current.rotation.y = Math.PI;
    }else if(phoenixRef.current.position.x < camera.position.x - 10){
      phoenixRef.current.rotation.y = 0;
    }

    if(phoenixRef.current.rotation.y === 0){
      phoenixRef.current.position.x += 0.01;
      phoenixRef.current.position.z -= 0.01;
    }else{
      phoenixRef.current.position.x -= 0.01;
      phoenixRef.current.position.z += 0.01;
    }
  })

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={phoenixRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Phoenix;
