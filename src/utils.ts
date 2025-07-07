import { moons } from './constants';

export const getMoonsByPlanetMap = () => {
  return moons.reduce((map, moon) => {
    if (!map[moon.planetId]) {
      map[moon.planetId] = [];
    }
    map[moon.planetId].push(moon);
    return map;
  }, {} as Record<number, typeof moons>);
};
