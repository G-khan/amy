import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { type PortfolioItem } from '../../data/portfolioData';
import { type ArtworkPlacement } from './galleryLayout';
import { ThreeEvent } from '@react-three/fiber';

interface Props {
  item: PortfolioItem;
  placement: ArtworkPlacement;
  onSelect: (item: PortfolioItem) => void;
  onHover: (title: string | null) => void;
}

const FRAME_DEPTH = 0.1;
const FRAME_BORDER = 0.1;

// Shared logo texture loaded once
let logoTexture: THREE.Texture | null = null;
let logoLoading = false;
function getLogoTexture(cb: (tex: THREE.Texture | null) => void) {
  if (logoTexture) { cb(logoTexture); return; }
  if (logoLoading) { setTimeout(() => getLogoTexture(cb), 100); return; }
  logoLoading = true;
  const img = new Image();
  img.onload = () => {
    const tex = new THREE.Texture(img);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    logoTexture = tex;
    cb(tex);
  };
  img.onerror = () => cb(null);
  img.src = '/img/logo/logo.png';
}

export default function ArtworkFrame({ item, placement, onSelect, onHover }: Props) {
  const [hovered, setHovered] = useState(false);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [logoTex, setLogoTex] = useState<THREE.Texture | null>(null);
  const disposed = useRef(false);

  const { frameWidth: w, frameHeight: h } = placement;

  useEffect(() => {
    disposed.current = false;
    const img = new Image();
    img.onload = () => {
      if (disposed.current) return;
      const tex = new THREE.Texture(img);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      setTexture(tex);
    };
    img.onerror = () => {
      if (disposed.current) return;
      setTexture(null);
    };
    if (item.image.startsWith('http')) {
      img.crossOrigin = 'anonymous';
    }
    img.src = item.image;

    return () => {
      disposed.current = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [item.image]);

  useEffect(() => {
    getLogoTexture((tex) => {
      if (!disposed.current) setLogoTex(tex);
    });
  }, []);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.distance < 6) {
      onSelect(item);
    }
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (e.distance < 6) {
      setHovered(true);
      onHover(item.title);
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover(null);
  };

  const frameColor = hovered ? '#6a5a4a' : '#2a1a0a';
  const emissive = hovered ? '#554433' : '#000000';
  const emissiveIntensity = hovered ? 0.4 : 0;

  return (
    <group position={placement.position} rotation={placement.rotation}>
      {/* Back panel / mat */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[w + FRAME_BORDER * 2 + 0.06, h + FRAME_BORDER * 2 + 0.06]} />
        <meshStandardMaterial color="#1a1008" roughness={0.95} />
      </mesh>

      {/* Inner mat / passepartout */}
      <mesh position={[0, 0, FRAME_DEPTH / 2 - 0.01]}>
        <planeGeometry args={[w + 0.06, h + 0.06]} />
        <meshStandardMaterial color="#f5f0e0" roughness={0.9} />
      </mesh>

      {/* Painting surface */}
      <mesh
        position={[0, 0, FRAME_DEPTH / 2 + 0.01]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <planeGeometry args={[w, h]} />
        {texture ? (
          <meshStandardMaterial map={texture} toneMapped={false} />
        ) : (
          <meshStandardMaterial color="#555555" roughness={0.8} />
        )}
      </mesh>

      {/* Frame - Top */}
      <mesh position={[0, h / 2 + FRAME_BORDER / 2, 0]}>
        <boxGeometry args={[w + FRAME_BORDER * 2, FRAME_BORDER, FRAME_DEPTH]} />
        <meshStandardMaterial color={frameColor} roughness={0.4} metalness={0.1} emissive={emissive} emissiveIntensity={emissiveIntensity} />
      </mesh>
      {/* Frame - Bottom */}
      <mesh position={[0, -h / 2 - FRAME_BORDER / 2, 0]}>
        <boxGeometry args={[w + FRAME_BORDER * 2, FRAME_BORDER, FRAME_DEPTH]} />
        <meshStandardMaterial color={frameColor} roughness={0.4} metalness={0.1} emissive={emissive} emissiveIntensity={emissiveIntensity} />
      </mesh>
      {/* Frame - Left */}
      <mesh position={[-w / 2 - FRAME_BORDER / 2, 0, 0]}>
        <boxGeometry args={[FRAME_BORDER, h + FRAME_BORDER * 2, FRAME_DEPTH]} />
        <meshStandardMaterial color={frameColor} roughness={0.4} metalness={0.1} emissive={emissive} emissiveIntensity={emissiveIntensity} />
      </mesh>
      {/* Frame - Right */}
      <mesh position={[w / 2 + FRAME_BORDER / 2, 0, 0]}>
        <boxGeometry args={[FRAME_BORDER, h + FRAME_BORDER * 2, FRAME_DEPTH]} />
        <meshStandardMaterial color={frameColor} roughness={0.4} metalness={0.1} emissive={emissive} emissiveIntensity={emissiveIntensity} />
      </mesh>

      {/* Logo at bottom-right corner of painting */}
      {logoTex && (
        <mesh position={[w / 2 - 0.12, -h / 2 + 0.12, FRAME_DEPTH / 2 + 0.015]}>
          <planeGeometry args={[0.18, 0.18]} />
          <meshBasicMaterial map={logoTex} transparent opacity={0.85} />
        </mesh>
      )}

      {/* Nameplate background */}
      <mesh position={[0, -h / 2 - FRAME_BORDER - 0.28, 0.03]}>
        <planeGeometry args={[Math.max(w * 0.7, 1.4), 0.16]} />
        <meshStandardMaterial color="#b8984a" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Title text on nameplate */}
      <Text
        position={[0, -h / 2 - FRAME_BORDER - 0.28, 0.035]}
        fontSize={0.055}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.12}
        maxWidth={Math.max(w * 0.65, 1.3)}
      >
        {item.title.toUpperCase()}
      </Text>
    </group>
  );
}
