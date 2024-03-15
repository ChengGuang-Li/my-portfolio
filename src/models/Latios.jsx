import React from 'react'
import { useGLTF } from '@react-three/drei'
import latios from "../assets/3d/latios.glb"

const Latios = ({isRotate, ...props}) => {
    const {scene,animation} = useGLTF(latios);
    
  return (
    <mesh {...props }>
        <primitive object={scene} />
    </mesh>
  )
}

export default Latios