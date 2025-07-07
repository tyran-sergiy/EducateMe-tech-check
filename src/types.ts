import { planets, moons } from './constants';

export type PlanetType = (typeof planets)[number];
export type MoonType = (typeof moons)[number];
