import { PointerLockControls } from '@react-three/drei';
import { useRef, useEffect, useCallback } from 'react';
import { useThree } from '@react-three/fiber';
import { useMovement } from './useMovement';
import { PLAYER_START } from './galleryLayout';

interface Props {
  isLocked: boolean;
  onLockChange: (locked: boolean) => void;
}

export default function GalleryControls({ isLocked, onLockChange }: Props) {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      camera.position.set(PLAYER_START.x, PLAYER_START.y, PLAYER_START.z);
      camera.lookAt(0, PLAYER_START.y, 0);
      initialized.current = true;
    }
  }, [camera]);

  const handleLock = useCallback(() => onLockChange(true), [onLockChange]);
  const handleUnlock = useCallback(() => onLockChange(false), [onLockChange]);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.addEventListener('lock', handleLock);
    controls.addEventListener('unlock', handleUnlock);

    return () => {
      controls.removeEventListener('lock', handleLock);
      controls.removeEventListener('unlock', handleUnlock);
    };
  }, [handleLock, handleUnlock]);

  useMovement(isLocked);

  return <PointerLockControls ref={controlsRef} />;
}
