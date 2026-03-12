export const ROOM = {
  width: 20,
  depth: 30,
  height: 5,
};

export const PLAYER_START = { x: 0, y: 1.7, z: 12 };

export const PLAYER_BOUNDS = {
  minX: -9.5,
  maxX: 9.5,
  minZ: -14.5,
  maxZ: 14.5,
};

export interface WallDefinition {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  name: string;
}

export const WALLS: WallDefinition[] = [
  { name: 'floor', position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0], size: [20, 30] },
  { name: 'ceiling', position: [0, 5, 0], rotation: [Math.PI / 2, 0, 0], size: [20, 30] },
  { name: 'north', position: [0, 2.5, -15], rotation: [0, 0, 0], size: [20, 5] },
  { name: 'south', position: [0, 2.5, 15], rotation: [0, Math.PI, 0], size: [20, 5] },
  { name: 'west', position: [-10, 2.5, 0], rotation: [0, Math.PI / 2, 0], size: [30, 5] },
  { name: 'east', position: [10, 2.5, 0], rotation: [0, -Math.PI / 2, 0], size: [30, 5] },
];

export interface ArtworkPlacement {
  itemId: number;
  position: [number, number, number];
  rotation: [number, number, number];
  frameWidth: number;
  frameHeight: number;
}

export const ARTWORK_PLACEMENTS: ArtworkPlacement[] = [
  // North wall (facing south, toward +Z)
  { itemId: 1, position: [-6, 2.2, -14.95], rotation: [0, 0, 0], frameWidth: 1.5, frameHeight: 1.5 },
  { itemId: 2, position: [0, 2.2, -14.95], rotation: [0, 0, 0], frameWidth: 2.4, frameHeight: 2.0 },
  { itemId: 3, position: [6, 2.2, -14.95], rotation: [0, 0, 0], frameWidth: 1.5, frameHeight: 2.0 },
  // West wall (facing east, toward +X)
  { itemId: 4, position: [-9.95, 2.2, -8], rotation: [0, Math.PI / 2, 0], frameWidth: 1.2, frameHeight: 2.0 },
  { itemId: 5, position: [-9.95, 2.2, -1], rotation: [0, Math.PI / 2, 0], frameWidth: 1.75, frameHeight: 2.0 },
  { itemId: 6, position: [-9.95, 2.2, 6], rotation: [0, Math.PI / 2, 0], frameWidth: 1.5, frameHeight: 2.0 },
  // East wall (facing west, toward -X)
  { itemId: 7, position: [9.95, 2.2, -8], rotation: [0, -Math.PI / 2, 0], frameWidth: 1.75, frameHeight: 2.0 },
  { itemId: 8, position: [9.95, 2.2, -1], rotation: [0, -Math.PI / 2, 0], frameWidth: 1.75, frameHeight: 2.0 },
  { itemId: 9, position: [9.95, 2.2, 6], rotation: [0, -Math.PI / 2, 0], frameWidth: 1.5, frameHeight: 1.5 },
  // South wall (facing north, toward -Z)
  { itemId: 10, position: [-3.5, 2.2, 14.95], rotation: [0, Math.PI, 0], frameWidth: 1.5, frameHeight: 2.0 },
  { itemId: 11, position: [3.5, 2.2, 14.95], rotation: [0, Math.PI, 0], frameWidth: 2.5, frameHeight: 1.0 },
];
