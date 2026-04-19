import { useMemo } from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { WALLS, ROOM } from './galleryLayout';

export default function GalleryRoom() {
  const studioTextTexture = useMemo<THREE.CanvasTexture | null>(() => {
    if (typeof document === 'undefined') {
      return null;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const context = canvas.getContext('2d');

    if (!context) {
      return null;
    }

    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#050505');
    gradient.addColorStop(0.5, '#161616');
    gradient.addColorStop(1, '#090909');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let index = 0; index < 220; index += 1) {
      const shade = 10 + Math.floor(Math.random() * 45);
      context.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${0.04 + Math.random() * 0.12})`;
      context.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        24 + Math.random() * 80,
        2 + Math.random() * 8,
      );
    }

    for (let index = 0; index < 1600; index += 1) {
      const alpha = 0.04 + Math.random() * 0.08;
      const shade = Math.random() > 0.6 ? 235 : 25 + Math.floor(Math.random() * 35);
      context.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${alpha})`;
      context.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1.8, 1);
    texture.needsUpdate = true;

    return texture;
  }, []);
  const studioTextMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#131313',
        map: studioTextTexture ?? undefined,
        roughness: 0.95,
        metalness: 0.02,
      }),
    [studioTextTexture],
  );

  return (
    <group>
      {/* Walls, floor, ceiling */}
      {WALLS.map((wall) => {
        const isFloor = wall.name === 'floor';
        const isCeiling = wall.name === 'ceiling';
        return (
          <mesh key={wall.name} position={wall.position} rotation={wall.rotation}>
            <planeGeometry args={wall.size} />
            <meshStandardMaterial
              color={isFloor ? '#5c4033' : isCeiling ? '#e8e2d8' : '#ede8df'}
              roughness={isFloor ? 0.85 : isCeiling ? 0.95 : 0.92}
              metalness={isFloor ? 0.05 : 0}
            />
          </mesh>
        );
      })}

      {/* Baseboards - dark wood trim along bottom of walls */}
      {/* North baseboard */}
      <mesh position={[0, 0.1, -14.99]}>
        <boxGeometry args={[ROOM.width, 0.2, 0.06]} />
        <meshStandardMaterial color="#2a1a0a" roughness={0.5} metalness={0.05} />
      </mesh>
      {/* South baseboard */}
      <mesh position={[0, 0.1, 14.99]}>
        <boxGeometry args={[ROOM.width, 0.2, 0.06]} />
        <meshStandardMaterial color="#2a1a0a" roughness={0.5} metalness={0.05} />
      </mesh>
      {/* West baseboard */}
      <mesh position={[-9.99, 0.1, 0]}>
        <boxGeometry args={[0.06, 0.2, ROOM.depth]} />
        <meshStandardMaterial color="#2a1a0a" roughness={0.5} metalness={0.05} />
      </mesh>
      {/* East baseboard */}
      <mesh position={[9.99, 0.1, 0]}>
        <boxGeometry args={[0.06, 0.2, ROOM.depth]} />
        <meshStandardMaterial color="#2a1a0a" roughness={0.5} metalness={0.05} />
      </mesh>

      {/* Crown molding - subtle light trim along ceiling */}
      {/* North crown */}
      <mesh position={[0, 4.92, -14.97]}>
        <boxGeometry args={[ROOM.width, 0.12, 0.08]} />
        <meshStandardMaterial color="#d4cfc5" roughness={0.8} />
      </mesh>
      {/* South crown */}
      <mesh position={[0, 4.92, 14.97]}>
        <boxGeometry args={[ROOM.width, 0.12, 0.08]} />
        <meshStandardMaterial color="#d4cfc5" roughness={0.8} />
      </mesh>
      {/* West crown */}
      <mesh position={[-9.97, 4.92, 0]}>
        <boxGeometry args={[0.08, 0.12, ROOM.depth]} />
        <meshStandardMaterial color="#d4cfc5" roughness={0.8} />
      </mesh>
      {/* East crown */}
      <mesh position={[9.97, 4.92, 0]}>
        <boxGeometry args={[0.08, 0.12, ROOM.depth]} />
        <meshStandardMaterial color="#d4cfc5" roughness={0.8} />
      </mesh>

      {/* Gallery bench in center */}
      {/* Bench seat */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[2.4, 0.08, 0.7]} />
        <meshStandardMaterial color="#2a1a0a" roughness={0.5} metalness={0.05} />
      </mesh>
      {/* Bench legs */}
      <mesh position={[-1.0, 0.22, 0]}>
        <boxGeometry args={[0.08, 0.44, 0.6]} />
        <meshStandardMaterial color="#1a1008" roughness={0.6} />
      </mesh>
      <mesh position={[1.0, 0.22, 0]}>
        <boxGeometry args={[0.08, 0.44, 0.6]} />
        <meshStandardMaterial color="#1a1008" roughness={0.6} />
      </mesh>

      <Text
        position={[0, 4.12, 14.88]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.58}
        maxWidth={9.5}
        letterSpacing={0.08}
        lineHeight={1}
        anchorX="center"
        anchorY="middle"
        material={studioTextMaterial}
      >
        AMY ART STUDIO
      </Text>
    </group>
  );
}
