import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, type MutableRefObject } from "react";
import Bottle from "./Bottle";
import type { MousePosition } from "../../hooks/useMouse";

interface SceneProps {
  scrollRef: MutableRefObject<number>;
  mouseRef: MutableRefObject<MousePosition>;
}

const cameraSettings = { position: [0, 0, 6] as [number, number, number], fov: 42 };

const Scene = ({ scrollRef, mouseRef }: SceneProps): JSX.Element => {
  return (
    <Canvas camera={cameraSettings} dpr={[1, 2]}>
      <color attach="background" args={["#0e0b08"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={1.1} color="#ffe8c2" />

      <Suspense fallback={null}>
        {/* Environment kustom (tanpa file HDR eksternal) untuk refleksi pada kaca & emas */}
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={2} color="#fff3d6" scale={[8, 8, 1]} position={[0, 4, -6]} />
          <Lightformer form="circle" intensity={3} color="#f5b971" scale={[4, 4, 1]} position={[-5, 1, 2]} />
          <Lightformer form="rect" intensity={1.5} color="#ffffff" scale={[6, 6, 1]} position={[5, 2, 3]} />
        </Environment>

        <Bottle scrollRef={scrollRef} mouseRef={mouseRef} />

        {/* Bloom lembut agar cairan & emas tampak bercahaya */}
        <EffectComposer>
          <Bloom intensity={0.6} luminanceThreshold={0.35} luminanceSmoothing={0.9} mipmapBlur />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
