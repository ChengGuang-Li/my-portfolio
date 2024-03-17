import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import rayquazaScene from "../assets/3d/rayquaza.glb";
import { useFrame } from "@react-three/fiber";

const Rayquaza = () => {
  const rayquazaRef = useRef();
  const { nodes, materials, animations } = useGLTF(rayquazaScene);
  const { actions } = useAnimations(animations, rayquazaRef);

  const [isAttacking, setIsAttacking] = useState(false);
  useEffect(() => {
    if (actions["animation.rayquaza.fly"]) {
      actions["animation.rayquaza.fly"].play();
    }
  }, []);

  useEffect(() => {
    if (isAttacking) {
      actions["animation.rayquaza.attack_2"].reset().play();
      setTimeout(() => {
        actions["animation.rayquaza.attack_2"].stop();
        actions["animation.rayquaza.attack_1"].play();
        setTimeout(() => {
            actions["animation.rayquaza.attack_1"].stop();
            actions["animation.rayquaza.fly"].play();
            setIsAttacking(false);
        }, 2000);   
      }, 2000); 
    }
  }, [isAttacking]);

  useFrame(({ clock, camera }) => {
    rayquazaRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    if (!isAttacking) {
      if (rayquazaRef.current.position.x > camera.position.x + 14) {
        setIsAttacking(true);
        rayquazaRef.current.rotation.y = -20;
      } else if (rayquazaRef.current.position.x < camera.position.x - 10) {
        rayquazaRef.current.rotation.y = 40;
      }
    }

    if (rayquazaRef.current.rotation.y === 40) {
      rayquazaRef.current.position.x += 0.01;
      rayquazaRef.current.position.z -= 0.01;
    } else {
      rayquazaRef.current.position.x -= 0.01;
      rayquazaRef.current.position.z += 0.01;
    }
  });

  return (
    <group
      ref={rayquazaRef}
      position={[-5, 2, 1]}
      scale={[0.3, 0.3, 0.3]}
      rotation={[0, 40, 0]}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_201">
                <group name="body_200">
                  <group name="body_0" rotation={[0, 0, Math.PI / 4]}>
                    <mesh
                      name="Object_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="body_1" rotation={[0, 0, Math.PI / 4]}>
                    <mesh
                      name="Object_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="body_2" rotation={[0, 0, Math.PI / 4]}>
                    <mesh
                      name="Object_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="body_3" rotation={[0, 0, -Math.PI / 4]}>
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group
                    name="body_4"
                    position={[-0.063, 0.063, 0]}
                    rotation={[0.219, 0.214, 0.762]}
                  >
                    <mesh
                      name="Object_14"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_14.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group
                    name="body_5"
                    position={[-0.063, 0.063, 0]}
                    rotation={[0, 0, Math.PI / 4]}
                  >
                    <mesh
                      name="Object_16"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_16.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group
                    name="body_6"
                    position={[-0.063, 0.063, 0]}
                    rotation={[-0.219, -0.214, 0.762]}
                  >
                    <mesh
                      name="Object_18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group
                    name="body_7"
                    position={[0.063, 0.063, 0]}
                    rotation={[0.219, -0.214, -0.762]}
                  >
                    <mesh
                      name="Object_20"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_20.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group
                    name="body_8"
                    position={[0.063, 0.063, 0]}
                    rotation={[0, 0, -Math.PI / 4]}
                  >
                    <mesh
                      name="Object_22"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_22.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group
                    name="body_9"
                    position={[0.063, 0.063, 0]}
                    rotation={[-0.219, 0.214, -0.762]}
                  >
                    <mesh
                      name="Object_24"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_24.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="body_10">
                    <mesh
                      name="Object_26"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_26.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="tail_0_78" position={[0, 0, 0.438]}>
                    <group
                      name="tail_0_11"
                      position={[0, 0, 0.438]}
                      rotation={[0, 0, Math.PI]}
                    >
                      <mesh
                        name="Object_29"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_29.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="tail_1_77" position={[0, 0, 0.875]}>
                      <group
                        name="tail_1_12"
                        position={[0, 0, 0.438]}
                        rotation={[0, 0, Math.PI / 4]}
                      >
                        <mesh
                          name="Object_32"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_32.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_13"
                        position={[0, 0, 0.438]}
                        rotation={[0, 0, Math.PI / 4]}
                      >
                        <mesh
                          name="Object_34"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_34.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_14"
                        position={[0.125, 0, 0.438]}
                        rotation={[0, 0.305, -Math.PI / 2]}
                      >
                        <mesh
                          name="Object_36"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_36.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_15"
                        position={[0.125, 0, 0.438]}
                        rotation={[0, 0, -Math.PI / 2]}
                      >
                        <mesh
                          name="Object_38"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_38.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_16"
                        position={[0.125, 0, 0.438]}
                        rotation={[0, -0.305, -Math.PI / 2]}
                      >
                        <mesh
                          name="Object_40"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_40.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_17"
                        position={[-0.125, 0, 0.438]}
                        rotation={[0, -0.305, Math.PI / 2]}
                      >
                        <mesh
                          name="Object_42"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_42.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_18"
                        position={[-0.125, 0, 0.438]}
                        rotation={[0, 0, Math.PI / 2]}
                      >
                        <mesh
                          name="Object_44"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_44.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_19"
                        position={[-0.125, 0, 0.438]}
                        rotation={[0, 0.305, Math.PI / 2]}
                      >
                        <mesh
                          name="Object_46"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_46.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_20"
                        position={[0, -0.125, 0.438]}
                        rotation={[0.305, 0, Math.PI]}
                      >
                        <mesh
                          name="Object_48"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_48.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_21"
                        position={[0, -0.125, 0.438]}
                        rotation={[0, 0, Math.PI]}
                      >
                        <mesh
                          name="Object_50"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_50.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_22"
                        position={[0, -0.125, 0.438]}
                        rotation={[-0.305, 0, Math.PI]}
                      >
                        <mesh
                          name="Object_52"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_52.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_23"
                        position={[0, 0.125, 0.438]}
                        rotation={[0.305, 0, 0]}
                      >
                        <mesh
                          name="Object_54"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_54.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="tail_1_24" position={[0, 0, -1.313]}>
                        <mesh
                          name="Object_56"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_56.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group
                        name="tail_1_25"
                        position={[0, 0.125, 0.438]}
                        rotation={[-0.305, 0, 0]}
                      >
                        <mesh
                          name="Object_58"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_58.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="tail_2_76" position={[0, 0, 0.875]}>
                        <group
                          name="tail_2_26"
                          position={[0, 0, 0.438]}
                          rotation={[0, 0, Math.PI]}
                        >
                          <mesh
                            name="Object_61"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_61.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="tail_3_75" position={[0, 0, 0.875]}>
                          <group
                            name="tail_3_27"
                            position={[0, -0.125, 0.438]}
                            rotation={[0.305, 0, Math.PI]}
                          >
                            <mesh
                              name="Object_64"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_64.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_28"
                            position={[0, -0.125, 0.438]}
                            rotation={[0, 0, Math.PI]}
                          >
                            <mesh
                              name="Object_66"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_66.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_29"
                            position={[0, -0.125, 0.438]}
                            rotation={[-0.305, 0, Math.PI]}
                          >
                            <mesh
                              name="Object_68"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_68.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_30"
                            position={[0.125, 0, 0.438]}
                            rotation={[0, -0.305, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_70"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_70.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_31"
                            position={[-0.125, 0, 0.438]}
                            rotation={[0, 0.305, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_72"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_72.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_32"
                            position={[-0.125, 0, 0.438]}
                            rotation={[0, 0, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_74"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_74.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_33"
                            position={[-0.125, 0, 0.438]}
                            rotation={[0, -0.305, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_76"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_76.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_34"
                            position={[0, 0.125, 0.438]}
                            rotation={[-0.305, 0, 0]}
                          >
                            <mesh
                              name="Object_78"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_78.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_35"
                            position={[0, 0.125, 0.438]}
                            rotation={[0.305, 0, 0]}
                          >
                            <mesh
                              name="Object_80"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_80.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group name="tail_3_36" position={[0, 0, -3.063]}>
                            <mesh
                              name="Object_82"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_82.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_37"
                            position={[0.125, 0, 0.438]}
                            rotation={[0, 0.305, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_84"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_84.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_38"
                            position={[0.125, 0, 0.438]}
                            rotation={[0, 0, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_86"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_86.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_39"
                            position={[0, 0, 0.438]}
                            rotation={[0, 0, Math.PI / 4]}
                          >
                            <mesh
                              name="Object_88"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_88.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="tail_3_40"
                            position={[0, 0, 0.438]}
                            rotation={[0, 0, Math.PI / 4]}
                          >
                            <mesh
                              name="Object_90"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_90.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group name="tail_4_74" position={[0, 0, 0.875]}>
                            <group
                              name="tail_4_41"
                              position={[0, 0, 0.438]}
                              rotation={[0, 0, Math.PI]}
                            >
                              <mesh
                                name="Object_93"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_93.geometry}
                                material={materials.material_0}
                              />
                            </group>
                            <group name="tail_5_73" position={[0, 0, 0.875]}>
                              <group
                                name="tail_5_42"
                                position={[0, 0, 0.438]}
                                rotation={[0, 0, Math.PI / 4]}
                              >
                                <mesh
                                  name="Object_96"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_96.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_43"
                                position={[0, 0, 0.438]}
                                rotation={[0, 0, Math.PI / 4]}
                              >
                                <mesh
                                  name="Object_98"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_98.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_44"
                                position={[0, -0.125, 0.438]}
                                rotation={[0.305, 0, Math.PI]}
                              >
                                <mesh
                                  name="Object_100"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_100.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_45"
                                position={[0, -0.125, 0.438]}
                                rotation={[0, 0, Math.PI]}
                              >
                                <mesh
                                  name="Object_102"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_102.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_46"
                                position={[0, -0.125, 0.438]}
                                rotation={[-0.305, 0, Math.PI]}
                              >
                                <mesh
                                  name="Object_104"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_104.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_47"
                                position={[0.125, 0, 0.438]}
                                rotation={[0, -0.305, -Math.PI / 2]}
                              >
                                <mesh
                                  name="Object_106"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_106.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_48"
                                position={[-0.125, 0, 0.438]}
                                rotation={[0, 0.305, Math.PI / 2]}
                              >
                                <mesh
                                  name="Object_108"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_108.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_49"
                                position={[-0.125, 0, 0.438]}
                                rotation={[0, 0, Math.PI / 2]}
                              >
                                <mesh
                                  name="Object_110"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_110.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_50"
                                position={[-0.125, 0, 0.438]}
                                rotation={[0, -0.305, Math.PI / 2]}
                              >
                                <mesh
                                  name="Object_112"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_112.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_51"
                                position={[0, 0.125, 0.438]}
                                rotation={[-0.305, 0, 0]}
                              >
                                <mesh
                                  name="Object_114"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_114.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_52"
                                position={[0, 0.125, 0.438]}
                                rotation={[0.305, 0, 0]}
                              >
                                <mesh
                                  name="Object_116"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_116.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group name="tail_5_53" position={[0, 0, -4.813]}>
                                <mesh
                                  name="Object_118"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_118.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_54"
                                position={[0.125, 0, 0.438]}
                                rotation={[0, 0.305, -Math.PI / 2]}
                              >
                                <mesh
                                  name="Object_120"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_120.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group
                                name="tail_5_55"
                                position={[0.125, 0, 0.438]}
                                rotation={[0, 0, -Math.PI / 2]}
                              >
                                <mesh
                                  name="Object_122"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_122.geometry}
                                  material={materials.material_0}
                                />
                              </group>
                              <group name="tail_6_72" position={[0, 0, 0.875]}>
                                <group
                                  name="tail_6_56"
                                  position={[0, 0, 0.438]}
                                  rotation={[0, 0, Math.PI]}
                                >
                                  <mesh
                                    name="Object_125"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_125.geometry}
                                    material={materials.material_0}
                                  />
                                </group>
                                <group
                                  name="tail_7_71"
                                  position={[0, 0, 0.875]}
                                >
                                  <group
                                    name="tail_7_57"
                                    position={[0, 0, 0.438]}
                                    rotation={[0.087, 0, Math.PI / 2]}
                                  >
                                    <mesh
                                      name="Object_128"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_128.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                  <group
                                    name="tail_7_58"
                                    position={[0, 0, 0.438]}
                                    rotation={[-0.087, 0, -Math.PI / 2]}
                                  >
                                    <mesh
                                      name="Object_130"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_130.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                  <group
                                    name="tail_7_59"
                                    position={[0, 0, 1]}
                                    rotation={[0, Math.PI / 8, -Math.PI / 2]}
                                  >
                                    <mesh
                                      name="Object_132"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_132.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                  <group
                                    name="tail_7_60"
                                    position={[0, 0, 1]}
                                    rotation={[
                                      -Math.PI,
                                      -Math.PI / 4,
                                      Math.PI / 2,
                                    ]}
                                  >
                                    <mesh
                                      name="Object_134"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_134.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                  <group
                                    name="tail_7_61"
                                    position={[0.125, 0, -1.313]}
                                    rotation={[0, 0.436, -Math.PI / 2]}
                                  >
                                    <mesh
                                      name="Object_136"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_136.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                  <group
                                    name="tail_7_62"
                                    position={[0, 0, 1]}
                                    rotation={[0, -Math.PI / 8, Math.PI / 2]}
                                  >
                                    <mesh
                                      name="Object_138"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_138.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                  <group
                                    name="tail_7_63"
                                    position={[0, 0, 1]}
                                    rotation={[
                                      -Math.PI,
                                      Math.PI / 4,
                                      -Math.PI / 2,
                                    ]}
                                  >
                                    <mesh
                                      name="Object_140"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_140.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                  <group
                                    name="tail_7_64"
                                    position={[-0.125, 0, -1.313]}
                                    rotation={[0, -0.436, Math.PI / 2]}
                                  >
                                    <mesh
                                      name="Object_142"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_142.geometry}
                                      material={materials.material_0}
                                    />
                                  </group>
                                  <group
                                    name="tail_8_70"
                                    position={[0, 0, 0.813]}
                                  >
                                    <group
                                      name="tail_8_65"
                                      position={[0, 0, -0.375]}
                                      rotation={[0.087, 0, Math.PI / 2]}
                                    >
                                      <mesh
                                        name="Object_145"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_145.geometry}
                                        material={materials.material_0}
                                      />
                                    </group>
                                    <group
                                      name="tail_8_66"
                                      position={[0, 0, -0.375]}
                                      rotation={[-0.087, 0, -Math.PI / 2]}
                                    >
                                      <mesh
                                        name="Object_147"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_147.geometry}
                                        material={materials.material_0}
                                      />
                                    </group>
                                    <group
                                      name="tail_8_67"
                                      position={[0, 0, -7.375]}
                                    >
                                      <mesh
                                        name="Object_149"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_149.geometry}
                                        material={materials.material_0}
                                      />
                                    </group>
                                    <group
                                      name="tail_8_68"
                                      position={[0, 0, -7.375]}
                                    >
                                      <mesh
                                        name="Object_151"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_151.geometry}
                                        material={materials.material_0}
                                      />
                                    </group>
                                    <group
                                      name="tail_8_69"
                                      position={[0, 0, -7.375]}
                                    >
                                      <mesh
                                        name="Object_153"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object_153.geometry}
                                        material={materials.material_0}
                                      />
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="neck_0_165" position={[0, 0, -0.438]}>
                    <group
                      name="neck_0_79"
                      position={[0, 0, 1.313]}
                      rotation={[0, 0, Math.PI / 2]}
                    >
                      <mesh
                        name="Object_156"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_156.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="neck_1_164" position={[0, 0, -0.438]}>
                      <group
                        name="neck_1_80"
                        position={[0, 0, 1.313]}
                        rotation={[0, 0, Math.PI / 2]}
                      >
                        <mesh
                          name="Object_159"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_159.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="head_163" position={[0, 0, -0.438]}>
                        <group
                          name="head_81"
                          rotation={[Math.PI / 8, 0, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_162"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_162.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_82"
                          rotation={[-0.175, 0, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_164"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_164.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_83"
                          rotation={[-0.175, 0, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_166"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_166.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_84"
                          position={[0.016, -0.031, -0.105]}
                          rotation={[0.003, 0.821, -1.145]}
                        >
                          <mesh
                            name="Object_168"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_168.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_85"
                          position={[0.016, -0.031, -0.105]}
                          rotation={[0.113, 0.619, -1.218]}
                        >
                          <mesh
                            name="Object_170"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_170.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_86"
                          position={[0.016, -0.031, -0.105]}
                          rotation={[0.051, 0.74, -1.179]}
                        >
                          <mesh
                            name="Object_172"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_172.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_87"
                          position={[0, -0.063, -0.016]}
                          rotation={[0.551, 0.79, 0.639]}
                        >
                          <mesh
                            name="Object_174"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_174.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_88"
                          position={[0, -0.063, -0.016]}
                          rotation={[-0.068, 0.207, 0.955]}
                        >
                          <mesh
                            name="Object_176"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_176.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_89"
                          position={[0, -0.063, -0.016]}
                          rotation={[0.097, 0.418, 0.905]}
                        >
                          <mesh
                            name="Object_178"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_178.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_90"
                          position={[0, -0.063, -0.016]}
                          rotation={[-0.068, 0.207, 0.955]}
                        >
                          <mesh
                            name="Object_180"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_180.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_91"
                          position={[0, -0.063, -0.016]}
                          rotation={[0.097, 0.418, 0.905]}
                        >
                          <mesh
                            name="Object_182"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_182.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_92"
                          position={[-0.016, -0.031, -0.105]}
                          rotation={[0.003, -0.821, 1.145]}
                        >
                          <mesh
                            name="Object_184"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_184.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_93"
                          position={[-0.016, -0.031, -0.105]}
                          rotation={[0.113, -0.619, 1.218]}
                        >
                          <mesh
                            name="Object_186"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_186.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_94"
                          position={[-0.016, -0.031, -0.105]}
                          rotation={[0.051, -0.74, 1.179]}
                        >
                          <mesh
                            name="Object_188"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_188.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_95"
                          position={[0, -0.063, -0.016]}
                          rotation={[0.551, -0.79, -0.639]}
                        >
                          <mesh
                            name="Object_190"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_190.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_96"
                          position={[0, -0.063, -0.016]}
                          rotation={[-0.068, -0.207, -0.955]}
                        >
                          <mesh
                            name="Object_192"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_192.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_97"
                          position={[0, -0.063, -0.016]}
                          rotation={[0.097, -0.418, -0.905]}
                        >
                          <mesh
                            name="Object_194"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_194.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_98"
                          position={[0, -0.063, -0.016]}
                          rotation={[-0.068, -0.207, -0.955]}
                        >
                          <mesh
                            name="Object_196"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_196.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_99"
                          position={[0, -0.063, -0.016]}
                          rotation={[0.097, -0.418, -0.905]}
                        >
                          <mesh
                            name="Object_198"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_198.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_100"
                          rotation={[-Math.PI / 8, 0, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_200"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_200.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_101"
                          rotation={[0.175, 0, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_202"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_202.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_102"
                          rotation={[0.175, 0, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_204"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_204.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_103"
                          rotation={[-Math.PI / 6, 0, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_206"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_206.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_104"
                          rotation={[0.175, 0, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_208"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_208.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_105"
                          rotation={[-Math.PI / 6, 0, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_210"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_210.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_106"
                          rotation={[-Math.PI / 8, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_212"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_212.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_107"
                          position={[0, -0.016, 0]}
                          rotation={[-Math.PI / 8, -0.218, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_214"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_214.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_108"
                          position={[0, -0.016, 0]}
                          rotation={[-Math.PI / 8, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_216"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_216.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_109"
                          position={[0, -0.016, 0]}
                          rotation={[-0.787, -0.081, 1.537]}
                        >
                          <mesh
                            name="Object_218"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_218.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_110"
                          position={[0, -0.016, 0]}
                          rotation={[-Math.PI / 8, 0.218, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_220"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_220.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_111"
                          position={[0, 0.547, -0.375]}
                          rotation={[-1.176, -0.171, 1.588]}
                        >
                          <mesh
                            name="Object_222"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_222.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_112"
                          position={[0, 0.547, -0.375]}
                          rotation={[-1.176, 0.171, -1.588]}
                        >
                          <mesh
                            name="Object_224"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_224.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_113"
                          position={[0, -0.016, 0]}
                          rotation={[-Math.PI / 8, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_226"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_226.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_114"
                          position={[0, -0.016, 0]}
                          rotation={[-0.787, 0.081, -1.537]}
                        >
                          <mesh
                            name="Object_228"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_228.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_115"
                          rotation={[-Math.PI / 8, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_230"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_230.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_116"
                          position={[0, -0.006, 0]}
                          rotation={[-Math.PI / 8, -0.218, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_232"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_232.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_117"
                          position={[0, -0.006, 0]}
                          rotation={[-Math.PI / 8, 0.218, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_234"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_234.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_118"
                          position={[0, -0.063, 0.047]}
                          rotation={[-Math.PI / 8, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_236"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_236.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_119"
                          position={[0, -0.063, 0.047]}
                          rotation={[-1.18, 0.062, -1.509]}
                        >
                          <mesh
                            name="Object_238"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_238.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_120"
                          position={[0, -0.063, 0.047]}
                          rotation={[-1.18, -0.062, 1.509]}
                        >
                          <mesh
                            name="Object_240"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_240.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_121"
                          position={[0, -0.063, 0.047]}
                          rotation={[-Math.PI / 8, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_242"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_242.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_122"
                          position={[0, -0.125, 0]}
                          rotation={[-Math.PI / 8, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_244"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_244.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_123"
                          position={[0, -0.125, 0]}
                          rotation={[-Math.PI / 8, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_246"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_246.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_124"
                          rotation={[-Math.PI / 8, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_248"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_248.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_125"
                          rotation={[-Math.PI / 8, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_250"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_250.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_126"
                          rotation={[-0.175, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_252"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_252.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_127"
                          rotation={[-0.175, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_254"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_254.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_128"
                          position={[0, -0.406, -0.078]}
                          rotation={[-0.044, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_256"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_256.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_129"
                          position={[0, -0.406, -0.078]}
                          rotation={[-0.044, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_258"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_258.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_130"
                          position={[0, -0.453, -0.078]}
                          rotation={[-0.044, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_260"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_260.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_131"
                          position={[0, -0.453, -0.078]}
                          rotation={[-0.044, Math.PI / 4, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_262"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_262.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_132"
                          position={[0, -0.453, -0.078]}
                          rotation={[-0.044, -Math.PI / 4, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_264"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_264.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_133"
                          position={[0, -0.453, -0.078]}
                          rotation={[-0.044, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_266"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_266.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_134"
                          position={[0, -0.484, -0.078]}
                          rotation={[-0.044, 0.087, -Math.PI / 2]}
                        >
                          <mesh
                            name="Object_268"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_268.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="head_135"
                          position={[0, -0.484, -0.078]}
                          rotation={[-0.044, -0.087, Math.PI / 2]}
                        >
                          <mesh
                            name="Object_270"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_270.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="head_136" position={[0, 0, 1.313]}>
                          <mesh
                            name="Object_272"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_272.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group name="eyelids_139" position={[0, 0.125, -0.688]}>
                          <group
                            name="eyelids_137"
                            position={[0, -0.125, 0.688]}
                            rotation={[-Math.PI / 8, -0.087, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_275"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_275.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="eyelids_138"
                            position={[0, -0.125, 0.688]}
                            rotation={[-Math.PI / 8, 0.087, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_277"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_277.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group name="jaw_158" position={[0, -0.141, -0.469]}>
                          <group
                            name="jaw_140"
                            position={[0, 0.297, 0.375]}
                            rotation={[0, 0.087, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_280"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_280.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_141"
                            position={[0, 0.297, 0.375]}
                            rotation={[0, -0.087, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_282"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_282.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_142"
                            position={[0, 0.297, 0.438]}
                            rotation={[0, -0.48, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_284"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_284.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_143"
                            position={[0, 0.297, 0.438]}
                            rotation={[0, 0.48, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_286"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_286.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_144"
                            position={[0, 0.344, 0.375]}
                            rotation={[0, -0.087, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_288"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_288.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_145"
                            position={[0, 0.375, 0.375]}
                            rotation={[0, -0.087, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_290"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_290.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_146"
                            position={[0, 0.344, 0.375]}
                            rotation={[0, 0.087, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_292"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_292.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_147"
                            position={[0, 0.469, 0.406]}
                            rotation={[-0.218, -0.087, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_294"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_294.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_148"
                            position={[0, 0.422, 0.406]}
                            rotation={[-0.218, -0.087, -Math.PI / 2]}
                          >
                            <mesh
                              name="Object_296"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_296.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_149"
                            position={[0, 0.422, 0.406]}
                            rotation={[-0.218, 0.087, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_298"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_298.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_150"
                            position={[0, 0.469, 0.406]}
                            rotation={[-0.218, 0.087, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_300"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_300.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_151"
                            position={[0, 0.375, 0.375]}
                            rotation={[0, 0.087, Math.PI / 2]}
                          >
                            <mesh
                              name="Object_302"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_302.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_152"
                            position={[0, 0, 0.063]}
                            rotation={[0, Math.PI / 4, 0]}
                          >
                            <mesh
                              name="Object_304"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_304.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_153"
                            position={[0, 0, 0.063]}
                            rotation={[0, Math.PI / 4, 0]}
                          >
                            <mesh
                              name="Object_306"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_306.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_154"
                            position={[0, 0, 0.063]}
                            rotation={[0.131, Math.PI / 2, 0]}
                          >
                            <mesh
                              name="Object_308"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_308.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_155"
                            position={[0, 0, 3.5]}
                            rotation={[-0.131, -Math.PI / 2, 0]}
                          >
                            <mesh
                              name="Object_310"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_310.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_156"
                            position={[0, 0, 0.063]}
                            rotation={[0, -Math.PI / 4, 0]}
                          >
                            <mesh
                              name="Object_312"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_312.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="jaw_157"
                            position={[0, 0, 0.063]}
                            rotation={[0, -Math.PI / 4, 0]}
                          >
                            <mesh
                              name="Object_314"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_314.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group
                          name="eye_0_160"
                          position={[-0.13, -0.009, -0.594]}
                        >
                          <group name="eye_0_159" rotation={[0, -0.131, 0]}>
                            <mesh
                              name="Object_317"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_317.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group
                          name="eye_1_162"
                          position={[0.13, -0.009, -0.594]}
                        >
                          <group name="eye_1_161" rotation={[0, 0.131, 0]}>
                            <mesh
                              name="Object_320"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_320.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="arm_1_182" position={[-0.188, 0, -0.125]}>
                    <group name="arm_1_166" position={[0.188, 0, 0.125]}>
                      <mesh
                        name="Object_323"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_323.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="arm_1_167" position={[0.188, 0, 0.125]}>
                      <mesh
                        name="Object_325"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_325.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="elbow_1_181" position={[-0.563, 0, 0]}>
                      <group name="elbow_1_168" position={[0.75, 0, 0.125]}>
                        <mesh
                          name="Object_328"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_328.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="elbow_1_169" position={[0.75, 0, 0.125]}>
                        <mesh
                          name="Object_330"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_330.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="hand_1_180" position={[-0.563, 0, 0]}>
                        <group name="hand_1_170" position={[1.313, 0, 0.125]}>
                          <mesh
                            name="Object_333"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_333.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="outer_finger_1_173"
                          position={[-0.063, -0.063, 0.063]}
                        >
                          <group
                            name="outer_finger_1_171"
                            rotation={[Math.PI / 4, 0, 0]}
                          >
                            <mesh
                              name="Object_336"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_336.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="outer_finger_1_172"
                            position={[-0.063, 0, 0]}
                            rotation={[0, 0, Math.PI / 8]}
                          >
                            <mesh
                              name="Object_338"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_338.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group
                          name="thumb_1_176"
                          position={[-0.063, -0.063, -0.063]}
                        >
                          <group
                            name="thumb_1_174"
                            rotation={[Math.PI / 4, 0, 0]}
                          >
                            <mesh
                              name="Object_341"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_341.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="thumb_1_175"
                            position={[-0.063, 0, 0]}
                            rotation={[0, 0, Math.PI / 8]}
                          >
                            <mesh
                              name="Object_343"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_343.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group
                          name="inner_finger_1_179"
                          position={[-0.063, 0.047, 0]}
                        >
                          <group
                            name="inner_finger_1_177"
                            rotation={[Math.PI / 4, 0, 0]}
                          >
                            <mesh
                              name="Object_346"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_346.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="inner_finger_1_178"
                            position={[-0.063, 0, 0]}
                            rotation={[0, 0, Math.PI / 8]}
                          >
                            <mesh
                              name="Object_348"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_348.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="arm_2_199" position={[0.188, 0, -0.125]}>
                    <group name="arm_2_183" position={[-0.188, 0, 0.125]}>
                      <mesh
                        name="Object_351"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_351.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="arm_2_184" position={[-0.188, 0, 0.125]}>
                      <mesh
                        name="Object_353"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_353.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <group name="elbow_2_198" position={[0.563, 0, 0]}>
                      <group name="elbow_2_185" position={[-0.75, 0, 0.125]}>
                        <mesh
                          name="Object_356"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_356.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="elbow_2_186" position={[-0.75, 0, 0.125]}>
                        <mesh
                          name="Object_358"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_358.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <group name="hand_2_197" position={[0.563, 0, 0]}>
                        <group name="hand_2_187" position={[-1.313, 0, 0.125]}>
                          <mesh
                            name="Object_361"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_361.geometry}
                            material={materials.material_0}
                          />
                        </group>
                        <group
                          name="outer_finger_2_190"
                          position={[0.063, -0.063, 0.063]}
                        >
                          <group
                            name="outer_finger_2_188"
                            rotation={[Math.PI / 4, 0, 0]}
                          >
                            <mesh
                              name="Object_364"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_364.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="outer_finger_2_189"
                            position={[0.063, 0, 0]}
                            rotation={[0, 0, -Math.PI / 8]}
                          >
                            <mesh
                              name="Object_366"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_366.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group
                          name="thumb_2_193"
                          position={[0.063, -0.063, -0.063]}
                        >
                          <group
                            name="thumb_2_191"
                            rotation={[Math.PI / 4, 0, 0]}
                          >
                            <mesh
                              name="Object_369"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_369.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="thumb_2_192"
                            position={[0.063, 0, 0]}
                            rotation={[0, 0, -Math.PI / 8]}
                          >
                            <mesh
                              name="Object_371"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_371.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                        <group
                          name="inner_finger_2_196"
                          position={[0.063, 0.047, 0]}
                        >
                          <group
                            name="inner_finger_2_194"
                            rotation={[Math.PI / 4, 0, 0]}
                          >
                            <mesh
                              name="Object_374"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_374.geometry}
                              material={materials.material_0}
                            />
                          </group>
                          <group
                            name="inner_finger_2_195"
                            position={[0.063, 0, 0]}
                            rotation={[0, 0, -Math.PI / 8]}
                          >
                            <mesh
                              name="Object_376"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_376.geometry}
                              material={materials.material_0}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Rayquaza;
