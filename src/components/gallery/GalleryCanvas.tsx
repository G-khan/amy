import { Canvas } from '@react-three/fiber';
import { useRef, useCallback, Suspense } from 'react';
import GalleryRoom from './GalleryRoom';
import GalleryLighting from './GalleryLighting';
import GalleryControls from './GalleryControls';
import ArtworkFrame from './ArtworkFrame';
import { ARTWORK_PLACEMENTS } from './galleryLayout';
import { portfolioItems, type PortfolioItem } from '../../data/portfolioData';
import * as THREE from 'three';

interface Props {
  isActive: boolean;
  onSelectArtwork: (item: PortfolioItem) => void;
  isLocked: boolean;
  onLockChange: (locked: boolean) => void;
  onHover: (title: string | null) => void;
}

export default function GalleryCanvas({ isActive, onSelectArtwork, isLocked, onLockChange, onHover }: Props) {
  const itemMap = useRef(new Map(portfolioItems.map((item) => [item.id, item]))).current;

  const handleHover = useCallback(
    (title: string | null) => {
      if (isLocked) onHover(title);
    },
    [isLocked, onHover],
  );

  return (
    <Canvas
      frameloop={isActive ? 'always' : 'never'}
      camera={{ fov: 60, near: 0.1, far: 100 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.6 }}
    >
      {/* Depth fog for atmosphere */}
      <fog attach="fog" args={['#2a2420', 25, 50]} />

      <GalleryLighting />
      <GalleryRoom />

      <Suspense fallback={null}>
        {ARTWORK_PLACEMENTS.map((placement) => {
          const item = itemMap.get(placement.itemId);
          if (!item) return null;
          return (
            <ArtworkFrame
              key={placement.itemId}
              item={item}
              placement={placement}
              onSelect={onSelectArtwork}
              onHover={handleHover}
            />
          );
        })}
      </Suspense>

      <GalleryControls isLocked={isLocked} onLockChange={onLockChange} />
    </Canvas>
  );
}
