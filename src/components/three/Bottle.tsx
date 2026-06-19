import { useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import type { MousePosition } from "../../hooks/useMouse";

interface BottleProps {
  scrollRef: MutableRefObject<number>;
  mouseRef: MutableRefObject<MousePosition>;
}

const Bottle = ({ scrollRef, mouseRef }: BottleProps): JSX.Element => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const s = THREE.MathUtils.clamp(scrollRef.current, 0, 1);
    const { x: mx, y: my } = mouseRef.current;

    // Rotasi SANGAT lambat + parallax kursor lembut (semua di-damp agar halus)
    const influence = 1 - s * 0.5;
    const targetRotY = state.clock.elapsedTime * 0.12 + mx * 0.22 * influence;
    const targetRotX = my * 0.1 * influence;
    group.rotation.y = THREE.MathUtils.damp(group.rotation.y, targetRotY, 1.4, delta);
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, targetRotX, 1.4, delta);

    // Membesar perlahan saat scroll menuju Showcase
    const targetScale = THREE.MathUtils.lerp(1, 1.16, s);
    const nextScale = THREE.MathUtils.damp(group.scale.x, targetScale, 1.4, delta);
    group.scale.setScalar(nextScale);
  });

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.12} floatIntensity={0.35}>
        {/* Badan botol — kaca dengan refraksi nyata */}
        <RoundedBox args={[1.15, 1.7, 0.5]} radius={0.12} smoothness={8}>
          <MeshTransmissionMaterial
            transmission={1}
            thickness={0.85}
            roughness={0.05}
            ior={1.45}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.05}
            color="#fde8c4"
          />
        </RoundedBox>

        {/* Cairan parfum amber bercahaya lembut */}
        <RoundedBox args={[0.92, 1.15, 0.34]} radius={0.08} position={[0, -0.18, 0]}>
          <meshPhysicalMaterial
            color="#c2740b"
            transmission={0.5}
            thickness={1}
            roughness={0.25}
            emissive="#7c3f06"
            emissiveIntensity={0.35}
          />
        </RoundedBox>

        {/* Leher botol */}
        <mesh position={[0, 1.0, 0]}>
          <cylinderGeometry args={[0.17, 0.2, 0.28, 48]} />
          <meshStandardMaterial color="#e9d9b8" metalness={0.2} roughness={0.1} />
        </mesh>

        {/* Tutup emas */}
        <mesh position={[0, 1.32, 0]}>
          <cylinderGeometry args={[0.24, 0.24, 0.4, 48]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.18} />
        </mesh>

        {/* Debu emas berkilau — gerak sangat pelan */}
        {/* <Sparkles count={40} scale={5} size={2} speed={0.15} color="#f5d68a" /> */}
      </Float>
    </group>
  );
};

export default Bottle;
