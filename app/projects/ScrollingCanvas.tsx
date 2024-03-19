import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshNormalMaterial } from "three";

export default function ScrollingCanvas() {
  return (
    <Canvas className="top-margin h-screen">
      <>
        <ambientLight intensity={1} />
        <OrbitControls />
        <ScrollControls pages={3} damping={0.25}>
          <group>
            <mesh>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
            <mesh>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
            <mesh>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
          </group>
        </ScrollControls>
      </>
    </Canvas>
  );
}
