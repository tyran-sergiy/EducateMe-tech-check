import { useState } from 'react';
import type { PlanetType, MoonType } from '../types';
import Orbits from './Orbits';
import MoonsRow from './MoonsRow';

const PlanetRow = ({ planet, moons }: { planet: PlanetType; moons: MoonType[] }) => {
  const [selectedMoonsIds, setSelectedMoonsIds] = useState<number[]>([]);
  const toggleMoonSelection = (moonId: number) => {
    setSelectedMoonsIds(prev =>
      prev.includes(moonId) ? prev.filter(id => id !== moonId) : [...prev, moonId]
    );
  };

  return (
    <div className="relative flex h-28 items-center">
      <div className="basis-50 flex justify-around">
        <Orbits count={selectedMoonsIds.length}>
          <div className="planet">
            {planet.title}{' '}
            {!!selectedMoonsIds.length && (
              <span className="p-2 text-amber-600">{selectedMoonsIds.length}</span>
            )}
          </div>
        </Orbits>
      </div>
      <MoonsRow
        moons={moons}
        selectedMoonsIds={selectedMoonsIds}
        handleMoonClick={toggleMoonSelection}
      />
    </div>
  );
};
export default PlanetRow;
