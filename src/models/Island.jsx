/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";
import { a } from "@react-spring/three";

const Island = ({ isRotate, setIsRotate, setCurrentStage,setShowHint, ...props }) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree(); // to get the size of the viewport
  const { nodes, materials } = useGLTF(islandScene);
  const lastX = useRef(0); // to store the last position of the mouse
  const rotationSpeed = useRef(0); // to control the speed of the rotation
  const dampingFactor = 0.7; // to control the damping of the rotation

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotate(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX; // to get the clientX of the mouse
    lastX.current = clientX; // to store the clientX in the ref
    setShowHint(false);// to hide the hint
  };
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotate(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotate) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX; // to get the clientX of the mouse
      const delta = (clientX - lastX.current) / viewport.width; // to calculate the delta
      islandRef.current.rotation.y += delta * Math.PI * 0.01; // to rotate the island
      lastX.current = clientX; // to store the clientX in the ref
      rotationSpeed.current = delta * Math.PI * 0.01; // to store the delta in the ref
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "ArrowLeft") {
      if (!isRotate) {
        setIsRotate(true);
      }
      islandRef.current.rotation.y += 0.1 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key == "ArrowRight") {
      if (!isRotate) {
        setIsRotate(true);
      }
      islandRef.current.rotation.y -= 0.1 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
    setShowHint(false);// to hide the hint
  };

  const handleKeyUp = (e) => {
    if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
      setIsRotate(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement; // to get the canvas element
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotate) {
      rotationSpeed.current *= dampingFactor; // to apply the damping
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0; // to stop the rotation if the speed is less than 0.001
      }
      //slow the speed
      islandRef.current.rotation.y += rotationSpeed.current; // to rotate the island
    } else {
      const rotation = islandRef.current.rotation.y; // to calculate the rotation
      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });
  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
