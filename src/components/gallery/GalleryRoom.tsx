import { WALLS, ROOM } from './galleryLayout';

export default function GalleryRoom() {
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
    </group>
  );
}
