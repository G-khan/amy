import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { PLAYER_BOUNDS } from './galleryLayout';

const SPEED = 4;

interface Keys {
  w: boolean;
  a: boolean;
  s: boolean;
  d: boolean;
}

export function useMovement(enabled: boolean) {
  const { camera } = useThree();
  const keys = useRef<Keys>({ w: false, a: false, s: false, d: false });
  const direction = useRef(new Vector3());
  const frontVector = useRef(new Vector3());
  const sideVector = useRef(new Vector3());

  useEffect(() => {
    const setKey = (key: string, value: boolean) => {
      const k = key.toLowerCase();
      if (k === 'w' || k === 'arrowup') keys.current.w = value;
      if (k === 's' || k === 'arrowdown') keys.current.s = value;
      if (k === 'a' || k === 'arrowleft') keys.current.a = value;
      if (k === 'd' || k === 'arrowright') keys.current.d = value;
    };

    const onKeyDown = (e: KeyboardEvent) => setKey(e.key, true);
    const onKeyUp = (e: KeyboardEvent) => setKey(e.key, false);

    if (enabled) {
      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('keyup', onKeyUp);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      keys.current = { w: false, a: false, s: false, d: false };
    };
  }, [enabled]);

  useFrame((_, delta) => {
    if (!enabled) return;

    const { w, a, s, d } = keys.current;
    const forward = (s ? 1 : 0) - (w ? 1 : 0);
    const strafe = (d ? 1 : 0) - (a ? 1 : 0);

    if (forward === 0 && strafe === 0) return;

    frontVector.current.set(0, 0, forward);
    sideVector.current.set(strafe, 0, 0);

    direction.current
      .copy(frontVector.current)
      .add(sideVector.current)
      .normalize()
      .multiplyScalar(SPEED * delta)
      .applyEuler(camera.rotation);

    direction.current.y = 0;
    camera.position.add(direction.current);

    camera.position.x = Math.max(PLAYER_BOUNDS.minX, Math.min(PLAYER_BOUNDS.maxX, camera.position.x));
    camera.position.z = Math.max(PLAYER_BOUNDS.minZ, Math.min(PLAYER_BOUNDS.maxZ, camera.position.z));
    camera.position.y = 1.7;
  });
}
