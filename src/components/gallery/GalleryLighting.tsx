import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { ARTWORK_PLACEMENTS } from './galleryLayout';

function ArtworkSpot({ artPos }: { artPos: [number, number, number] }) {
  const lightRef = useRef<THREE.SpotLight>(null);
  const targetObj = useRef(new THREE.Object3D()).current;

  useEffect(() => {
    targetObj.position.set(artPos[0], artPos[1], artPos[2]);
    targetObj.updateMatrixWorld();
    if (lightRef.current) {
      lightRef.current.target = targetObj;
      lightRef.current.target.updateMatrixWorld();
    }
  }, [artPos, targetObj]);

  // Offset light toward center of room
  const offsetX = artPos[0] > 5 ? -2 : artPos[0] < -5 ? 2 : 0;
  const offsetZ = artPos[2] > 10 ? -2 : artPos[2] < -10 ? 2 : 0;

  return (
    <group>
      <primitive object={targetObj} />
      <spotLight
        ref={lightRef}
        position={[artPos[0] + offsetX, 4.6, artPos[2] + offsetZ]}
        angle={0.45}
        penumbra={0.6}
        intensity={5}
        color="#fff5e0"
        distance={12}
        decay={1.2}
      />
    </group>
  );
}

export default function GalleryLighting() {
  return (
    <>
      {/* Ambient fill - bright gallery feel */}
      <ambientLight intensity={0.6} color="#f5f0e8" />

      {/* Warm ceiling wash lights */}
      <pointLight position={[0, 4.8, -5]} intensity={0.5} color="#fff5e0" distance={25} decay={1.5} />
      <pointLight position={[0, 4.8, 5]} intensity={0.5} color="#fff5e0" distance={25} decay={1.5} />
      <pointLight position={[-5, 4.8, 0]} intensity={0.4} color="#fff5e0" distance={25} decay={1.5} />
      <pointLight position={[5, 4.8, 0]} intensity={0.4} color="#fff5e0" distance={25} decay={1.5} />

      {/* Per-artwork museum track spotlights */}
      {ARTWORK_PLACEMENTS.map((art) => (
        <ArtworkSpot key={art.itemId} artPos={art.position} />
      ))}
    </>
  );
}
